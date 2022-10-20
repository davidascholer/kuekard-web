/*
Testing on the production site. 
This is for tests that could change e.g. APIs, authentication, etc.
*/
describe('Testing the production site.', () => {
  beforeEach(() => {
    cy.visit('https://kuecards.com')
  })
  it('User object returned matches fixture.', () => {

  })
})