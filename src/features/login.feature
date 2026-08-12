Feature: User Authentication

  As a registered user
  I want to log into the application
  So that I can access my account

  Scenario: Successful login with valid credentials

    Given the user launches the application
    When the user logs in with valid credentials
    Then the user should be navigated to the home page