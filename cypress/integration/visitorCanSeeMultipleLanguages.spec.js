describe("Visitor can change language from", () => {
  before(() => {
    cy.visit("http://localhost:3001");
    cy.get('#english').click({ force: true });
  });

  it("English to Swedish", () => {
    cy.get('#home-button').should('contain', 'Home');
    cy.get('#language').should('contain', 'Swedish');
    cy.get('#swedish').click({ force: true });
    cy.get('#home-button').should('contain', 'Hem');
  });

  it("Swedish to English", () => {
    cy.get('#swedish').click({ force: true });
    cy.get('#home-button').should('contain', 'Hem');
    cy.get('#language').should('contain', 'Engelska');
  });
});

/* it("Home button should not contain 'navbar.home'", () => {
  cy.get('#home-button').should('not.contain', 'navbar.home');
}); */