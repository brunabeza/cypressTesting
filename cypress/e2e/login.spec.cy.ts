describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[name=email]').type('admin@admin.com')
    cy.get('input[name=password]').type('admin')

    cy.get('button[type=submit]').click()

    cy.url().should('eq', 'http://localhost:3000/dashboard')
  })
})
