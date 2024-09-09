import { test as base } from 'playwright-bdd';
import * as Pages from './pages';

const {login, common, subscribe, store  } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) =>{
    const instance = new PageClass(page);
    await use(instance);
}

export const test = base.extend({
    loginPage: createTestFunction(login),
    storePage: createTestFunction(store),
    subscrbePage: createTestFunction(subscribe),
    commonMethod: createTestFunction(common)
});
