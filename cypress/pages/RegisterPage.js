class RegisterPage {
    getFirstNameField() {
      return cy.get("#firstName");
    }
  
    getLastNameField() {
      return cy.get("#lastName");
    }
  
    getPhoneNumberField() {
      return cy.get("#phone");
    }
  
    getCountrySelectMenu() {
      return cy.get("#countries_dropdown_menu");
    }
  
    getEmailAddressField() {
      return cy.get("#emailAddress");
    }
  
    getPasswordField() {
      return cy.get("#password");
    }
  
    getCheckBox() {
      return cy.get("#exampleCheck1");
    }
  
    getRegisterBtn() {
      return cy.get("#registerBtn");
    }

    getRegisterResponseMessage() {
        return cy.get("#message");
      }
  }

  export default new RegisterPage();
  