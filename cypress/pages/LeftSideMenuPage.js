class LeftSideMenuPage {
    getFormsDropdown() {
      return cy.get("#forms");
    }
  
    getLoginMenuBtn() {
      return cy.get("#login");
    }
  }
  
  export default new LeftSideMenuPage();
  