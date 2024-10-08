import {expect} from "@playwright/test"
import { common } from "./common";
let requiredQty = null;
let commonFunctions;
export class productInfo
{
    /**
   * @param {import('@playwright/test').Page} page
   */ 

    constructor(page)
    {
        this.page = page;
        commonFunctions = new common(this.page);
        this.plusQuantity = page.locator(".plus-qnty");
        this.minussQuantity = page.locator(".minus-qnty");
        this.productQuantity = page.locator("#product_quantity");
        this.totalPrice = page.locator(".total-price");
        this.modelNumber = page.locator("//span[.='Model:']");
        this.productPrice = page.locator(".text-danger.mb-0");
    }

    //Update product qunatity for the order
    async UpdateQuantity(quantity)
    {
        await commonFunctions.WaitForPageLoadState('domcontentloaded');
        await commonFunctions.WaitForPageLoadState('networkidle');
        requiredQty =  parseInt(quantity);
        const defaultQty = 1;
        if(requiredQty>defaultQty)
        {
            //calculate the difference between default and required quantity
            const difference = requiredQty-defaultQty;
            //set loop to click + buttton to increase qty
            for(let i=0; i < difference; i++)
            {
                let initialText = await this.productPrice.textContent();
                await this.plusQuantity.waitFor({state:"visible"});
                await this.plusQuantity.click();
                Promise.all([
                    await this.page.waitForResponse(response => 
                        response.url().includes('/store/index.php?rt=r/product/product/calculateTotal') && response.status() === 200
                    ),
                    await this.page.waitForTimeout(2500),
                    // Wait for the content of that element to be updated
                    await this.page.waitForFunction((initialText) => {
                    const totalPriceElement = document.querySelector('.total-price');
                    return totalPriceElement && totalPriceElement.textContent !== initialText; 
                    }),
                ]);               
            }
        }
    //     // Wait for the content of that element to be updated
    //     await this.page.waitForFunction(() => {
    //     const totalPriceElement = document.querySelector('.total-price');
    //     return totalPriceElement && totalPriceElement.textContent.trim() !== ''; 
    // });
    }

    //Verify the Total price of the product
    async VerifyTotalPrice()
    {
        await commonFunctions.WaitForPageLoadState('domcontentloaded');
        let priceOfProductString = await this.productPrice.textContent();
        let priceOfProduct = await commonFunctions.ConvertStringTo2DecimalPoint(priceOfProductString);
        
        let expectedPrice = parseFloat(priceOfProduct * requiredQty).toFixed(2);
        
        let actualTotalPrice =  await this.totalPrice.textContent();
        actualTotalPrice = await commonFunctions.ConvertStringTo2DecimalPoint(actualTotalPrice);

        await expect(actualTotalPrice).toBe(expectedPrice);
    }

    //note down necessary product details in a json file for use
    async NoteProductInfo(productData)
    {
        productData.totalPrice = await this.totalPrice.textContent();
        productData.modelNumber = await this.modelNumber.textContent();
        return productData;
    }
}