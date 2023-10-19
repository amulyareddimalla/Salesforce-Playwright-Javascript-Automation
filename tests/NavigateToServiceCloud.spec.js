import {test, expect} from '@playwright/test'

test('Navigate to Service Cloud', async ({page})=>{

    await page.goto('https://login.salesforce.com/');

    await page.fill("//input[@id='username']",'--add your username--' )

    await page.fill("//input[@id='password']",'--add your password--' )

    await page.click("//input[@id='Login']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//div[@class='slds-icon-waffle']")

    await page.click("//p[normalize-space()='Service']")

})
