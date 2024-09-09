/** Generated from: tests\bddtests\feature\Subscribe.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("Subscribe", () => {

  test.describe("Validate if user is able to subscribe With Invalid Captcha Code", () => {

    test("Example #1", async ({ Given, storePage, When, And, commonMethod, subscrbePage, Then }) => {
      await Given("I navigate to LetsTestTogether Store site", null, { storePage });
      await When("I enter \"xyz@email.com\" to subscribe for newsletter", null, { storePage });
      await And("Click \"subscribe\"", null, { storePage });
      await And("Verify the heading \"Become a newsletter subscriber\" on the page", null, { commonMethod });
      await And("Fill the infromation \"Frank\", \"Wood\", \"3fgg3\", \"false\" to subscribe and continue", null, { subscrbePage });
      await Then("I should see an error text message \"Human verification has failed! Please try agan.\"", null, { commonMethod });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\Subscribe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate if user is able to subscribe With Invalid Captcha Code|Example #1": {"pickleLocation":"13:7"},
};