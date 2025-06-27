class basePage {
    /**
 * Navigate to a sub-URL of the base page
 * @param {string} path
 */
    async open(path) {
        await browser.url(`https://www.saucedemo.com/${path}`);
    };
    async getTitle() {
        return browser.getTitle();
    };
};

module.exports = basePage;