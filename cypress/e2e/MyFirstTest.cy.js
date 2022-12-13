
describe('My First Test',()=>{ //arr function
  
it('Verify title-positive',()=>{
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
  })

  it('Verify title-negative',()=>{
    //steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM123')
  })

})