describe("Negative Test Cases", () => {
  it("Should not generate token with invalid credential", () => {
    cy.request({
      method: "POST",
      url: "/auth",
      failOnStatusCode: false,
      body: {
        username: "invalid",
        password: "invalid",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.reason).to.eq("Bad credentials");
    });
  });
});

describe("Get Booking-Invalid Id", () => {
  it("Should return 404 for invalid booking ID", () => {
    cy.request({
      method: "GET",
      url: "/booking/990000",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});

describe("Create booking-Missing fields", () => {
  it("Should not create booking with empty body", () => {
    cy.request({
      method: "POST",
      url: "/booking",
      failOnStatusCode: false,
      body: {},
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});
