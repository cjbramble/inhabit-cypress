/// <reference types="cypress" />

describe('About', () => {
  it('Visits the About page', () => {
    cy.visit('/') // Set in cypress.json
    cy.get('#top-menu > #menu-item-675 > a').click()
    cy.url().should('eq', 'https://inhabitiq.com/about/')
  })
})
