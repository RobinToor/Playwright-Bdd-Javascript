# Playwright-Bdd-Javascript Automation Framework

Welcome to the **Playwright-Bdd-Javascript** repository! This project combines the capabilities of Playwright, Playwright BDD, and a Behavior-Driven Development (BDD) framework to create a highly scalable and efficient automation suite. The framework is designed using the **Page Object Model (POM)** and leverages **fixtures** for managing test data and state, resulting in cleaner and more maintainable test code.

## Features

- **Playwright Integration**: Utilize Playwright for high-performance browser automation.
- **BDD Framework**: Implement Behavior-Driven Development (BDD) with Playwright BDD, making test scenarios clear, concise, and human-readable.
- **Page Object Model (POM)**: Structured code for reusability and maintainability with a POM approach.
- **Fixtures Support**: Simplifies test setup and teardown with fixtures, promoting test isolation and reusability.
- **Parallel Test Execution**: Execute tests in parallel for faster feedback and efficient testing.
- **Retry Mechanism**: Automatically retries failed tests to enhance reliability.
- **Comprehensive Reporting**: Generates detailed HTML reports with execution results.
- **Cross-Browser Testing**: Run tests across different browsers and devices, ensuring cross-browser compatibility.
- **Environment Configuration**: Seamlessly manage environment-specific settings using **dotenv**.

## Installation

To get started with the Playwright-Bdd-Javascript framework, follow these steps:

### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/playwright-bdd-javascript.git
cd playwright-bdd-javascript
```
### 2. Install Dependencies:
```bash
npm install
```
### 3. Set Environment Variables:
Create .env files for various environments in the env directory to manage environment-specific settings.

## Configuration
This repository is highly configurable, with support for various environments, browsers, and devices. Below are key configuration details:

- Playwright Configuration (playwright.config.js)
- Supports parallel test execution.
- Retries on CI for more resilient tests.
- HTML reporting, tracing, screenshot, and video recording on first retries.
- Environment-specific settings managed via dotenv for flexible testing across different environments.



