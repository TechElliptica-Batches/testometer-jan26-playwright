const {Given, When, Then} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const {LoginPage} = require('../pages/LoginPage');

let browser;
let page;
let loginPage;

Given ("i open chrome" , async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage(); 
});

Given("i open url {string}" , async function(url){
    await page.goto(url);
    loginPage = new LoginPage(page);
});

When("i enter {string} in username block", async function(username){
    await loginPage.enterUsername(username);
});

When("i enter {string} in password block", async function(password){
    await loginPage.enterPassword(password);
});

When("i click on login button", async function(){
    await loginPage.clickLogin();
});

Then("i verify title of dashboard" , async function(){

})

When("i verify errormsg as {string}", async function(erroreMsg){
   await loginPage.validateErrorMsg(erroreMsg);
});





   



