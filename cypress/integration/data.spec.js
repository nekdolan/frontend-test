describe('Data page', () => {
  it('loads page and loads data', () => {
    cy.visit('http://localhost:3000/data', { headers: {
        'x-api-key': '7a55204fb9d7076b6d73b3bc5d8ed2849d86a26e'
      }})
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('Second')
  })
})
