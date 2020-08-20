@HRMCreateVacancy
Feature: Vacancy creation 
  Create Vacancy for a particular position

Scenario: ​Visit the job site sarch for job and apply job
    Given User is orange HRM Home Page
    When User Clicks on Vacancies menu
    Then Verify Add button displayed on Vacancy page and click on it
    When User entered required info to create job
    Then Verify Vacancy got created
    Then Click on Back button
    And Close HRM browser

@HRMAddMultipleEmployees
Scenario Outline: ​Visit the job site and add multiple employees
Given User is orange HRM Home Page
When Find the PIM option in the menu and click add button
Then Verify Add employee page displayed
When User enters "<FirstName>" and "<LastName>" 
When User enters "<Username>" , "<Password>" and select "<Status>"
Then Verify User got created
And Close HRM browser

Examples:

| FirstName	 | LastName | Username | Password    | Status |
| abc141	 			 | xyz      | abc1234a1   | welcome@123 | Enabled|
| bbc232	 			 | xyb      | abcxyz342   | welcome@123 | Enabled|

@HRMAddRecruitment
Scenario: visit the job site and add a candidate for recruitment
Given User is orange HRM Home Page
When user finds Recruitment Page click on Add button
Then Verify Add candidate page displayed
When User enters candidate information
Then Verify candidate is added
And Close HRM browser


@HRMAddMultiplevacancies
Scenario Outline: ​Visit the job site and add multiple vacancies
Given User is orange HRM Home Page
When user finds Recruitment Page click on Vacancies menu
Then Verify Add vacancy page displayed
When User enters for vacancy "<JobTitle>" and "<VacancyName>" 
When User enters for vacancy "<HiringManager>" , "<Positions>" , "<DesVacancy>"
Then Verify Vacancy got created
And Close HRM browser

Examples:

| JobTitle	    | VacancyName      | HiringManager | Positions    | DesVacancy  |
| DevOps Engineer| Test DevTest2 Engineer| John Doe 		 | 12          	| all required|
| Java Developer | Test DevTest1 Engineer| John Doe  	 | 12          	| all required|
