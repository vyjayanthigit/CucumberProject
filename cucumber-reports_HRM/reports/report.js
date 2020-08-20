$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRMCreateJob.feature");
formatter.feature({
  "line": 2,
  "name": "Vacancy creation",
  "description": "Create Vacancy for a particular position",
  "id": "vacancy-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRMCreateVacancy"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "​Visit the job site sarch for job and apply job",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-sarch-for-job-and-apply-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Vacancies menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify Add button displayed on Vacancy page and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User entered required info to create job",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify Vacancy got created",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Back button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 8526145000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.createNewUser()"
});
formatter.result({
  "duration": 664079900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.ClickAddVacancy()"
});
formatter.result({
  "duration": 404590900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.addVacancy()"
});
formatter.result({
  "duration": 807703000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyConfirmUser()"
});
formatter.result({
  "duration": 189351400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickBackButton()"
});
formatter.result({
  "duration": 520621300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1491746900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "​Visit the job site and add multiple employees",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@HRMAddMultipleEmployees"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Find the PIM option in the menu and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify Add employee page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003cUsername\u003e\" , \"\u003cPassword\u003e\" and select \"\u003cStatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify User got created",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Username",
        "Password",
        "Status"
      ],
      "line": 26,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;;1"
    },
    {
      "cells": [
        "abc141",
        "xyz",
        "abc1234a1",
        "welcome@123",
        "Enabled"
      ],
      "line": 27,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;;2"
    },
    {
      "cells": [
        "bbc232",
        "xyb",
        "abcxyz342",
        "welcome@123",
        "Enabled"
      ],
      "line": 28,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "​Visit the job site and add multiple employees",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRMCreateVacancy"
    },
    {
      "line": 14,
      "name": "@HRMAddMultipleEmployees"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Find the PIM option in the menu and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify Add employee page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"abc141\" and \"xyz\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"abc1234a1\" , \"welcome@123\" and select \"Enabled\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify User got created",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 7175633000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickPIM()"
});
formatter.result({
  "duration": 1524827800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.VerifyAddEmployeePage()"
});
formatter.result({
  "duration": 92060000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc141",
      "offset": 13
    },
    {
      "val": "xyz",
      "offset": 26
    }
  ],
  "location": "OrangeHRM.addEmployee(String,String)"
});
formatter.result({
  "duration": 101230400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234a1",
      "offset": 13
    },
    {
      "val": "welcome@123",
      "offset": 27
    },
    {
      "val": "Enabled",
      "offset": 52
    }
  ],
  "location": "OrangeHRM.entersUserNamePassword(String,String,String)"
});
formatter.result({
  "duration": 2051219900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyEmployeeCreation()"
});
formatter.result({
  "duration": 366876700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1533544900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "​Visit the job site and add multiple employees",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-employees;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRMCreateVacancy"
    },
    {
      "line": 14,
      "name": "@HRMAddMultipleEmployees"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Find the PIM option in the menu and click add button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify Add employee page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters \"bbc232\" and \"xyb\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"abcxyz342\" , \"welcome@123\" and select \"Enabled\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify User got created",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 7248324600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickPIM()"
});
formatter.result({
  "duration": 1520678200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.VerifyAddEmployeePage()"
});
formatter.result({
  "duration": 97758600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbc232",
      "offset": 13
    },
    {
      "val": "xyb",
      "offset": 26
    }
  ],
  "location": "OrangeHRM.addEmployee(String,String)"
});
formatter.result({
  "duration": 116623400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcxyz342",
      "offset": 13
    },
    {
      "val": "welcome@123",
      "offset": 27
    },
    {
      "val": "Enabled",
      "offset": 52
    }
  ],
  "location": "OrangeHRM.entersUserNamePassword(String,String,String)"
});
formatter.result({
  "duration": 1804716100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyEmployeeCreation()"
});
formatter.result({
  "duration": 232269600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1227315600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "visit the job site and add a candidate for recruitment",
  "description": "",
  "id": "vacancy-creation;visit-the-job-site-and-add-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@HRMAddRecruitment"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user finds Recruitment Page click on Add button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Verify Add candidate page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User enters candidate information",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Verify candidate is added",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 7241291100,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickRecruitment()"
});
formatter.result({
  "duration": 1550695800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.VerifyAddCandidatePage()"
});
formatter.result({
  "duration": 120024400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.addCandidate()"
});
formatter.result({
  "duration": 1298472000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyCandidateAdd()"
});
formatter.result({
  "duration": 111833400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1621315100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "​Visit the job site and add multiple vacancies",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@HRMAddMultiplevacancies"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user finds Recruitment Page click on Vacancies menu",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Verify Add vacancy page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User enters for vacancy \"\u003cJobTitle\u003e\" and \"\u003cVacancyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User enters for vacancy \"\u003cHiringManager\u003e\" , \"\u003cPositions\u003e\" , \"\u003cDesVacancy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Vacancy got created",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "VacancyName",
        "HiringManager",
        "Positions",
        "DesVacancy"
      ],
      "line": 52,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;;1"
    },
    {
      "cells": [
        "DevOps Engineer",
        "Test DevTest2 Engineer",
        "John Doe",
        "12",
        "all required"
      ],
      "line": 53,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;;2"
    },
    {
      "cells": [
        "Java Developer",
        "Test DevTest1 Engineer",
        "John Doe",
        "12",
        "all required"
      ],
      "line": 54,
      "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "​Visit the job site and add multiple vacancies",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRMCreateVacancy"
    },
    {
      "line": 40,
      "name": "@HRMAddMultiplevacancies"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user finds Recruitment Page click on Vacancies menu",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Verify Add vacancy page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User enters for vacancy \"DevOps Engineer\" and \"Test DevTest2 Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User enters for vacancy \"John Doe\" , \"12\" , \"all required\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Vacancy got created",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 7184219500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickRecruitmentClickVacancy()"
});
formatter.result({
  "duration": 1447547900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyAddVacancy()"
});
formatter.result({
  "duration": 146794000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DevOps Engineer",
      "offset": 25
    },
    {
      "val": "Test DevTest2 Engineer",
      "offset": 47
    }
  ],
  "location": "OrangeHRM.enterVacancyInfo(String,String)"
});
formatter.result({
  "duration": 324946000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 38
    },
    {
      "val": "all required",
      "offset": 45
    }
  ],
  "location": "OrangeHRM.enterOtherInfoVac(String,String,String)"
});
formatter.result({
  "duration": 503979300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyConfirmUser()"
});
formatter.result({
  "duration": 118354300,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1471482700,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "​Visit the job site and add multiple vacancies",
  "description": "",
  "id": "vacancy-creation;​visit-the-job-site-and-add-multiple-vacancies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRMCreateVacancy"
    },
    {
      "line": 40,
      "name": "@HRMAddMultiplevacancies"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is orange HRM Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user finds Recruitment Page click on Vacancies menu",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Verify Add vacancy page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User enters for vacancy \"Java Developer\" and \"Test DevTest1 Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User enters for vacancy \"John Doe\" , \"12\" , \"all required\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Vacancy got created",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Close HRM browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.navigateAdminJobSite()"
});
formatter.result({
  "duration": 7227400000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.clickRecruitmentClickVacancy()"
});
formatter.result({
  "duration": 1427249500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyAddVacancy()"
});
formatter.result({
  "duration": 120830500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Developer",
      "offset": 25
    },
    {
      "val": "Test DevTest1 Engineer",
      "offset": 46
    }
  ],
  "location": "OrangeHRM.enterVacancyInfo(String,String)"
});
formatter.result({
  "duration": 317393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 25
    },
    {
      "val": "12",
      "offset": 38
    },
    {
      "val": "all required",
      "offset": 45
    }
  ],
  "location": "OrangeHRM.enterOtherInfoVac(String,String,String)"
});
formatter.result({
  "duration": 557326000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.verifyConfirmUser()"
});
formatter.result({
  "duration": 93041600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM.closeHRMBrowser()"
});
formatter.result({
  "duration": 1400195100,
  "status": "passed"
});
});