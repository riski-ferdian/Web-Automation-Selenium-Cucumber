Feature: User authentication

    Scenario: Login with valid credentials
        Given user open webiste saucedemo
        When user input username and password
        And click login button
        Then user redirect to dashboard page
