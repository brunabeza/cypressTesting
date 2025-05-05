import { LoginPage } from '../pageObject/login/login.page'
import { loginMappings } from '../pageObject/login/login.mappings'
import { login } from '../support/login'

describe('Login', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    login()
  })

 it('Should be search successfully', () => {
    loginPage.login('Arvilla_Hegmann', 's3cret')
    
    cy.get(loginMappings.accountBalanceSelector).should('be.visible')
  })

})

