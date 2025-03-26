import { LoginPage } from '../pageObject/login.page'
import { loginMappings } from '../pageObject/login.mappings'
import { login } from '../support/login'

describe('Login', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    login()
  })

  it('Should be able to login successfully', () => {
    loginPage.login('Arvilla_Hegmann', 's3cret')
    
    cy.get(loginMappings.accountBalanceSelector).should('be.visible')
  })

  it('Should be able to logout successfully', () => {
    loginPage.logout('Arvilla_Hegmann', 's3cret')

    cy.get(loginMappings.signinTitleSelector).should('contain', 'Sign in')
  })

  it('Should not be able to login with wrong credentials', () => {
    loginPage.login('Arvilla_Hegmann', 'wrong_password')

    cy.get(loginMappings.signinErrorSelector).should('contain', 'Username or password is invalid')
  })

  it('Should not be able to login with empty credentials', () => {
    cy.get(loginMappings.signinSubmitButtonSelector).click()

    cy.get(loginMappings.usernameInputSelector).should('have.attr', 'aria-invalid', 'true')
  })
})

