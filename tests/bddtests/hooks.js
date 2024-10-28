import { createBdd } from "playwright-bdd";
import { test as base } from 'playwright-bdd';
import {scenarioContext} from './context';
import {deleteTempFile} from '../../utilities/tempfileutils';
const {Before, After, BeforeAll, AfterAll} = createBdd();
const {PomManager} = require('../../fixtures/pomManager');
let tempFilePath;
let pomManager;

/**
   * @param {import('@playwright/test').Page} page
*/

Before(async function ({page}) 
{
  pomManager = new PomManager(page);   //Initialize Pom Manager class
});

AfterAll(async function ({pomManager}) 
{
  if(pomManager){
    pomManager.clearPageObjects(); // Clear instances after all tests
  } 
});

// Before hook for scenarios tagged
Before({ tags: '@specialOffers' }, async function () 
{
  scenarioContext.tempFilePath = tempFilePath;    // Store tempFilePath in scenario context
});

// Before({tags: '@orderHistory'}, async function() {
//   //browser.newContext()
//   console.log('Running Before hook for @specialOffers scenario...');
// });

// After hook for scenarios tagged
After({ tags: '@specialOffers' }, async function () {
  console.log('Running After hook for @specialOffers scenario...');
  if (scenarioContext.tempFilePath) {
    deleteTempFile(scenarioContext.tempFilePath);   // Delete the temporary file after the scenario
  }
});

// export the pom Manager Instance
export const getPomManager = () => pomManager;


  