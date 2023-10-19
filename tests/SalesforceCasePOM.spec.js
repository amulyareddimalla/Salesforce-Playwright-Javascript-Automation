const {test, expect} =require('@playwright/test')
import { LoginPage } from '../Pages/LoginPage';
import { NavigateToService } from '../Pages/NavigateToServiceConsole';
import { CreateNewCase } from '../Pages/CreateNewCase';

test('Salesforce New Case creation', async ({page})=> {

    //Login Functionality
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('--add your username--', '--add your password--')

    await page.waitForTimeout(3000) //pausing the code

    //Navigate to Service Console
    const navigateservice=new NavigateToService(page)
    await navigateservice.navigateToServiceConsole();

    //Create a New Case
    const createcase=new CreateNewCase(page)
    await createcase.clickCaseTab();
    await createcase.clickNewButton();
    await createcase.clickCaseOrigin();
    await createcase.selectCaseOrigin("Phone");
    await page.waitForTimeout(3000) //pausing the code
    await createcase.clickSaveButton();

    //Print the new case number created
    await createcase.getCaseNumber();

})
