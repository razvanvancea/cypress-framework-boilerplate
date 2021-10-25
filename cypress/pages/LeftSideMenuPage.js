class LeftSideMenuPage {
    getFormsDropdown() {
      return cy.get("#forms");
    }
  
    getLoginMenuBtn() {
      return cy.get("#login");
    }

    getRegisterMenuBtn() {
        return cy.get("#register");
      }
  }
  
  export default new LeftSideMenuPage();
  