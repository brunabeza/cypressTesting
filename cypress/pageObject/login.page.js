import { loginMappings } from "./login.mappings"

export class LoginPage {
    constructor() {
        this.usernameInputSelector = loginMappings.usernameInputSelector
        this.passwordInputSelector = loginMappings.passwordInputSelector
        this.signinSubmitButtonSelector = loginMappings.signinSubmitButtonSelector
    }

    login(username, password) {
        cy.get(this.usernameInputSelector).type(username)
        cy.get(this.passwordInputSelector).type(password)
        cy.get(this.signinSubmitButtonSelector).click()
    }
}

