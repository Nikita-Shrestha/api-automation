describe("Header Validation", () => {
  it("Validate response headers", () => {
    cy.request("/booking").then((response) => {
      expect(response.headers).to.have.property("content-type");
      expect(response.headers["content-type"]).to.include("application/json");
    });
  });
});
