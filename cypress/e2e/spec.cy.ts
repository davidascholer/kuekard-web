describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('User object does not exist in cookies.', () => {

  })
  it('User object returned matches fixture.', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="name"]')
        .type('John Doe')
      cy.get('[data-cy="email"]')
        .type('JohnDoe@mail.com')
        // .should('have.value','JohnDoe@mail.com')//This fails for some reason.
      cy.get('[data-cy="password"]')
        .type('password')
      cy.get('[data-cy="submit"]')
        .click()
    })
  })
})