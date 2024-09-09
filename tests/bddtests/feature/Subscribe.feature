Feature: Subscribe

  Scenario Outline: Validate if user is able to subscribe With Invalid Captcha Code
    Given I navigate to LetsTestTogether Store site
    When I enter "<emailaddress>" to subscribe for newsletter
    And Click "subscribe"
    And Verify the heading "Become a newsletter subscriber" on the page
    And Fill the infromation "<FirstName>", "<LastName>", "<CapthaCode>", "<IsCaptchaValid>" to subscribe and continue
    Then I should see an error text message "<message>"

    Examples:
      | emailaddress  | FirstName | LastName | CapthaCode | IsCaptchaValid | message                                         |
      | xyz@email.com | Frank     | Wood     |      3fgg3 | false          | Human verification has failed! Please try agan. |