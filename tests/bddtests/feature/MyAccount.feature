Feature: MyAccount
    @orderHistory
    Scenario Outline: Validate if user is able to check order history after login
        Given I navigate to LetsTestTogether My account page
        When I click card "Order history"
        And Verify the heading "My Order History" on the page
        And Verify the order details <orderId>, <customer>, <status> on Order history page
        And Click button "View"
        And Verify the heading "Order Details" on the page
        Then The <shippingMethod> and <paymentMethod> should be correct on order details page
        Examples:
            | orderId | customer   | status  | shippingMethod     | paymentMethod    |
            | 25      | Robin Toor | Pending | Flat Shipping Rate | Cash On Delivery |



