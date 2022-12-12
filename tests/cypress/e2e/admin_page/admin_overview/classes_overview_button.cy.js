import { loginForAdmin } from '../../tools/login/login.js'

describe('Users overview button', () => {
  it('passes', () => {
    loginForAdmin();


      cy.get('#classes_button')
      .should('be.visible')
      .should('be.not.disabled')
      .click();

    cy.url()
      .should('eq', Cypress.config('baseUrl') + Cypress.env('admin_classes_page'));
  })
})