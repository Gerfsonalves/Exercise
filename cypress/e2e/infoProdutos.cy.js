/// <reference types="cypress" />

describe('Pesquisar de produto e detalhes', () => {


    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    });

    it('Deve pesquisar produto específico e verificar detalhes', () => {

        // Verificar botão de produtos e acessar a página de produtos
        cy.get('a[href="/products"]').should('be.visible').click()
        cy.url().should('include', '/products');

        // Pesquisar o produto da área de pesquisa
        cy.get('#search_product').clear().type('Men Tshirt');
        cy.get('#submit_search').click()

        // Verificar detalhes do produto
        // Visualizar o produto pesquisado
        cy.contains('a', 'View Product').click()

        // Verificando detalhes
        cy.contains('h2', 'Men Tshirt').should('be.visible');
        cy.contains('span', 'Rs. 400').should('be.visible');
        cy.contains('label', 'Quantity:').should('be.visible');
        cy.contains('p', 'Availability: In Stock').should('be.visible');
    });
});