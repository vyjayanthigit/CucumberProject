@JobsSearchActivity
Feature: Job creation and Search
  Create job and search for a particular job

Scenario Outline: ​Visit the job site sarch for job and apply job
    Given User is Jobs Home Page
    When User Clicks on Job link and finds search page
    Then Verify user lands on search page
    When User search for job "<keyword>" and "<location>" on "<jobtype>"
    Then Verify jobs listing with fulljob 
    Then Click on job
    When Job Page is displayed click on job
    And Close job browser

Examples:
| keyword 						 | location | jobtype |
| Senior Test Engineer| Anywhere | Full Time |
