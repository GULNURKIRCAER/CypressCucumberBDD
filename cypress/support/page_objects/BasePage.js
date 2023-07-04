/// <reference types="cypress" />

class BasePage {
    //baseUrl = "https://www.webdriveruniversity.com/";
    
    //path base url'e eklenen kisim
    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default BasePage;