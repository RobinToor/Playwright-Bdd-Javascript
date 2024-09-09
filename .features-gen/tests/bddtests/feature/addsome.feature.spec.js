/** Generated from: tests\bddtests\feature\addsome.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("addsome", () => {

  test("assss", async ({ Given, page, ecomLoginPage }) => {
    await Given("I do something", null, { page, ecomLoginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\addsome.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "assss": {"pickleLocation":"4:5"},
};