
// js = .spec.js, ts= .spec.ts
// Fixture - page. browser, context, request
// hooks = before each, after each, before all and after all
import test, { expect } from "playwright/test";
import alldata from '../test-data/login-data.json';
import { request } from "node:http";
const {LoginPage} = require('../pages/LoginPage');


test.describe('Invalid Login scenario ', ()=>{
    test.beforeEach( async({page}) => {
        await page.goto("https://www.saucedemo.com");
    })
    for(const data of alldata){
        test(`verify user able to see errormsg in case ${data.scenario}`, async({page}) => {
            const loginPage = new LoginPage(page);
            loginPage.login(data.username, data.password);
            loginPage.validateErrorMsg(data.errorMsg);
            
       });
    }
});
// Chrome = browser
// tab = page
// Version control 

// Typescript  + Mock the api + Object Oriented js/ts 
// GenAI


