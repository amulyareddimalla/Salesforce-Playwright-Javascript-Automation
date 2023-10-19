import {test, expect} from '@playwright/test'

test('Edit Case', async ({page})=>{

    await page.goto('https://login.salesforce.com/');

    await page.fill("//input[@id='username']",'amulyakrishna.amul@cunning-panda-dnvp76.com' )

    await page.fill("//input[@id='password']",'Jntuh*123' )

    await page.click("//input[@id='Login']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//div[@class='slds-icon-waffle']")

    await page.click("//p[normalize-space()='Service']")

    await page.click("//span[normalize-space()='Cases']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//a[normalize-space()='00001027']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//button[normalize-space()='Edit']")


    await page.waitForTimeout(5000) //pausing the code
    // await page.click("//button[normalize-space()='Edit']")
    await page.click("//lightning-combobox[@class='slds-form-element slds-form-element_stacked']//div[@role='none']")
    await page.waitForTimeout(5000) //pausing the code

    const options=await page.$$("//support-lwc-input-case-status[@data-input-element-id='input-field']//div[@role='listbox']")



    for(let option of options)
    {
        const value=await option.textContent()
        console.log(value)
        if(value.includes('Working'))
        {
            await option.click()
            break;
        }
    }

    await page.click("//button[@name='SaveEdit']")

    // await page.waitForTimeout(5000) //pausing the code

    const CaseNumber= await page.locator("//records-highlights-details-item[3]//div[1]").textContent()
    
    console.log(CaseNumber)


})