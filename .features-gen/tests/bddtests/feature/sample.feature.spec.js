/** Generated from: tests\bddtests\feature\sample.feature */
import { test } from "playwright-bdd";

test.describe("Playwright site", () => {

  test("Check title", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://playwright.dev\"", null, { page });
    await When("I click link \"Get started\"", null, { page });
    await Then("I see in title \"Playwright\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\sample.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Check title": {"pickleLocation":"3:5"},
};