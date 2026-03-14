Feature: login functionality testcases

  Background:
    Given i open chrome
    And i open url "https://www.saucedemo.com"

  Scenario: verify user able to login successfully
    When i enter "standard_user" in username block
    And i enter "secret_sauce" in password block
    And i click on login button
    Then i verify title of dashboard
 
  Scenario Outline: verify user able to see errormsg for invalid credentials <username> and <password>
    When i enter "<username>" in username block
    And i enter "<password>" in password block
    And i click on login button
    Then i verify errormsg as "<errormsg>"

    Examples:
      | username | password | errormsg                                                                  |
      | abcd     | kldj     | Epic sadface: Username and password do not match any user in this service |
      |          | kldj     | Epic sadface: Username is required                                        |
      |          |          | Epic sadface: Username is required                                        |
      | abcd     |          | Epic sadface: Password is required                                        |
    
    
    
    # Prreq.  - Given
    # Action   - When 
    # validation - Thne
