import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';
import { getPomManager } from '../hooks';
const { Given, When, Then } = createBdd(test);
const pageObjectManager = getPomManager(); 
/**
 * Step definition for navigating to the My Account page
 * @param {import('../../../fixtures/pomManager').PomManager} pomManager
 */

Given('I navigate to LetsTestTogether My account page', async ({}) => {
    // Get the PomManager instance  
    const t = pageObjectManager.getLoginPage();
    const p = pageObjectManager.getPaymentAddressPage();
    
    // Get the PomManager instance
    //const loginPage = pomManager.getLoginPage(); // Access the LoginPage instance  
    await loginPage.navigateToAccountLogin('https://example.com/login'); // Use the method
});

When('I click card {string}', async ({}, arg) => {
    // Implement card clicking logic
});

When('Verify the order details {int}, Robin Toor, Pending on Order history page', async ({}, arg) => {
    // Implement order details verification
});

Then('The Flat Shipping Rate and Cash On Delivery should be correct on order details page', async ({}) => {
    // Implement the verification logic
});
