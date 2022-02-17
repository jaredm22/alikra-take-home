describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/') 
    })
})
  
describe('Search Input', () => {
    it('accepts input', () => {
      const typedText = 'ATL'
  
      cy.get('.search-input-box')
        .type(typedText)
        .should('have.value', typedText)
    })

    it('searches and sorts', () => {    
        cy.get('table').get('tbody').get('.table-row').get('td').contains("ATL")
    })
})

describe('Table', () => {
    it('succesfully loads data', () => {
        cy.visit('/') 
        cy.get('table').get('tbody').should('contain', 'tr')
    })
})

