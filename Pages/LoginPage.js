exports.LoginPage=

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username="//input[@id='username']";
        this.password="//input[@id='password']";
        this.loginButton="//input[@id='Login']"

    }

    async gotoLoginPage(){
        await this.page.goto('https://login.salesforce.com/');

    }

    async login(username,password) {

        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();
    }


}