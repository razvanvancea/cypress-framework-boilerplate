class LoginPage {
    getEmailField() {
      return cy.get("#email");
    }
  
    getPasswordField() {
      return cy.get("#password");
    }
  
    getCheckbox() {
      return cy.get("#exampleCheckbox");
    }
  
    getSubmitBtn() {
      return cy.get("#submitLoginBtn");
    }

    getResponseMessage() {
        return cy.get('#message');
    }
  }
  
  export default new LoginPage();
  