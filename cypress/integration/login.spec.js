import LeftSideMenuPage from '../pages/LeftSideMenuPage';
import LoginPage from '../pages/LoginPage';

describe('login test suite', () => {
    beforeEach(() => {
      LeftSideMenuPage.getFormsDropdown().click();
      LeftSideMenuPage.getLoginMenuBtn().click();
    })
 
    const EMAIL = "admin@admin.com";
    const PSW = "admin123";
    const INVALID_PW = "lorem_ipsum";
    const SUCCESS_RESPONSE_MSG = "admin@admin.com, you have successfully logged in!";
    const ERROR_RESPONSE_MSG = "Bad credentials! Please try again! Make sure that you've registered.";

    it('login - valid creds', () => {
        cy.title().should('include', 'QA Practice | Learn with RV');
        LoginPage.getEmailField().type(EMAIL);
        LoginPage.getEmailField().should('have.value', EMAIL);

        LoginPage.getPasswordField().type(PSW);
        LoginPage.getSubmitBtn().click();
        LoginPage.getSubmitBtn().should('have.attr','class','btn btn-primary');
        LoginPage.getResponseMessage().should('be.visible');
        LoginPage.getResponseMessage().should('contain', SUCCESS_RESPONSE_MSG);
    })

    it('login - invalid creds', () => {
        LoginPage.getEmailField().type(EMAIL);
        LoginPage.getEmailField().should('have.value', EMAIL);

        LoginPage.getPasswordField().type(INVALID_PW);
        LoginPage.getSubmitBtn().click({ force: true });
        LoginPage.getResponseMessage().should('not.have.text', SUCCESS_RESPONSE_MSG);
        LoginPage.getResponseMessage().should('have.text', ERROR_RESPONSE_MSG);
    })
})
  