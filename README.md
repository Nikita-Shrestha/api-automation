# RESTful Booker API Automation Framework

## Overview

This project is an API automation framework built with **Cypress** to test the RESTful Booker API. The framework automates authentication, booking management, CRUD operations, response validation, schema validation, and negative test scenarios.

The project follows a reusable framework structure using custom commands, fixtures, and helper files.

---

## Technologies Used

- Cypress
- JavaScript
- Node.js
- REST API
- JSON

---

## Project Structure

```
RESTFUL-BOOKER-API
│
├── cypress
│   ├── e2e
│   │   └── booking
│   │       ├── auth.cy.js
│   │       ├── booking.cy.js
│   │       ├── bookingCRUD.cy.js
│   │       ├── headers.cy.js
│   │       ├── negative.cy.js
│   │       └── schemaValidation.cy.js
│   │
│   ├── fixtures
│   │   ├── schemas
│   │   │   ├── authSchema.json
│   │   │   └── bookingSchema.json
│   │   ├── bookingData.json
│   │   └── example.json
│   │
│   ├── support
│   │   ├── apiHelper.js
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── reports
│   └── screenshots
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## Automated Test Scenarios

### Authentication
- Generate Authentication Token
- Invalid Authentication

### Booking
- Create Booking
- Get Booking by ID
- Get All Booking IDs

### Booking CRUD
- Update Booking
- Partial Update Booking
- Delete Booking

### Header Validation
- Verify Response Headers
- Verify Content-Type
- Verify Server Response

### Response Validation
- Status Code Validation
- Response Body Validation
- Response Time Validation

### JSON Schema Validation
- Authentication Schema Validation
- Booking Schema Validation

### Negative Test Scenarios
- Invalid Credentials
- Invalid Booking ID
- Missing Required Fields
- Unauthorized Access

---

## Installation

Clone the repository

```bash
git clone https://github.com/Nikita-Shrestha/api-automation.git
```

Install dependencies

```bash
npm install
```

---

## Running the Tests

Open Cypress Test Runner

```bash
npx cypress open
```

Run all tests in headless mode

```bash
npx cypress run
```

---

## Skills Demonstrated

- API Automation Testing
- Cypress Framework Development
- REST API Testing
- CRUD API Testing
- JSON Schema Validation
- Response Validation
- Header Validation
- Negative Testing
- Custom Cypress Commands
- Reusable Test Data using Fixtures

---

## Future Improvements

- CI/CD using GitHub Actions
- HTML Test Reports
- Environment Configuration
- Data-Driven Testing
- API Test Coverage Expansion

---

## Author

**Nikita Shrestha**

QA Engineer | Manual & Automation Testing
