import {expect} from '@playwright/test';
const { common } = require('./common');
let commonFunctions;

export class subscribe
{
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page)
    {
        this.page = page;
        commonFunctions = new common(this.page);
        this.txtBoxFirstName = page.getByLabel('First Name');
        this.txtBoxLastName = page.getByLabel('Last Name');
        this.txtBoxEmail = page.getByLabel('E-mail:');
        this.txtBoxCatpchaCode = page.getByLabel('Enter code:');
        this.buttonContinue = page.getByRole('button', { name: ' Continue' });
    }


    async FillInfoToSubscribe(firstName, lastName, captchaCode, isCaptchaValid)
    {
        this.page.waitForLoadState('domcontentloaded');
        await this.txtBoxFirstName.fill(firstName);
        await this.txtBoxLastName.fill(lastName);
        let value = await commonFunctions.stringToBoolean(isCaptchaValid);

        if(!value)
        {
            await this.txtBoxCatpchaCode.fill(captchaCode);
        }
        else
        {
            //Implement code here If you need to provide a valid capthca code
        }
        await this.buttonContinue.click();
    }

   

}