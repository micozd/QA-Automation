describe ("Pierwszy blok testów", () => {
    //Test 1
    it ("Wpisz e-mail i hasło dla user888", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.login("user888@gmail.com", "1234567890")
        cy.get('#open-navigation-menu-mobile').click()
        cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible")
        cy.get(':nth-child(12) > .next-bve2vl').click()
    });
    //Test 2
    it ("Wpisz e-mail i hasło dla testowyqa", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.login("testowyqa@qa.team", "QA!automation-1")
        cy.get('#open-navigation-menu-mobile').click()
        cy.get(':nth-child(9) > .next-bve2vl').scrollIntoView().should("be.visible")
        cy.get(':nth-child(9) > .next-bve2vl').click()
    });

});