describe("Booking CRUD", () => {
  let token;
  let bookingId;

  before(() => {
    // Generate token
    cy.generateToken().then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.token;
    });

    // Create booking
    cy.fixture("bookingData").then((bookingData) => {
      cy.request({
        method: "POST",
        url: "/booking",
        body: bookingData,
      }).then((response) => {
        expect(response.status).to.eq(200);

        bookingId = response.body.bookingid;

        cy.log(`Booking ID: ${bookingId}`);
        console.log("Booking ID:", bookingId);
      });
    });
  });

  it("Get Booking", () => {
    cy.request({
      method: "GET",
      url: `/booking/${bookingId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstname).to.exist;
    });
  });

  it("Update Booking", () => {
    cy.fixture("bookingData").then((bookingData) => {
      bookingData.firstname = "Updated";

      cy.request({
        method: "PUT",
        url: `/booking/${bookingId}`,
        headers: {
          Cookie: `token=${token}`,
        },
        body: bookingData,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstname).to.eq("Updated");
      });
    });
  });

  it("Delete Booking", () => {
    cy.request({
      method: "DELETE",
      url: `/booking/${bookingId}`,
      headers: {
        Cookie: `token=${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
