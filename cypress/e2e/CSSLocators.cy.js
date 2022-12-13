describe('CSSLocators',()=>{
    it("cssLocators",()=>{
        cy.visit("https://kokpit.uat.maxijett.com")
        // cy.get("[id='userName']").type("Suat VARLIKLI")
        cy.get(`[id='username']`).type("hot20")
        cy.get(`[id='password']`).type("1234")
        // cy.get("//textarea[@id='currentAddress']").type("Cypress Automation")
        // cy.get("//textarea[@id='permanentAddress']").type("Cypress Automation")
        cy.get(`[type='submit']`).click()
        cy.get(`"\\#mui\\-p\\-53945\\-T\\-FAST\\_ORDER"`).click()
    })
})