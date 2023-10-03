describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single pokemon page can be opened' , function() {
    cy.get('.list-item').contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})