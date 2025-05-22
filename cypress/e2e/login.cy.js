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
  })

  it('Registrar um novo usuário', () => {

    // Iniciando com a verificação da página correta para o registro
    cy.get('a[href="/login"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/login')

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
    cy.get('a[href="/login"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/login')

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()

  });

})