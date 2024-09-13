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
        requiredQty =  parseInt(quantity);
        const defaultQty = 1;
        if(requiredQty>defaultQty)
        {
            //calculate the difference between default and required quantity
            const difference = requiredQty-defaultQty;
            //set loop to click + buttton to increase qty
            for(let i=0; i < difference; i++)
            {
                await this.plusQuantity.click();
            }
        }
    }

    //Verify the Total price of the product
    async VerifyTotalPrice()
    {
        Promise.all([
            this.page.waitForLoadState('networkidle')
        ]);
        let priceOfProduct = await this.productPrice.textContent();
        priceOfProduct = await commonFunctions.ConvertStringTo2DecimalPoint(priceOfProduct);
        //priceOfProduct = priceOfProduct.replace(/[^0-9.-]+/g,"");
        //priceOfProduct =  parseFloat(priceOfProduct).toFixed(2);
        
        const expectedPrice = parseFloat(priceOfProduct * requiredQty).toFixed(2);
        
        let actualTotalPrice =  await this.totalPrice.textContent();
        actualTotalPrice = await commonFunctions.ConvertStringTo2DecimalPoint(actualTotalPrice);
        // actualTotalPrice = actualTotalPrice.replace(/[^0-9.-]+/g,"");
        // actualTotalPrice =  parseFloat(actualTotalPrice).toFixed(2);

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