import Ajv from "ajv";

const ajv = new Ajv();

describe("Schema Validation", () => {
  it("Validate Auth Schema", () => {
    cy.fixture("schemas/authSchema.json").then((schema) => {
      cy.request("POST", "/auth", {
        username: "admin",
        password: "password123",
      }).then((response) => {
        const validate = ajv.compile(schema);

        expect(validate(response.body)).to.be.true;
      });
    });
  });

  it("Validate Booking Schema", () => {
    cy.fixture("schemas/bookingSchema.json").then((schema) => {
      cy.request("/booking/1").then((response) => {
        const validate = ajv.compile(schema);

        expect(validate(response.body)).to.be.true;
      });
    });
  });
});
