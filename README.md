# RESTful Booker API Automation Framework

## Overview

This project is an API automation framework built using **Cypress** to test the **RESTful Booker API**. It demonstrates end-to-end API testing by automating authentication, booking management, CRUD operations, response validation, JSON schema validation, and negative test scenarios.

The framework follows a clean and reusable structure, making it easy to maintain and extend.

---

## Tech Stack

* Cypress
* JavaScript
* Node.js
* REST API
* JSON

---

## Features

* Authentication token generation
* Booking creation
* Retrieve booking by ID
* Retrieve all booking IDs
* Update booking
* Partial update booking
* Delete booking
* Status code validation
* Response body validation
* Response time validation
* JSON schema validation
* Negative API testing

---

## Project Structure

```text
cypress/
├── e2e/
│   ├── auth/
│   ├── booking/
│   └── bookingCRUD/
├── fixtures/
├── support/
└── schemas/

cypress.config.js
package.json
README.md
```

---

## Test Scenarios

### Authentication

* Generate Auth Token
* Invalid Authentication

### Booking

* Create Booking
* Get Booking by ID
* Get All Booking IDs

### Booking CRUD

* Update Booking
* Partial Update Booking
* Delete Booking

### Validation

* Status Code Validation
* Response Validation
* Response Time Validation
* JSON Schema Validation

### Negative Testing

* Invalid Credentials
* Invalid Booking ID
* Missing Required Fields
* Unauthorized Requests

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Nikita-Shrestha/restful-booker-api.git
```

Navigate to the project directory:

```bash
cd restful-booker-api
```

Install dependencies:

```bash
npm install
```

---

## Running the Tests

Run all tests:

```bash
npx cypress run
```

Open the Cypress Test Runner:

```bash
npx cypress open
```

---

## Skills Demonstrated

* API Automation Testing
* REST API Testing
* Cypress Framework Development
* CRUD API Testing
* Authentication Testing
* Assertions and Validations
* JSON Schema Validation
* Test Data Management
* Negative Testing

---

## Future Enhancements

* GitHub Actions CI/CD integration
* HTML reporting
* Data-driven testing
* Environment configuration
* Docker support

---

## Author

**Nikita Shrestha**

QA Engineer | Manual & Automation Testing

GitHub: https://github.com/Nikita-Shrestha
