/** Generated from: tests\bddtests\feature\SpecialOffers.feature */
import { test } from "../../../../fixtures/fixture.js";

test.describe("SpecialOffers", () => {

  test.describe("Validate if user is able to buy product from special offers without login", () => {

    test("Example #1", { tag: ["@specialOffers"] }, async ({ Given, storePage, When, commonMethod, And, specialoffers, productInfo, paymentAddress, fastCheckout, Then }) => {
      await Given("I navigate to LetsTestTogether Store site", null, { storePage });
      await When("Click button \"Specials\"", null, { commonMethod });
      await And("Verify the heading \"Special Offers\" on the page", null, { commonMethod });
      await And("Select a product \"Acqua Di Gio Pour Homme\" to view", null, { specialoffers });
      await And("Verify the heading \"Acqua Di Gio Pour Homme\" on the page", null, { commonMethod });
      await And("Set quantity \"2\" to buy", null, { productInfo });
      await And("Verify the total price", null, { productInfo });
      await And("Note details of the product", null, { productInfo });
      await And("Click button \"Buy Now\"", null, { commonMethod });
      await And("Fill in the payment address for the order:", {"dataTable":{"rows":[{"cells":[{"value":"firstName"},{"value":"lastName"},{"value":"address1"},{"value":"city"},{"value":"zipCode"},{"value":"state"},{"value":"country"},{"value":"email"},{"value":"phoneNumber"}]},{"cells":[{"value":"Rony"},{"value":"Wills"},{"value":"7182 Britt Forge"},{"value":"Johnshaven"},{"value":"72795"},{"value":"Queensland"},{"value":"Australia"},{"value":"wes@email.com"},{"value":"341343423"}]}]}}, { paymentAddress });
      await And("Click button \"Continue\"", null, { commonMethod });
      await And("Verify Order summary", null, { fastCheckout });
      await And("Confirm Order as a new customer", null, { commonMethod });
      await Then("Order should be completed", null, { commonMethod });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\bddtests\\feature\\SpecialOffers.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Validate if user is able to buy product from special offers without login|Example #1": {"pickleLocation":"22:13","tags":["@specialOffers"]},
};