const basePage = require('./basePage');

class loginPage extends basePage {  
    get usernameField() { return $('#user-name'); }  
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button');}
    get errorElement() { return $('[data-test="error"]'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async isErrorDisplayed() {
        await this.errorElement.waitForDisplayed();
    }

    async getErrorText() {
        return this.errorElement.getText();
    }
}

module.exports = new loginPage();