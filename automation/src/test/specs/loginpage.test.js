const data = require('../../helpers/testData');
const basePage = require('../../pageobjects/basePage');
const loginPage = require('../../pageobjects/login.page');

describe('Test for login page', () => {
    beforeEach(async () => {
        await loginPage.open('');
    });

    afterEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
        await browser.deleteCookies();
    });

    it ('should log in successfully and redirect to inventory page', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('should not login with empty fields of username and password', async () => {
        await loginPage.login('', '');
        await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();
        console.log('Error text found:', errorText);
        await expect(errorText).toContain('Username is required');
    });

        it ('should not login for blocked user', async () => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();
        console.log('Error text found:', errorText);
        await expect(errorText).toContain('Sorry, this user has been locked out.');
    });

        it ('should not login without username', async () => {
        await loginPage.login('', 'secret_sauce');
        await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();
        console.log('Error text found:', errorText);
        await expect(errorText).toContain('Username is required');
    });

        it ('should not login without password', async () => {
        await loginPage.login('standard_user', '');
        await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();
        console.log('Error text found:', errorText);
        await expect(errorText).toContain('Password is required');
    });
});
