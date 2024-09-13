import { expect } from '@playwright/test';
import { common } from './common';

let commonFunctions;
export class fastCheckout
{
    /**
   * @param {import('@playwright/test').Page} page
   */   

    constructor(page)
    {
        this.page = page;
        commonFunctions = new common(page);
        this.subTotal = this.page.locator("//div[.='Sub-Total:']/following-sibling::div");
        this.flatShippingRate = this.page.locator("//div[.='Flat Shipping Rate:']/following-sibling::div");
        this.localDeliveryRate = this.page.locator("//div[.='Local Delivery:']/following-sibling::div");
        this.total = this.page.locator("//div[.='Total:']/following-sibling::div");
    }

    /**
     * Verify Order summary - subtotal and Total by adding appropriate additional shipping/delivery cost
     * @param {string} deliveryMethod Value could be Flat Shipping Rate / Local Delivery 
     */
    async verifyOrderSummary(deliveryMethod, productInfoData)
    {
        let additionalCost;
        if(deliveryMethod.toLowerCase().includes("Shipping") )
        {
            additionalCost = await this.flatShippingRate.textContent();
        }
        if(deliveryMethod.toLowerCase().includes("local"))
        {
            additionalCost = await this.localDeliveryRate.textContent();
        }
        additionalCost = await commonFunctions.ConvertStringTo2DecimalPoint(additionalCost);

        //Get total price value from saved Json Data
        let totalPrice = productInfoData.totalPrice;
        totalPrice = await commonFunctions.ConvertStringTo2DecimalPoint(totalPrice);

        let subTotalPrice = this.subTotal.textContent();
        subTotalPrice = await commonFunctions.ConvertStringTo2DecimalPoint(subTotalPrice);
        //Verify total price value by comparing with subtotal
        expect(subTotalPrice).toBe(totalPrice);
        
        let totalPriceWithDelivery = this.total.textContent();
        totalPriceWithDelivery = await commonFunctions.ConvertStringTo2DecimalPoint(totalPriceWithDelivery);
        //verify total by adding additional costs in it
        expect(subTotalPrice + additionalCost).toBe(totalPriceWithDelivery);
    }
}