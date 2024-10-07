import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';

const { Given, When, Then } = createBdd(test);



Given('I navigate to LetsTestTogether My account page', async ({}) => {
    // ...
  });
  

  When('I click card {string}', async ({}, arg) => {
    // ...
  });
  

  When('Verify the order details {int}, Robin Toor, Pending on Order history page', async ({}, arg) => {
    // ...
  });
  

  Then('The Flat Shipping Rate and Cash On Delivery should be correct on order details page', async ({}) => {
    // ...
  });