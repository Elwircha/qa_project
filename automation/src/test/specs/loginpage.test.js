describe('Test for login page', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    //clear the browser after each test
    afterEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
        await browser.deleteCookies();
    });

    it ('should log in successfully and redirect to inventory page', async () => {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');
        await usernameField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.click();
        //check that inventory page loaded
        await browser.waitUntil (async () => {
            return (await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html';
        })
        //check that current URL is the same as expected
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('should not login with empty fields of username and password', async () => {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');
        await usernameField.setValue('');
        await passwordField.setValue('');
        await loginButton.waitForClickable();
        await loginButton.click();
        const errorElement = await $('[data-test="error"]');
        await errorElement.waitForDisplayed();
        const errorText = await errorElement.getText();
        console.log('Error text found:', errorText);
        await expect(errorElement).toBeDisplayed();
        await expect(errorText).toContain('Username is required');
    });

        it ('should not login for blocked user', async () => {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');
        await usernameField.setValue('locked_out_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.waitForClickable();
        await loginButton.click();
        const errorElement = await $('[data-test="error"]');
        await errorElement.waitForDisplayed();
        const errorText = await errorElement.getText();
        console.log('Error text found:', errorText);
        await expect(errorElement).toBeDisplayed();
        await expect(errorText).toContain('Sorry, this user has been locked out.');
    });

        it ('should not login without username', async () => {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');
        await usernameField.setValue('');
        await passwordField.setValue('secret_sauce');
        await loginButton.waitForClickable();
        await loginButton.click();
        const errorElement = await $('[data-test="error"]');
        await errorElement.waitForDisplayed();
        const errorText = await errorElement.getText();
        console.log('Error text found:', errorText);
        await expect(errorElement).toBeDisplayed();
        await expect(errorText).toContain('Username is required');
    });

        it ('should not login without password', async () => {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');
        await usernameField.setValue('standard_user');
        await passwordField.setValue('');
        await loginButton.waitForClickable();
        await loginButton.click();
        const errorElement = await $('[data-test="error"]');
        await errorElement.waitForDisplayed();
        const errorText = await errorElement.getText();
        console.log('Error text found:', errorText);
        await expect(errorElement).toBeDisplayed();
        await expect(errorText).toContain('Password is required');
    });
});
