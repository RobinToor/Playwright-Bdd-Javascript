/** Generated from: tests\bddtests\feature\MyAccount.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("MyAccount", () => {

  test.describe("Validate if user is able to check order history after login", () => {

    test("Example #1", { tag: ["@orderHistory"] }, async ({ Given, When, And, Then }) => {
      await Given("I navigate to LetsTestTogether My account page");
      await When("I click card \"Order history\"");
      await And("Verify the heading \"My Order History\" on the page");
      await And("Verify the order details 25, Robin Toor, Pending on Order history page");
      await And("Click button \"View\"");
      await And("Verify the heading \"Order Details\" on the page");
      await Then("The Flat Shipping Rate and Cash On Delivery should be correct on order details page");
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\MyAccount.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $scenarioHookFixtures: ({ page }, use) => use({ page }),
  $workerHookFixtures: [({ pomManager }, use) => use({ pomManager }), { scope: "worker" }],
});

const bddFileMeta = {
  "Validate if user is able to check order history after login|Example #1": {"pickleLocation":"13:13","tags":["@orderHistory"]},
};