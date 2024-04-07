import { Login } from "..pages/old_Login";

const loginPage = new Login();

describe("Test strony logowania z użyciem Page Object Pattern", () => {
    beforeEach(() => {
        loginPage.navigate();
    });

    it("Prawidłowe elementy są widoczne na stronie logowania", () => {
        loginPage.validateLoginTitle();
        loginPage.validateInputs();
        loginPage.validateButton();
        loginPage.validatePasswordLink();
    });
});