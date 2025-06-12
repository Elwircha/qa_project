describe('Test for login page', () => {
    beforeEach(async () => {
        //open login page
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
        //find Username field
        const usernameField = await $('#user-name');
        //find password field
        const passwordField = await $('#password');
        //find **Login** button
        const loginButton = await $('#login-button');
        //fill in Username field
        await usernameField.setValue('standard_user');
        //fill in password field
        await passwordField.setValue('secret_sauce');
        //click on the Login button
        await loginButton.click();
        //check that inventory page loaded
        await browser.waitUntil (async () => {
            return (await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html';
        })
        //check that current URL is the same as expected
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('should not login with empty fields of username and password', async () => {
        //find Username field
        const usernameField = await $('#user-name');
        //find password field
        const passwordField = await $('#password');
        //find **Login** button
        const loginButton = await $('#login-button');
        //clear fields and set them empty
        await usernameField.setValue('');
        await passwordField.setValue('');
        //click on the Login button
        await loginButton.waitForClickable();
        await loginButton.click();
        // find element with error massage
        const errorElement = await $('[data-test="error"]');
        await errorElement.waitForDisplayed();
        //get the error text
        const errorText = await errorElement.getText();
        console.log('Error text found:', errorText);
        //check that error text include nessesary text
        await expect(errorElement).toBeDisplayed();
        await expect(errorText).toContain('Username is required');
    });
});
