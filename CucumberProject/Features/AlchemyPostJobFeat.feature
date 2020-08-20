@JobsPostActivityFeature
Feature: Job Post
  Post a Job

Scenario: ​Visit the job site post a job
    Given User is Jobs Home Page
    When User Clicks on Post a Job
    Then Verify post job page opened
    When logged in user enters "abxyzer_5@yahoo.com" and "DevOPs Test Engineer" and "Full Time" and "abc_1@dell.com" and "Dell"
    Then verify preview available with jobtitle
    When user click on submit listing button
    Then veriy job posted
    And Close job browser

