/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('Fazer contato por "Contact us"', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    });

    it('Efetuar todo processo para contato', () => {

        // Gerando um .txt ficticío
        const nomeArquivo = 'exemplo.txt';
        const conteudo = 'Este é um conteúdo fictício para o upload.';

        // Verificar botão de logout e fazer o logout
        cy.get('a[href="/contact_us"]').should('be.visible').click()
        cy.url().should('include', '/contact_us');

        // Processo para preencher fomulário
        cy.get('[data-qa="name"]').type(faker.person.firstName())
        cy.get('[data-qa="email"]').type(faker.internet.email())
        cy.get('[data-qa="subject"]').type('Candidatura à vaga de [cargo]')
        cy.get('[data-qa="message"]').type('Meu nome é Carlos e tenho grande interesse na oportunidade do Cargo anunciado.')

        // Fazendo o upload do txt.
        cy.get('input[name="upload_file"]').attachFile({
            fileContent: conteudo,
            fileName: nomeArquivo,
            mimeType: 'text/plain',
            encoding: 'utf-8'
        });

        cy.get('[data-qa="submit-button"]').click()

        // Verificar se foi enviado com sucesso
        cy.get('div.status.alert.alert-success')
            .should('be.visible')
            .and('have.text', 'Success! Your details have been submitted successfully.');

    });

});



