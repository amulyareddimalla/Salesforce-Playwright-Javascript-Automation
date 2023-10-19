import {test, expect} from '@playwright/test'

test('Navigate to Service Cloud', async ({page})=>{

    await page.goto('https://login.salesforce.com/');

    await page.fill("//input[@id='username']",'amulyakrishna.amul@cunning-panda-dnvp76.com' )

    await page.fill("//input[@id='password']",'Jntuh*123' )

    await page.click("//input[@id='Login']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//div[@class='slds-icon-waffle']")

    await page.click("//p[normalize-space()='Service']")

})