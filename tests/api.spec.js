import {test, expect} from '@playwright/test';

test("get api", async({request}) => {
    const response = await request.get("https://www.saucedemo.com",
        {
            headers: {
                'Authorization' : 'Bearer token'
            },
            data: {
                // json
            }
        }
    );
    console.log("Resoponse Code : " + response.status())
    expect(response.status()).toBe(200)
    const body = await response.json();
    console.log(body)
})

// 500 
