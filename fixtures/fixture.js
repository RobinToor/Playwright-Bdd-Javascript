import { test as base } from 'playwright-bdd';
import * as Pages from './pages';



 /**
   * @param {import('@playwright/test').Page} page
   */


const {login } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) =>{
    await use(new PageClass(page));
}

export const test = base.extend({
    ecomLoginPage: createTestFunction(login)
});
