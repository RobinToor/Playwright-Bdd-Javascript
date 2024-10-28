/** Generated from: tests\bddtests\feature\Subscribe.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("Subscribe", () => {

  test.describe("Validate if user is able to subscribe With Invalid Captcha Code", () => {

    test("Example #1", async ({ Given, When, And, Then }) => {
      await Given("I navigate to LetsTestTogether Store site");
      await When("I enter \"xyz@email.com\" to subscribe for newsletter");
      await And("Click \"subscribe\"");
      await And("Verify the heading \"Become a newsletter subscriber\" on the page");
      await And("Fill the infromation \"Frank\", \"Wood\", \"3fgg3\", \"false\" to subscribe and continue");
      await Then("I should see an error text message \"Human verification has failed! Please try agan.\"");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\Subscribe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $scenarioHookFixtures: ({ page }, use) => use({ page }),
  $workerHookFixtures: [({ pomManager }, use) => use({ pomManager }), { scope: "worker" }],
});

const bddFileMeta = {
  "Validate if user is able to subscribe With Invalid Captcha Code|Example #1": {"pickleLocation":"13:7"},
};