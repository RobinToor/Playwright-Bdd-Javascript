import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';
import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';
let productInfoFilePath = path.join(__dirname, '../utilities/testdata/productInfo.json');
let tesDataProductInfoFilePath; // The path of the temporary data file
let productData;

const { Given, When, Then, dataTable  } = createBdd(test);


// 1. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:5:9"
  When('Click button {string}', async ({commonMethod}, buttonName) => {
    await commonMethod.ClickButton(buttonName);
  });
  
  // 2. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:7:9"
  When('Select a product {string} to view', async ({specialoffers}, productName) => {
    await specialoffers.SelectProductToView(productName);
  });
  

  When('Note details of the product', async ({productInfo}) => {

    // Create a temporary instance of the productInfo.json file with a unique name
    tesDataProductInfoFilePath = path.join(__dirname, `productInfo_${Date.now()}.json`);
    
    //create a copy of the original file to use for test
    fs.copyFileSync(productInfoFilePath, tesDataProductInfoFilePath);
    
    //Load the data from the new instance
    productData = JSON.parse(fs.readFileSync(tesDataProductInfoFilePath, 'utf-8'));

    productData = await productInfo.NoteProductInfo(productData);
    // Save the modified data back to the new Temp file
    fs.writeFileSync(tesDataProductInfoFilePath, JSON.stringify(productData,null, 2));
  });
  
  // 4. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:10:9"
  When('Set quantity {string} to buy', async ({productInfo}, quantity) => {
    await productInfo.UpdateQuantity(quantity);
  });
  
  // 5. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:11:9"
  When('Verify the total price', async ({productInfo}) => {
    await productInfo.VerifyTotalPrice();
  });
  
  // 6. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:13:9"
  When('Fill in the payment address for the order:', async ({paymentAddress}, dataTable) => {
    const rawdata = dataTable.hashes();
    const paymentAddressData = rawdata[0];
    await paymentAddress.FillPaymentAddressInfo(paymentAddressData);
  });
  
  // 7. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:17:9"
  When('Verify Order summary', async ({fastCheckout}) => {
    const updatedProducInfoData = JSON.parse(fs.readFileSync(tesDataProductInfoFilePath, 'utf-8'));
    await fastCheckout.verifyOrderSummary("Flat Shipping", updatedProducInfoData);
  });
  
  // 8. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:18:9"
  When('Confirm Order as a new customer', async ({}) => {
    // ...
  });
  
  // 9. Missing step definition for "tests\bddtests\feature\SpecialOffers.feature:19:9"
  Then('Order should be completed', async ({}) => {
    // ...
  });