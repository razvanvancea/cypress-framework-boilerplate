import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import RegisterPage from "../pages/RegisterPage";

describe("Register test suite", () => {
  beforeEach(() => {
    LeftSideMenuPage.getFormsDropdown().click();
    LeftSideMenuPage.getRegisterMenuBtn().click();

    cy.fixture("register-data.json").then(function (data) {
      this.data = data;
    });
  });

  it("Register a new user", function () {
    const { firstName: FIRST_NAME, lastName: LAST_NAME, phone: PHONE, country: COUNTRY, email: EMAIL, password: PSW } = this.data;

    RegisterPage.getFirstNameField().type(FIRST_NAME);
    RegisterPage.getLastNameField().type(LAST_NAME);
    RegisterPage.getPhoneNumberField().type(PHONE);
    RegisterPage.getCountrySelectMenu().select(COUNTRY, {force: true}).should('have.value', COUNTRY);
    RegisterPage.getEmailAddressField().type(EMAIL)
    RegisterPage.getPasswordField().type(PSW);
    RegisterPage.getCheckBox().check().should('be.checked');
    RegisterPage.getRegisterBtn().click();

    RegisterPage.getRegisterResponseMessage().should("contain", this.data.expectedSuccessResponse);
  });
});
