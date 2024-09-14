import { expect } from '@playwright/test';

export class common
{
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page)
    {
        this.page = page;
        this.btnSpecials = this.page.locator("//a[@id='menu_specials']");
        this.btnBuyNow = this.page.locator("#product_buy_now_btn");
        this.btnContinue = this.page.getByRole('button', { name: 'Continue' });
    }

    async ClickButton(buttonName)
    {
        let lowercaseString = buttonName.toLowerCase();
        if(lowercaseString.includes("specials"))
        {
            await this.btnSpecials.click();
        }
        else if(lowercaseString.includes("buy now"))
        {
            await this.btnBuyNow.click();
        }
        else
        {
            await this.page.getByRole('button', { name: `${buttonName}` }).click();
        }
    }

    async ValidateHeadingOnPage(headingText)
    {
        Promise.all(
            [
                this.page.waitForLoadState('domcontentloaded')
            ]
        );

        try {
            const heading = await this.page.getByRole('heading', { name: headingText });
            await heading.waitFor({ state: 'visible', timeout: 10000 });
            expect(heading).toBeVisible();
        } catch (error) {
            console.error(`Heading "${headingText}" not found. Check page content and selector.`);
            throw error;
        }

    }

    async ValidateErrorTextMessageOnPage(textMessage)
    {
        expect(await this.page.getByText(textMessage)).toBeVisible();
    }

    /**
     * 
     * @param {string} strValue Convert string value to boolean 
     * @returns return boolean output
     */
    async stringToBoolean(strValue) 
    {
        const truthyValues = ['true', 'yes', '1', 'y'];
        const falsyValues = ['false', 'no', '0', 'n'];

        strValue = strValue.trim().toLowerCase();
        if(truthyValues.includes(strValue)) return true;
        if(falsyValues.includes(strValue)) return false;

        throw new Error(`Cannot convert ${strValue} to boolean`);
    }

    /**
     * 
     * @param {string} elementLocator web element in a string format
     * @param {string} option option/ name to select from the dropdown
     */
    async SelectOptionByTextFromDropdown(elementLocator, option)
    {
        const dropdown = await this.page.locator(`${elementLocator}`);
        await dropdown.selectOption({label: `${option}`});
    }
    
    // Ensure if radio button is checked by passing webElement.
    //if not checked then click to check it.
    async EnsureRadioButtonChecked(radioButtonSelector) {
        const isChecked = await this.page.isChecked(radioButtonSelector);
        // If not checked, click to check it
        if (!isChecked) {
            await this.page.click(radioButtonSelector);
        }
    }

    /**
     * Converts string to 2 decimal point number
     * @param {string} number 
     * @returns {Float32Array} number with 2 decimal point
     */
    async ConvertStringTo2DecimalPoint(stringNum)
    {
        stringNum = stringNum.replace(/[^0-9.-]+/g,"");
        stringNum =  parseFloat(stringNum).toFixed(2);
        return stringNum
    }
    
    async WaitForPageLoadState(variable)
    {
        Promise.all(
            [
                this.page.waitForLoadState(`${variable}`)
            ]
        );
    }
    async WaitForPageNavigation()
        {
            // Wait for the navigation or changes to complete
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        }
}