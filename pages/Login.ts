import { Locator, Page } from "playwright";

const {expect} = require('@playwright/test');

class LoginPage{
    private page: Page;
    private password: Locator;
    private loginbtn: Locator;
    private errorMsg: Locator;
    
    constructor(page:Page){
        this.page = page;
        //this.username = getElement(["//input[@placeholder='Username']", "//input[@id='abcd']"]);
        this.password = page.getByPlaceholder("Password");
        this.loginbtn = page.locator('//*[@id="login-button"]');
        this.errorMsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }
}

module.exports = {LoginPage}
