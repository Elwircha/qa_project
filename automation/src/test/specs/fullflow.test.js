const { expect } = require('chai');

describe('Successful login', () => {
    //add hook
    before(async () => {
        //open login page
        await browser.url('https://www.saucedemo.com/');
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
        await browser.waitUntil (async function () {
        return (await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html';
        })
        //check that current URL is the same as expected
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.equal('https://www.saucedemo.com/inventory.html');
    })
})
