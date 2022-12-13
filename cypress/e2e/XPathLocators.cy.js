describe("Xpath Locator",()=>{
    it("Test  Locator",()=>{
        cy.visit(`https://kokpit.uat.maxijett.com`)
        cy.xpath(`//input[@id='username']`).type("hot20")
        cy.xpath(`//input[@id='password']`).type("1234")
        cy.xpath(`//button[@type='submit']//span[contains(text(),'Giriş')]`).click()
        cy.xpath(`//span[contains(text(),'HIZLI SİPARİŞ VER')]`).click()
    })
})