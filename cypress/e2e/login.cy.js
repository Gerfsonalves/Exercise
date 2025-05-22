/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Testes de login', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')

  })

  it('Registrar um novo usuário', () => {
    cy.get('a[href="/login"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/login')
    cy.get('[data-qa="signup-name"]').type(faker.person.fullName())
    cy.get('[data-qa="signup-email"]').type(faker.internet.email())
    cy.get('[data-qa="signup-button"]').click()
    cy.url().should('include', '/signup')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type(faker.internet.password())
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
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
  })

})