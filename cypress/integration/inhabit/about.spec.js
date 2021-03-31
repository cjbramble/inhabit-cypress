/// <reference types="cypress" />

context('Contact', () => {
  beforeEach(() => {
    cy.visit('https://inhabitiq.com')
  })

  it('navigates to the About page', () => {
    cy.get('#top-menu > #menu-item-675 > a').click()
    cy.url().should('eq', 'https://inhabitiq.com/about/')
  })
})