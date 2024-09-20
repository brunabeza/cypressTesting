describe('Login', () => {
  it('Should be able to login successfully', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Arvilla_Hegmann')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
  })
})