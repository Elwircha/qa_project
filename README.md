# QA Project for saucedemo.com

This is a test project to demonstrate manual and automated testing skills for a QA portfolio.

## Features

- Manual test cases (login, negative scenarios, cart functionality)
- Bug reports (UI and functional bugs)
- Automated UI tests using WebDriverIO + Mocha/Chai
- Page Object Model (POM) structure
- Coming soon: CI integration with GitHub Actions and Allure reports

### Project Structure
QA_PROJECT/  
├── automation/  
│ ├── artifacts/ # Screenshots, test reports, and other test artifacts  
│ ├── node_modules/ # Project dependencies (ignored by Git)  
│ ├── src/  
│ │ ├── configs/  
│ │ │ └── wdio.conf.js # Main WebDriverIO configuration file  
│ │ ├── helpers/  
│ │ │ └── testData.js # Input data and test constants  
│ │ ├── pageobjects/  
│ │ │ ├── page.js # Base Page Object class  
│ │ │ └── login.page.js # Login Page Object  
│ │ └── test/specs/  
│ │ └── tests.js # Test scenarios (Mocha/Chai)  
├── manual/  
│ └── test_cases.md # Manual test cases written in Markdown  
├── package.json # Project dependencies and scripts  
├── package-lock.json # Exact versions of installed dependencies  
├── README.md # Project documentation  

## Requirements
To run the tests, you need the following tools installed:

- **Node.js** (v14 or higher) and **npm**
- **Chrome**, **Microsoft Edge** and **Firefox**

### Setting up the project

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/qa_project.git
    ```

2. **Install dependencies**:

    In the project directory, run:

    ```bash
    npm install
    ```

### Running the Tests

1. **Start the tests**:

    To run the tests, use the following command:

    ```bash
    npm test
    ```

2. **Generating Reports**:

    After running the tests, you can generate reports with the following command:

    ```bash
    npx
    ```

    Then, to view the report:

    ```bash
    npx
    ```

---
## Contact

Created by [Elvira Sereda][def]

[def]: https://github.com/Elwircha