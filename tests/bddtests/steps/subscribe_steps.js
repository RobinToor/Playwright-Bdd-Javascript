import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';

const { Before, After, Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\bddtests\feature\Subscribe.feature:4:5"
Given('I navigate to LetsTestTogether Store site' , async ({storePage}) => {
    await storePage.NavigateToTheWebsite();
  });
  
  // 2. Missing step definition for "tests\bddtests\feature\Subscribe.feature:5:5"
  When('I enter {string} to subscribe for newsletter', async ({storePage}, emailAddress) => {
     await storePage.EnterdetailsToSubscribe(emailAddress);
  });
  
  // 3. Missing step definition for "tests\bddtests\feature\Subscribe.feature:6:5"
  When('Click {string}', async ({storePage}, buttonName) => {
    await storePage.ClickButton(buttonName);
  });
  
  // 4. Missing step definition for "tests\bddtests\feature\Subscribe.feature:7:5"
  When('Verify the heading {string} on the page', async ({commonMethod}, headingText) => {
    await commonMethod.ValidateHeadingOnPage(headingText);
  });
  
  // 5. Missing step definition for "tests\bddtests\feature\Subscribe.feature:8:5"
  When('Fill the infromation {string}, {string}, {string}, {string} to subscribe and continue', async ({subscrbePage}, firstName, lastName, captchaCode, isCaptchaValid) => {
    await subscrbePage.FillInfoToSubscribe(firstName,lastName,captchaCode,isCaptchaValid);
  });
  
  // 6. Missing step definition for "tests\bddtests\feature\Subscribe.feature:9:5"
  Then('I should see an error text message {string}', async ({commonMethod}, textMessage) => {
    await commonMethod.ValidateErrorTextMessageOnPage(textMessage);
  });