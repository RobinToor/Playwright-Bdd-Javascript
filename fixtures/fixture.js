import { test as base } from 'playwright-bdd';
const { PomManager } = require('../fixtures/pomManager');

export const test = base.extend({
  pomManager: async ({page}, use) => {
    const pomManager = new PomManager(page); // Create a new instance
    await use(pomManager); // Provide it to the test
  }
});

