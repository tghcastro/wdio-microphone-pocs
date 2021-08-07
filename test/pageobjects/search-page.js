const Page = require('./page');

class SearchPage extends Page {

    get buttonVoiceSearch () { return $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[3]/div[2]') }
    
    get inputSearch () { return $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input') }
    get buttonAcceptTerms () { return $('//*[@id="L2AGLb"]') }

    // chrome://settings/content/siteDetails?site=https%3A%2F%2Fwww.google.com%2F

    async searchByText (contentToSearch) {
        await this.inputSearch.setValue(contentToSearch);
        await this.clickOnEnter();
    }

    async searchByVoice () {
        await this.buttonVoiceSearch.click()
    }

    async acceptUsageTerms() {
        await this.buttonAcceptTerms.click()
    }

    async acceptMicrophoneUsageUsingKeyboard() {
        await browser.pause(5000)
        await this.clickOnTab();
        await this.clickOnEnter();
    }

    async clickOnEnter() {
        await browser.keys('Enter'); 
    }

    async clickOnTab() {
        await browser.keys(['Tab'])
    }

    open () {
        return super.open();
    }
}

module.exports = new SearchPage();
