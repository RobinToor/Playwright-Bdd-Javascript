import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';
import {getTempFilePath, createTempFile, deleteTempFile, } from '../../../utilities/tempfileutils'
import fs from 'fs';
import path from 'path';
import { scenarioContext } from '../context';
import { getPomManager } from '../hooks';
let productInfoFilePath = path.join(__dirname, '../../../utilities/testdata/productInfo.json');
let productData;
const { Given, When, Then } = createBdd(test);


  When('Click button {string}', async ({}, buttonName) => {
    await getPomManager().getCommonMethods().ClickButton(buttonName);
  });
  
  When('Select a product {string} to view', async ({}, productName) => {
    await getPomManager().getSpecialOfferPage().SelectProductToView(productName);
  });
  

  When('Note details of the product', async ({}, productInfo) => {
   
    if(fs.existsSync(productInfoFilePath))
    {
      // Get temporary file path and copy  test data from original file to use
      scenarioContext.tempFilePath = getTempFilePath('productInfo.json');
      createTempFile(productInfoFilePath,scenarioContext.tempFilePath);
      
      //Load the data from the new instance
      productData = JSON.parse(fs.readFileSync(scenarioContext.tempFilePath, 'utf-8'));
      productData = await productInfo.NoteProductInfo(productData);
      
      // Save the modified data back to the new Temp file
      fs.writeFileSync(scenarioContext.tempFilePath, JSON.stringify(productData,null, 2));
      console.log(scenarioContext.tempFilePath);
    }
    else
    {
      console.error(`File not found: ${productInfoFilePath}`);
    }    
  });
  
  When('Set quantity {string} to buy', async ({}, quantity) => {
    await getPomManager().getProductInfoPage().UpdateQuantity(quantity);
  });
  
  When('Verify the total price', async ({}) => {
    await getPomManager().getProductInfoPage().VerifyTotalPrice();
  });
  
  When('Fill in the payment address for the order:', async ({}, dataTable) => {
    const rawdata = dataTable.hashes();
    const paymentAddressData = rawdata[0];
    await getPomManager().getPaymentAddressPage().FillPaymentAddressInfo(paymentAddressData);
  });
  
  When('Verify Order summary', async ({}) => {
    const updatedProducInfoData = JSON.parse(fs.readFileSync(scenarioContext.tempFilePath, 'utf-8'));
    await getPomManager().getFastCheckoutPage().verifyOrderSummary("Flat Shipping", updatedProducInfoData);
  });
  
  When('Confirm Order as a new customer', async ({}) => {
    await getPomManager().getCommonMethods().ClickButton("Confirm order");
  });
  
  Then('Order should be completed', async ({}) => {
    await getPomManager().getCommonMethods().WaitForPageNavigation();
    await getPomManager().getCommonMethods().ValidateHeadingOnPage("order is completed!");
  });