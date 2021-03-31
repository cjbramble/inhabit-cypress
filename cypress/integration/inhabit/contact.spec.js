/// <reference types="cypress" />

describe('Contact', () => {
  it('Visits the Contact page', () => {
    cy.visit('/')
    cy.get('#top-menu > #menu-item-21 > a').click()
    // TODO: fill in form. Stub network requests to avoid spamming.
  })
})
