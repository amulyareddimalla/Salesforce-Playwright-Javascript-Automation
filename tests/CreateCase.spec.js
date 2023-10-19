import {test, expect} from '@playwright/test'

test('Create a Case', async ({page})=>{

    await page.goto('https://login.salesforce.com/');

    await page.fill("//input[@id='username']",'--add your username--' )

    await page.fill("//input[@id='password']",'--add your password--' )

    await page.click("//input[@id='Login']")

    await page.waitForTimeout(5000) //pausing the code

    await page.click("//div[@class='slds-icon-waffle']")

    await page.click("//p[normalize-space()='Service']")

    await page.click("//span[normalize-space()='Cases']")

    await page.click("//div[@title='New']")

    await page.click("//button[@aria-label='Case Origin, --None--']")
    await page.waitForTimeout(5000) //pausing the code

    const options=await page.$$("//div[@data-target-selection-name='sfdc:RecordField.Case.Origin']//span//slot//records-record-picklist[@data-input-element-id='input-field']//records-form-picklist//lightning-picklist//lightning-combobox//div//lightning-base-combobox//div//div[@role='listbox']")

    for(let option of options)
    {
        const value=await option.textContent()
        console.log(value)
        if(value.includes('Phone'))
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
