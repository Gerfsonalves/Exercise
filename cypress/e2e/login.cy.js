/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Testes de login', () => {

  // Variáveis para usar em outros 'it' os mesmos dados
  let nomeCompleto, email, senha;

  before(() => {
    nomeCompleto = faker.person.fullName();
    email = faker.internet.email();
    senha = faker.internet.password();
  })

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')

    // Iniciando com a verificação se está na página correta
    cy.verificacaoDaPagina()
  })

  it('Registrar um novo usuário', () => {

    // Inicio do processo para registro do usuário
    cy.get('[data-qa="signup-name"]').type(nomeCompleto)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    // Preenchendo e selecionando todos os dados do novo usuário
    cy.url().should('include', '/signup')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type(senha)
    cy.get('[data-qa="days"]').select('5')
    cy.get('[data-qa="months"]').select('June')
    cy.get('[data-qa="years"]').select('1993')
    cy.get('[data-qa="first_name"]').type(faker.person.firstName())
    cy.get('[data-qa="last_name"]').type(faker.person.lastName())
    cy.get('[data-qa="company"]').type(faker.company.name())
    cy.get('[data-qa="address"]').type(faker.location.streetAddress())
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type(faker.location.state())
    cy.get('[data-qa="city"]').type(faker.location.city())
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number())

    // Clicando no botão e finalizando o registro do usuário
    cy.get('[data-qa="create-account"]').click()

    // Verificando se a conta foi criada com sucesso
    cy.contains('Account Created!').should('be.visible')
  })

  it('Login com email e senha correta', () => {

    // Preenchendo os dados necessarios
    cy.login(email, senha)
  })

  it('Logout da conta', () => {

    // Preenchendo os dados necessarios
    cy.login(email, senha)

    // Verificar botão de logout e fazer o logout
    cy.get('a[href="/logout"]').should('be.visible').click()

    // Verificação se o logout foi concluído
    cy.url().should('include', '/login')

  })

  it('Deletar conta', () => {

    // Preenchendo os dados necessarios
    cy.login(email, senha)

    // Verificar botão deletar e fazer o click
    cy.get('a[href="/delete_account"]')
      .should('be.visible')
      .click()

    // Verificação se a exclusão foi concluído
    cy.url().should('include', '/delete_account')
  });

  it('Login com email e senha incorreta', () => {

    // Preenchendo com dados incorretos
    cy.login("email.br", "123456")

    // Verificar se o campo do email foi considerado inválido
    cy.get('input[type="email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });

  });

})