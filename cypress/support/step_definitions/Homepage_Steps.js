/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/BasePage";
import Homepage from "../page_objects/Homepage";

//const url = "http://www.webdriveruniversity.com/";

const basePage = new BasePage();
const homepage = new Homepage();

Before(() => {
    cy.log("Executing commands inside Homepage Steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
  // cy.visit(url);
  // basePage.navigate("");
  // homepage.navigate("");
  // cy.wait(5000);

  loginPage.navigateTo_Login_Page();
});

When(`I click on the contact us button`, () => {
  // target 2. pencerede acilmaliyken bununla ayni
  // pencerede acilmasini sagliyoruz

  cy.get("#contact-us").scrollIntoView();

  // cy.get("#contact-us").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#contact-us");
  homepage.clickOn_ContactUs_Button();
  // cy.wait(5000);
});

When(`I click on the login portal button`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLink_InSameTab("#login-portal");
  homepage.clickOn_Login_Button();
});
