/// <reference types="cypress" />

import BasePage from "./BasePage";

class Homepage extends BasePage {
    navigateToHomepage() {
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab("#contact-us");
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab("#login-portal");
    }
}
export default Homepage;