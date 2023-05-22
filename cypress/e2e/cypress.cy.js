beforeEach(function () {
  cy.visit("http://localhost:5000");
});

describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});

describe("Page manipulation", function () {
  it("Can visit a single pokemon's page", function () {
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
});
