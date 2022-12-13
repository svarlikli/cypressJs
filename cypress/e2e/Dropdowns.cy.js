describe('handle dropdowns', () => {
    it.skip('Dropdown with select', () => { // skip kullanarak stepi commente almadan çalışmamasını sağlayabiliriz.
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        // select içerisinde yazılan parametre tek tırnak içerisinde yazılmalı.
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy')
    })

    it.skip('Dropdown with select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
         // açılır menüyü açma
        cy.get('#select2-billing_country-container').click()
        //açılır menüdeki textbox inputuna text girip enter ' a basma
        cy.get('.select2-search__field').type('Italy').type('{enter}') 

        cy.get('#select2-billing_country-container')
        .should('have.text','Italy')  
    })

    it.skip('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains(' Sultanlığı').click()
    })

    it('Dynamic dropdown', () => {
        cy.visit("https://www.google.com/")

        cy.get('#W0wltc > .QS5gu').click()
        cy.get("input[name='q']").type('cypress automation')
        
        cy.wait(3000)

        cy.get("div.wM6W7d>span").should('have.length',11) // element sayısını assert etme işlemi.

        cy.get("div.wM6W7d>span").each( ($el,index,$list)=>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        } )

        cy.get("input[name='q']").should('have.value','cypress automation tool')//seçilen elementin textini assert etme
    })
})