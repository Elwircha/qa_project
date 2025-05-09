# QA Project
This repository contains manual and automated tests for logging into the **Sauce Demo** application.

# Requirements
To run the tests, you need the following tools installed:

- **Node.js** (v14 or higher) and **npm**
- **Chrome**, **Microsoft Edge** and **Firefox**

### Setting up the project

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/aqa_project.git
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
### Project composition
`/aqa_project/`  
├── `/artifacts/`  # Folder for saving screenshots and other artifacts (e.g. videos)  
├── `/node_modules/`  
├── `/src/`  
│   ├── `/configs/`    # Folder for storing various configurations  
│   │   └── `/wdio.conf.js`   # WebDriverIO configuration files  
│   ├── `/helpers/`    # Utilities and test data  
│   │   └── `/testData.js`  
│   ├── `/pageobjects/`    # Page Object Model (POM)   
│   │   ├── `/page.js`    # Page to go to the start page  
│   │   └── `/login.page.js`  # Login page  
│   ├── `/test/`  
│   │   ├── `/specs/`  
│   │   │   └── `/login.spec.js`  # Base test file for login page  
├── `/package.json`  
├── `/package-lock.json`  
└── `/README.md`  


### Test Cases

I'll start from positive scenario and after check negative:

1. **UserStory_1 Successful login with correct credentials**:
   - Type credentials in username which are under "Accepted usernames are:" section.
   - Enter password wich are under "Password for all users:" section.
   - Click on Login button
   - Validate URL, it should be change on "https://www.saucedemo.com/inventory.html".

2. **UserStory_2 Test Login form with empty credentials**:
   - Type any credentials into "Username" and "Password" fields.
   - Clear the inputs.
   - Click on Login button.
   - Check the error messages: **"Epic sadface: Username is required"**.

3. **UserStory_3 Test Login form with credentials by passing Username**:
   - Type credentials in username which are under "Accepted usernames are:" section.
   - Enter any password.
   - Clear the "Password" input.
   - Click on Login button.
   - Check the error messages: **"Epic sadface: Password is required"**.


## Contact

Created by [Elvira Sereda][def]

[def]: https://github.com/Elwircha