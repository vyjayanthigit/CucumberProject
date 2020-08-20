@JobsActivity
Feature: Job creation and Search
  Create job and search for a particular job

Scenario: ​Visit the site backend and create a new user
    Given User is on Admin Page logs in and selects users menu
    When Creates new User clicking on Add New User button
    Then Verify the user is created
    And Close job browser

  