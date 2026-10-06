# Playwright Automation Framework
A UI test automation framework built using **Playwright and TypeScript**, following industry-standard automation practices such as Page Object Model, fixtures, reusable utilities, authentication handling, test categorization, and CI/CD integration.
## Tech Stack
Playwright
TypeScript
Node.js
Git & GitHub
GitHub Actions
Jenkins
HTML Reporting
## Project Structure
Playwright/
├── auth/
├── e2e/
├── fixtures/
├── pages/
├── tests/
│   ├── Negative/
│   ├── Regression/
│   ├── Sanity/
│   └── smoke/
├── utils/
├── .github/
│   └── workflows/
│       ├── Jenkinsfile
│       └── playwright.yml
├── playwright.config.ts
├── package.json
└── README.md

## Test Coverage
The framework includes:
Smoke Testing
Sanity Testing
Regression Testing
Negative Testing
Functional UI Testing
Authentication / Session Handling
Page Object Model
Reusable Fixtures
Assertions and validations

## Installation
Clone the repository:
git clone https://github.com/hasratrana/Automation-Playwright.git
Install dependencies:

npm ci
Install Playwright browsers:
npx playwright install

## Run Tests
Run all tests:
npx playwright test

Run Smoke tests:
npx playwright test tests/smoke
Run Sanity tests:
npx playwright test tests/Sanity
Run Regression tests:
npx playwright test tests/Regression
Run Negative tests:
npx playwright test tests/Negative
Run tests in headed mode:
npx playwright test --headed

## Test Reporting
The framework uses the Playwright HTML Reporter.
View the report using:
npx playwright show-report

## CI/CD
### GitHub Actions

The project is integrated with GitHub Actions to:

1. Checkout the code
2. Install Node.js dependencies
3. Install Playwright browsers
4. Execute Playwright tests
5. Upload test reports

### Jenkins

The project is also integrated with Jenkins.
Jenkins is configured with **Poll SCM** to detect changes pushed to the GitHub `login-test` branch.
Pipeline flow:
GitHub Push
    ↓
Jenkins Poll SCM
    ↓
Checkout Code
    ↓
Install Dependencies
    ↓
Install Playwright
    ↓
Run Tests
    ↓
Generate HTML Report

The Jenkins pipeline has successfully executed **15 Playwright tests with 15 passed**.

## GitHub

https://github.com/hasratrana/Automation-Playwright
