Feature: User authentication

    @validlogin
    Scenario: Login with valid credentials
        Given user open webiste saucedemo
        When user input username and password
        And click login button
        Then user redirect to dashboard page

    @invalidlogin
    Scenario: Login with invalid credentials
        Given user open webiste saucedemo
        When user input invalid username and password
        And click login button
        Then show error message

    @login
    Scenario: Login with input credentials on Feature
        Given user open webiste saucedemo
        When user input "standard_user" as username and input "secret_sauce" as password
        And click login button
        Then user redirect to dashboard page   
