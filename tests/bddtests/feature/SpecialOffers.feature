Feature: SpecialOffers
    
    Scenario Outline: Validate if user is able to buy product from special offers without login
        Given I navigate to LetsTestTogether Store site
        When Click button "Specials"
        And Verify the heading "Special Offers" on the page
        And Select a product "<productName>" to view
        And Verify the heading "<productName>" on the page
        And Set quantity "<quantity>" to buy
        And Verify the total price
        And Note details of the product
        And Click button "Buy Now"
        And Fill in the payment address for the order:
            | firstName | lastName | address1         | city       | zipCode | state      | country   | email         | phoneNumber |
            | Rony      | Wills    | 7182 Britt Forge | Johnshaven | 72795   | Queensland | Australia | wes@email.com | 341343423   |
        And Click button "Continue"
        And Verify Order summary
        And Confirm Order as a new customer
        Then Order should be completed
        Examples:
            | productName             | quantity |
            | Acqua Di Gio Pour Homme | 2        |



