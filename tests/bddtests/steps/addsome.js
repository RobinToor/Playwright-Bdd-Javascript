import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';


const { Before, After, Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\bddtests\feature\addsome.feature:5:9"
Given('I do something', async ({page, ecomLoginPage}) => {
    await ecomLoginPage.navigateToUrl("https://google.com.au");
  });
  