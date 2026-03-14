
Technical Side

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator('//*[@id="login-button"]').click(); 
    await page.selectOption("[class=product_sort_container]", {label : ""});

# Ghrkin Language
# Feature Scenario Given When Then , Scenario Outline


    i open chrome
    i open url "https://www.saucedemo.com"
    i enter "standard_user" in username block
    i enter "secret_sauce" in password block
    i click on login button
    
# Rule 1 - All testcases should be written inside feature file