// cypress/support/commands.js
Cypress.Commands.add('verificacaoDaPagina', () => {
    cy.get('a[href="/login"]').should('be.visible').click();
    cy.url().should('include', '/login');
});


Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-qa="login-email"]').clear().type(email);
    cy.get('[data-qa="login-password"]').clear().type(senha);
    cy.get('[data-qa="login-button"]').click();
});
