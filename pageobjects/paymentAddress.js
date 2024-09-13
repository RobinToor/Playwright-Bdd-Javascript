import { expect } from "@playwright/test";
import { common } from "./common";
import { DataTable } from "playwright-bdd";
let commonFunctions;
export class paymentAddress
{
    /**
   * @param {import('@playwright/test').Page} page
   */   

    constructor(page)
    {
        this.page = page;
        commonFunctions = new common(this.page);
        this.txtbxfirstname = page.getByPlaceholder('First Name:');
        this.txtbxlastname = page.getByPlaceholder('Last Name:');
        this.txtbxaddress1 = page.getByPlaceholder('Address 1:');
        this.txtbxcity = page.getByPlaceholder('City:');
        this.txtbxzipcode = page.getByPlaceholder('ZIP/Post Code:');
        this.cone = page.getByLabel('zone');
        this.emailaddress = page.getByPlaceholder('Your email');
        this.phonenumber = page.getByPlaceholder('Your phone number');
        this.tabpaymentaddress = page.getByRole('tab', { name: '   Payment Address' });
    }

    /**
     * 
     * @param {DataTable} dataTable To fill in the payment address information recieved from the step datatable
     */
    async FillPaymentAddressInfo(dataTable)
    {
        commonFunctions.WaitForPageLoadState('domcontentloaded');
        await this.txtbxfirstname.fill(dataTable.firstName);
        await this.txtbxlastname.fill(dataTable.lastName);
        await this.txtbxaddress1.fill(dataTable.address1);
        await this.txtbxcity.fill(dataTable.city);
        await this.txtbxzipcode.fill(dataTable.zipCode);
        await commonFunctions.SelectOptionByTextFromDropdown("#zone_id",dataTable.state);
        await commonFunctions.SelectOptionByTextFromDropdown("#zone_id", dataTable.country);
        await this.emailaddress.fill(dataTable.email);
        await this.phonenumber.fill(dataTable.phoneNumber);
        await expect(page.getByRole('tab', { name: '   Payment Address' })).toBeVisible();
    }
}