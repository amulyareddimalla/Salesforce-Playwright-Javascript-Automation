exports.CreateNewCase = 

class CreateNewCase{
   
    constructor(page) {
      this.page = page;
      this.CaseTab= "//span[normalize-space()='Cases']";
      this.NewButton="//div[@title='New']";
      this.CaseOrigin="//button[@aria-label='Case Origin, --None--']"
      this.CaseOriginList="//div[@data-target-selection-name='sfdc:RecordField.Case.Origin']//span//slot//records-record-picklist[@data-input-element-id='input-field']//records-form-picklist//lightning-picklist//lightning-combobox//div//lightning-base-combobox//div//div[@role='listbox']"
      this.saveButton="//button[@name='SaveEdit']"
      this.casenumber="//records-highlights-details-item[3]//div[1]"

     }

    async clickCaseTab() {
        await this.page.locator(this.CaseTab).click(); 
       }

    async clickNewButton() {
        await this.page.locator(this.NewButton).click(); 
       }

    async clickCaseOrigin() {
        await this.page.locator(this.CaseOrigin).click(); 
       }
    

 
    async selectCaseOrigin(caseOriginValue) {
        const options = await this.page.$$(this.CaseOriginList);
         for (const option of options) {
            const Value = await option.textContent()
             if (Value.includes(caseOriginValue)) {
                await option.click()
                // break;
                }
           }
    }

    async clickSaveButton() {
        await this.page.locator(this.saveButton).click(); 
       }

    async getCaseNumber() {
        const CaseNumber= await this.page.locator(this.casenumber).textContent()
        console.log(CaseNumber)
    }

}