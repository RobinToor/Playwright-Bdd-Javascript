import { createBdd } from "playwright-bdd";
import {scenarioContext} from './context';
import {deleteTempFile} from '../../utilities/tempfileutils';
const {test} = require('@playwright/test');
const {Before, After} = createBdd();
let tempFilePath;


// Before hook for scenarios tagged
Before({ tags: '@specialOffers' }, async function () {
  console.log('Running Before hook for @specialOffers scenario...');
  scenarioContext.tempFilePath = tempFilePath;    // Store tempFilePath in scenario context
});

Before({tags: '@orderHistory'}), async function() {
 await browser.newContext();
}
// After hook for scenarios tagged
After({ tags: '@specialOffers' }, async function () {
  console.log('Running After hook for @specialOffers scenario...');
  if (scenarioContext.tempFilePath) {
    deleteTempFile(scenarioContext.tempFilePath);   // Delete the temporary file after the scenario
  }
});