const searchPage = require('../pageobjects/search-page');


describe('Search on Google', () => {
    before(async function() {
        await searchPage.open();
        await searchPage.acceptUsageTerms();
    });

    beforeEach(async function() {
        await searchPage.open();
    });

    afterEach(async function() {
        await browser.pause(5000)
    });

    // it('allows searching by text', async () => {
    //     await searchPage.searchByText("Webdriver IO");
        
    // });

    // it('allows microphone usage using keyboard', async () => {
    //     await searchPage.searchByVoice();
    //     await searchPage.acceptMicrophoneUsageUsingKeyboard();
    // });

    it('allows microphone usage in Chrome configurations', async () => {
        await browser.url('chrome://settings/content/siteDetails?site=https%3A%2F%2Fwww.google.com%2F')
        await browser.pause(1000)
        // TODO: Why xpath is not working?!
        //const dropDownMicrophonePermission = await $('//select[@aria-label="Microphone"]')
        //await dropDownMicrophonePermission.selectByAttribute('value', 'allow')
        await browser.keys(['Tab'])
        await browser.keys(['Tab'])
        await browser.keys(['Tab'])
        await browser.keys(['Tab'])
        await browser.keys(['Tab'])
        await browser.keys(['Down arrow'])
        await browser.pause(1000)
        await searchPage.open();
        await searchPage.searchByVoice();
    });
});


