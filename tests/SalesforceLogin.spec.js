const {test, expect} =require('@playwright/test')

test('Salesforce Login', async ({page})=> {
    
    await page.goto('https://login.salesforce.com/');

    await page.fill("//input[@id='username']",'--add your username--' )

    await page.fill("//input[@id='password']",'--add your password--' )

    await page.click("//input[@id='Login']")

    await page.waitForTimeout(5000) //pausing the code

    const pageTitle=page.title;

    console.log('Page title is:', pageTitle);

    const pageURL=page.url();

    console.log('Page URL is:', pageURL);

    await expect(page).toHaveTitle('Home | Salesforce');

    await expect(page).toHaveURL('https://cunning-panda-dnvp76-dev-ed.trailblaze.lightning.force.com/lightning/setup/SetupOneHome/home');

    await page.close();

})
