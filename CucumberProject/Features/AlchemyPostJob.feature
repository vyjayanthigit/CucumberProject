@JobsPostActivity
Feature: Job Post
  Post a Job

Scenario Outline: ​Visit the job site post a job
    Given User is Jobs Home Page
    When User Clicks on Post a Job
    Then Verify post job page opened
    When logged in user enters "<email>" and "<title>" and "<jobtype>" and "<appemail>" and "<comURL>"
    Then verify preview available with jobtitle
    When user click on submit listing button
    Then veriy job posted
    And Close job browser

Examples:
|email|title|jobtype|appemail|comURL|
|xyz_abc_2@yahoo.com|devOps SDET|Full Time|abc_2@dell.com|dell.com|
|abc_xyz_2@yahoo.com|devOpsSDET|Full Time|xyz_2@dell.com|dell.com|

