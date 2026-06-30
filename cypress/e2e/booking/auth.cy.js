import "../../support/commands";
describe("Auth", () => {
  it("Generate Token", () => {
    cy.generateToken().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;
    });
  });
});
