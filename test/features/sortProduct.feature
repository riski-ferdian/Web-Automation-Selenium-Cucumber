Feature: Sort product

    @sortproduct
    Scenario Outline: sort product z to a
        Given user open webiste saucedemo
        When user input username and password
        And click login button
        Then user redirect to dashboard page
        When user sort product "<value>"
        Then dropdown option should be "<activeDropdwon>"
        Examples:
        | value | activeDropdwon |
        | az | Name (A to Z) |
        | za | Name (Z to A) |
        | lohi | Price (low to high) |
        | hilo | Price (high to low) |