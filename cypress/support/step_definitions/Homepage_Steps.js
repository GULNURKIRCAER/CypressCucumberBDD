/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Given(`I navigate to the webdriveruniversity homepage`, () => {
  cy.visit(url);
  // cy.wait(5000);
});

When(`I click on the contact us button`, () => {
  // target 2. pencerede acilmaliyken bununla ayni 
  // pencerede acilmasini sagliyoruz
  
  cy.get("#contact-us").scrollIntoView();

  cy.get("#contact-us").invoke('removeAttr', 'target').click();

  // cy.wait(5000);
});

When(`I click on the login portal button`, () => {
  cy.get("#login-portal").invoke("removeAttr", "target").click();
})
