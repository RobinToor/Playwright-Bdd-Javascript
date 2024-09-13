import { expect } from "@playwright/test";

export class specialoffers
{
    /**
   * @param {import('@playwright/test').Page} page
   */   
    constructor(page)
    {
        this.page = page;
        this.productcards = page.locator("//*[@class='product-card card p-0 border-0']");
    }

    // Select desired product from the Special Offers to View
    async SelectProductToView(expectedproductName)
    {
        Promise.all([
            this.page.waitForLoadState('domcontentloaded')
        ]);
        const count = await this.productcards.count();
        for(let i =0; i < count; i++)
        {
            let actualproductname = await this.productcards.nth(i).locator("//*[@class='link-dark product-name']").textContent();
            actualproductname = actualproductname.replace(/\n/g, '').trim();
            if(actualproductname == expectedproductName)
            {
                await this.productcards.nth(i).locator("//*[@class='prod-img position-relative overflow-hidden']").hover();
                await this.productcards.nth(i).locator("//*[@class='bi bi-eye']").click();
                break;
            }            
        }
    }

}
