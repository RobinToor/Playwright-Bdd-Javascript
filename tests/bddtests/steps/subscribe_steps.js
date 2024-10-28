import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures/fixture';
import { getPomManager } from '../hooks';
const { Given, When, Then } = createBdd(test);
const pageObjectManager = getPomManager(); 


  Given('I navigate to LetsTestTogether Store site' , async ({}) => {
    await pageObjectManager.getStorePage().NavigateToTheWebsite();
  });

  When('I enter {string} to subscribe for newsletter', async ( {}, emailAddress) => {
     await pageObjectManager.getStorePage().EnterdetailsToSubscribe(emailAddress);
  });
  
  When('Click {string}', async ({}, buttonName) => {
    await getPomManager().getStorePage().ClickButton(buttonName)
  });
  
  When('Verify the heading {string} on the page', async ({}, headingText) => {
    await getPomManager().getCommonMethods().ValidateHeadingOnPage(headingText)
  });
  
  When('Fill the infromation {string}, {string}, {string}, {string} to subscribe and continue', async ({}, firstName, lastName, captchaCode, isCaptchaValid) => {
    await getPomManager().getSubscribePage().FillInfoToSubscribe(firstName,lastName,captchaCode,isCaptchaValid);
  });
  
  Then('I should see an error text message {string}', async ({}, textMessage) => {
    await getPomManager().getCommonMethods().ValidateErrorTextMessageOnPage(textMessage);
  });