/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../page_objects/ContactUsPage";

const contactUsPage = new ContactUsPage();


When("I type a first name", () => {
  // cy.get('[name="first_name"]').type("Joe");
  contactUsPage.type_FirstName("Joe");
});

Then("I type a last name", () => {
  // cy.get('[name="last_name"]').type("Blogs");
  contactUsPage.type_LastName("Blogs");
});

When("I enter an email address", () => {
  // cy.get('[name="email"]').type("joe_blogs123@mail.com");
  contactUsPage.type_EmailAddress("joe_blogs123@mail.com");
});

When("I type a comment", () => {
  // cy.get('textarea[name="message"]').type("Hello world!");
  contactUsPage.type_Comment("Hello world!");
});

When("I click on the submit button", () => {
  // cy.get('[type="submit"]').click();
  contactUsPage.clickOn_Submit_Button();
});

Given(
  "I should be presented with a successful contact us submission message",
  () => {
    // cy.get("h1").should("have.text", "Thank You for your Message!");
    contactUsPage.validate_Submission_Header('Thank You for your Message!');
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    // cy.get("body").contains("Error: Invalid email address");
    contactUsPage.validate_Submission_Header('Error: Invalid email address');
  }
);

When("I type a specific first name {string}", (firstName) => {
  // cy.get('[name="first_name"]').type(firstName);
  contactUsPage.type_FirstName(firstName);
});

When("I type a specific last name {string}", (lastName) => {
  // cy.get('[name="last_name"]').type(lastName);
  contactUsPage.type_LastName(lastName);
});

When("I type a specific email address {string}", (email) => {
  // cy.get('[name="email"]').type(email);
  contactUsPage.type_EmailAddress(email);
});

When(
  "I type a specific word {string} and number {int} within the comment input field",
  (word, number) => {
    // cy.get('textarea[name="message"]').type(word + " " + number);
    contactUsPage.type_Comment(word + " " + number);
  }
);

When(
  "I type a first name {word} and a last name {string}",
  (firstName, lastName) => {
    // cy.get('[name="first_name"]').type(firstName);
    contactUsPage.type_FirstName(firstName);
    // cy.get('[name="last_name"]').type(lastName);
    contactUsPage.type_LastName(lastName);
  }
);

When("I type a {string} and a comment {string}", (email, comment) => {
  // cy.get('[name="email"]').type(email);
  contactUsPage.type_EmailAddress(email);
  // cy.get('textarea[name="message"]').type(comment);
  contactUsPage.type_Comment(comment);
});

Then("I should be presented with header text {string}", (message) => {
  // cy.xpath("//h1 | //body").contains(message);
  contactUsPage.validate_Submission_Header(message);
});
