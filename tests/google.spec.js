import test, { expect } from "playwright/test";

// Browser  ->  Playwright    -> Server

test("demo qa books" , async({page}) => {

    await page.route('**/BookStore/v1/Books', async(route) => {
        const MockData = {
            books: [{
                title: "Automation Learning",
                subTitle: "A Mocking Test",
                author: "vaibhav Singh",
                publish_date: "2026-21-12T08:48:39.000Z",
                publisher: "Testometer",
                pages: 100,
                description: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            }
            ]
        };

        route.fulfill({
            status:500,
            contentType : 'application/json',
            body : JSON.stringify(MockData)
        })
    })


    await page.goto("https://demoqa.com/books");
    await page.pause(10000);
})