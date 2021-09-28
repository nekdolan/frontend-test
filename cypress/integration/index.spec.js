
describe('Login page', () => {
  it('loads page and loads data', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name=user]').type('admin')
    cy.get('input[name=password]').type('Admin123{enter}')
    cy.url().should('include', '/data')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('Second')
  })
})
