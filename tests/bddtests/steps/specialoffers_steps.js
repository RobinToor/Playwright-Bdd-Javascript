import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';
import fs from 'fs';
import path from 'path';
let productInfoFilePath = path.join(__dirname, '../../../utilities/testdata/productInfo.json');
let tesDataProductInfoFilePath; // The path of the temporary data file
let productData;

const { Given, When, Then, dataTable  } = createBdd(test);


  When('Click button {string}', async ({commonMethod}, buttonName) => {
    await commonMethod.ClickButton(buttonName);
  });
  
  When('Select a product {string} to view', async ({specialoffers}, productName) => {
    await specialoffers.SelectProductToView(productName);
  });
  

  When('Note details of the product', async ({productInfo}) => {

    // Create a temporary instance of the productInfo.json file with a unique name
    tesDataProductInfoFilePath = path.join(__dirname, `../../../utilities/testdata/productInfo_${Date.now()}.json`);
    
    if(fs.existsSync(productInfoFilePath))
    {
      //create a copy of the original file to use for test
      fs.copyFileSync(productInfoFilePath, tesDataProductInfoFilePath);
      //Load the data from the new instance
      productData = JSON.parse(fs.readFileSync(tesDataProductInfoFilePath, 'utf-8'));
      productData = await productInfo.NoteProductInfo(productData);
      // Save the modified data back to the new Temp file
      fs.writeFileSync(tesDataProductInfoFilePath, JSON.stringify(productData,null, 2));
    }
    else
    {
      console.error(`File not found: ${productInfoFilePath}`);
    }    
  });
  
  When('Set quantity {string} to buy', async ({productInfo}, quantity) => {
    await productInfo.UpdateQuantity(quantity);
  });
  
  When('Verify the total price', async ({productInfo}) => {
    await productInfo.VerifyTotalPrice();
  });
  
  When('Fill in the payment address for the order:', async ({paymentAddress}, dataTable) => {
    const rawdata = dataTable.hashes();
    const paymentAddressData = rawdata[0];
    await paymentAddress.FillPaymentAddressInfo(paymentAddressData);
  });
  
  When('Verify Order summary', async ({fastCheckout}) => {
    const updatedProducInfoData = JSON.parse(fs.readFileSync(tesDataProductInfoFilePath, 'utf-8'));
    await fastCheckout.verifyOrderSummary("Flat Shipping", updatedProducInfoData);
  });
  
  When('Confirm Order as a new customer', async ({commonMethod}) => {
    await commonMethod.ClickButton("Confirm order");
  });
  
  Then('Order should be completed', async ({commonMethod}) => {
    await commonMethod.WaitForPageNavigation();
    await commonMethod.ValidateHeadingOnPage("order is completed!");
  });