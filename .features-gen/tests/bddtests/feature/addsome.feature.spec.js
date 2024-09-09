/** Generated from: tests\bddtests\feature\addsome.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("addsome", () => {

  test("assss", async ({ Given, page, loginPage }) => {
    await Given("I do something", null, { page, loginPage });
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