
// js = .spec.js, ts= .spec.ts
// Fixture - page. browser, context, request
// hooks = before each, after each, before all and after all
import test, { expect } from "playwright/test";


test.beforeEach( async({page}) => {
    await page.goto("https://www.saucedemo.com");
} )

test("verify user able to login in application", async({page}) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('//*[@id="login-button"]').click(); 
    await page.selectOption("[class=product_sort_container]", {label : ""});
});

test("verify user able to see errormsg in case invalid credentials", async({page}) => {
    await page.getByPlaceholder("Username").fill("standard_userqwe");
    await page.getByPlaceholder("Password").fill("secret_sauce1234");
    await page.locator('//*[@id="login-button"]').click();
    let expectedError = "Epic sadface: Username and password do not match any user in this service";
    expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(expectedError);
});

test("verify user able to see errormsg in case empty credentials", async({page}) => {
    await page.locator('//*[@id="login-button"]').click();
    let expectedError = "Epic sadface: Username is required";
    expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(expectedError);      
});


// Chrome = browser
// tab = page

// last phase 
// framework process. typescript, bdd-cucumber, api testing


// 8AM  