import {expect} from '@playwright/test';

export class store
{
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page)
    {
        this.page = page;
        this.buttonViewAll = page.locator("text=view all");
        this.txtBoxEnterEmailToSubscribe = page.getByPlaceholder('Subscribe to Newsletter');
        this.buttonSubscribe = page.locator("button:has-text('Subscribe')");
        this.labelThankYou = page.locator("//span[normalize-space()='Thank you!']");
    }

    async EnterdetailsToSubscribe(emailAddress)
    {

        await this.txtBoxEnterEmailToSubscribe.focus();
        await this.txtBoxEnterEmailToSubscribe.fill(emailAddress);
    }

    async ClickButton(buttonName)
    {
        let lowercaseString = buttonName.toLowerCase();
        if(lowercaseString.includes("subscribe"))
        {
            await this.buttonSubscribe.click();
        }
        if (lowercaseString.includes("view all")) {
            await this.buttonViewAll.click();
        }
    }
    async VerifySubscribeFeature()
    {   
        await expect(this.labelThankYou).toBeVisible();
    }

    async NavigateToTheWebsite()
    {
        await this.page.goto("https://LetsTestTogether.com/store")
    }

}