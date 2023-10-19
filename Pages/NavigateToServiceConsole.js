exports.NavigateToService=

class NavigateToService{

    constructor(page) {
        this.page=page;
        this.applauncher="//div[@class='slds-icon-waffle']";
        this.serviceconsole="//p[normalize-space()='Service']";
    }

    async navigateToServiceConsole(){
        await this.page.locator(this.applauncher).click();
        await this.page.locator(this.serviceconsole).click();

    }

}