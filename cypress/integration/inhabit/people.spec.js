/// <reference types="cypress" />

describe('People', () => {
  it('Visits the People page', () => {
    cy.visit('/') // Set in cypress.json
    cy.get('#top-menu > #menu-item-542 > a').click()
    cy.url().should('eq', 'https://inhabitiq.com/people/')
    cy.get('#Lisa-Stinnett > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > h4')
    .should("have.text", 'Lisa Stinnett / CEO')
  })
})
