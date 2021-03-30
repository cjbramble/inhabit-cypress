/// <reference types="cypress" />

context('Contact', () => {
  beforeEach(() => {
    cy.visit('https://inhabitiq.com')
  })

  it('navigates to the Contact page', () => {
    cy.get('#top-menu > #menu-item-21 > a').click()
  })
})