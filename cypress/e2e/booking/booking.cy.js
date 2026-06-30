describe("Booking Api", () => {
  it("Get all booking IDS", () => {
    cy.request("GET", "/booking").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });
});
