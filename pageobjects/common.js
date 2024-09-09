import { expect } from '@playwright/test';

export class common
{
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page)
    {
        this.page = page;
    }

    async ValidateHeadingOnPage(headingText)
    {
        expect(await this.page.getByRole('heading', { name: headingText })).toBeVisible();
    }

    async ValidateErrorTextMessageOnPage(textMessage)
    {
        expect(await this.page.getByText(textMessage)).toBeVisible();
    }

    async stringToBoolean(strValue) 
    {
        const truthyValues = ['true', 'yes', '1', 'y'];
        const falsyValues = ['false', 'no', '0', 'n'];

        strValue = strValue.trim().toLowerCase();
        if(truthyValues.includes(strValue)) return true;
        if(falsyValues.includes(strValue)) return false;

        throw new Error('Cannot convert "${strValue} to boolean');
    }

}