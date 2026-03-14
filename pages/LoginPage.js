
const {expect} = require('@playwright/test');

class LoginPage{
    
    constructor(page){
        this.page = page;

        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginbtn = page.locator('//*[@id="login-button"]');
        this.errorMsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }

    async enterUsername(username){
        await this.username.fill(username);
    }
    async enterPassword(password){
         await this.password.fill(password);
    }
    async clickLogin(){
        await this.loginbtn.click();
    }

    async validateErrorMsg(expectedErrorMsg){
        expect(this.errorMsg).toHaveText(expectedErrorMsg);
    }
}

module.exports = {LoginPage}
