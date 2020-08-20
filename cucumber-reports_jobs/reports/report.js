$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AlchemyJobs.feature");
formatter.feature({
  "line": 2,
  "name": "Job creation and Search",
  "description": "Create job and search for a particular job",
  "id": "job-creation-and-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobsActivity"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "​Visit the site backend and create a new user",
  "description": "",
  "id": "job-creation-and-search;​visit-the-site-backend-and-create-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Admin Page logs in and selects users menu",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Creates new User clicking on Add New User button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify the user is created",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobsAdminUserCreate.navigateAdminJobSite()"
});
formatter.result({
  "duration": 20777987200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.createNewUser()"
});
formatter.result({
  "duration": 4919364900,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyConfirmUser()"
});
formatter.result({
  "duration": 319643200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.closeBrowser()"
});
formatter.result({
  "duration": 3347958800,
  "status": "passed"
});
formatter.uri("AlchemyPostJob.feature");
formatter.feature({
  "line": 2,
  "name": "Job Post",
  "description": "Post a Job",
  "id": "job-post",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobsPostActivity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "​Visit the job site post a job",
  "description": "",
  "id": "job-post;​visit-the-job-site-post-a-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify post job page opened",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logged in user enters \"\u003cemail\u003e\" and \"\u003ctitle\u003e\" and \"\u003cjobtype\u003e\" and \"\u003cappemail\u003e\" and \"\u003ccomURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify preview available with jobtitle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on submit listing button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "veriy job posted",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "job-post;​visit-the-job-site-post-a-job;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "jobtype",
        "appemail",
        "comURL"
      ],
      "line": 16,
      "id": "job-post;​visit-the-job-site-post-a-job;;1"
    },
    {
      "cells": [
        "xyz_abc_2@yahoo.com",
        "devOps SDET",
        "Full Time",
        "abc_2@dell.com",
        "dell.com"
      ],
      "line": 17,
      "id": "job-post;​visit-the-job-site-post-a-job;;2"
    },
    {
      "cells": [
        "abc_xyz_2@yahoo.com",
        "devOpsSDET",
        "Full Time",
        "xyz_2@dell.com",
        "dell.com"
      ],
      "line": 18,
      "id": "job-post;​visit-the-job-site-post-a-job;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "​Visit the job site post a job",
  "description": "",
  "id": "job-post;​visit-the-job-site-post-a-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JobsPostActivity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify post job page opened",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logged in user enters \"xyz_abc_2@yahoo.com\" and \"devOps SDET\" and \"Full Time\" and \"abc_2@dell.com\" and \"dell.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify preview available with jobtitle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on submit listing button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "veriy job posted",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobsAdminUserCreate.NavigateJobHomePage()"
});
formatter.result({
  "duration": 6926602700,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.clickPostJob()"
});
formatter.result({
  "duration": 1667946700,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostJobPage()"
});
formatter.result({
  "duration": 45210200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz_abc_2@yahoo.com",
      "offset": 23
    },
    {
      "val": "devOps SDET",
      "offset": 49
    },
    {
      "val": "Full Time",
      "offset": 67
    },
    {
      "val": "abc_2@dell.com",
      "offset": 83
    },
    {
      "val": "dell.com",
      "offset": 104
    }
  ],
  "location": "JobsAdminUserCreate.postJobFeature(String,String,String,String,String)"
});
formatter.result({
  "duration": 1985632200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPreviewwithJobtitle()"
});
formatter.result({
  "duration": 74164700,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.submitJob()"
});
formatter.result({
  "duration": 1195729800,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostedJob()"
});
formatter.result({
  "duration": 38727000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.closeBrowser()"
});
formatter.result({
  "duration": 1464706300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "​Visit the job site post a job",
  "description": "",
  "id": "job-post;​visit-the-job-site-post-a-job;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JobsPostActivity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify post job page opened",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logged in user enters \"abc_xyz_2@yahoo.com\" and \"devOpsSDET\" and \"Full Time\" and \"xyz_2@dell.com\" and \"dell.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify preview available with jobtitle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on submit listing button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "veriy job posted",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobsAdminUserCreate.NavigateJobHomePage()"
});
formatter.result({
  "duration": 5746885100,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.clickPostJob()"
});
formatter.result({
  "duration": 1589171300,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostJobPage()"
});
formatter.result({
  "duration": 37561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc_xyz_2@yahoo.com",
      "offset": 23
    },
    {
      "val": "devOpsSDET",
      "offset": 49
    },
    {
      "val": "Full Time",
      "offset": 66
    },
    {
      "val": "xyz_2@dell.com",
      "offset": 82
    },
    {
      "val": "dell.com",
      "offset": 103
    }
  ],
  "location": "JobsAdminUserCreate.postJobFeature(String,String,String,String,String)"
});
formatter.result({
  "duration": 2178803200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPreviewwithJobtitle()"
});
formatter.result({
  "duration": 52831200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.submitJob()"
});
formatter.result({
  "duration": 1015669000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostedJob()"
});
formatter.result({
  "duration": 38120200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.closeBrowser()"
});
formatter.result({
  "duration": 1665583000,
  "status": "passed"
});
formatter.uri("AlchemyPostJobFeat.feature");
formatter.feature({
  "line": 2,
  "name": "Job Post",
  "description": "Post a Job",
  "id": "job-post",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobsPostActivityFeature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "​Visit the job site post a job",
  "description": "",
  "id": "job-post;​visit-the-job-site-post-a-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify post job page opened",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logged in user enters \"abxyzer_5@yahoo.com\" and \"DevOPs Test Engineer\" and \"Full Time\" and \"abc_1@dell.com\" and \"Dell\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify preview available with jobtitle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on submit listing button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "veriy job posted",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobsAdminUserCreate.NavigateJobHomePage()"
});
formatter.result({
  "duration": 5402999000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.clickPostJob()"
});
formatter.result({
  "duration": 2557702500,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostJobPage()"
});
formatter.result({
  "duration": 36101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abxyzer_5@yahoo.com",
      "offset": 23
    },
    {
      "val": "DevOPs Test Engineer",
      "offset": 49
    },
    {
      "val": "Full Time",
      "offset": 76
    },
    {
      "val": "abc_1@dell.com",
      "offset": 92
    },
    {
      "val": "Dell",
      "offset": 113
    }
  ],
  "location": "JobsAdminUserCreate.postJobFeature(String,String,String,String,String)"
});
formatter.result({
  "duration": 1720065700,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPreviewwithJobtitle()"
});
formatter.result({
  "duration": 55505300,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.submitJob()"
});
formatter.result({
  "duration": 1081775200,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyPostedJob()"
});
formatter.result({
  "duration": 53903000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.closeBrowser()"
});
formatter.result({
  "duration": 1334229300,
  "status": "passed"
});
formatter.uri("AlchemySearchJobs.feature");
formatter.feature({
  "line": 2,
  "name": "Job creation and Search",
  "description": "Create job and search for a particular job",
  "id": "job-creation-and-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobsSearchActivity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "​Visit the job site sarch for job and apply job",
  "description": "",
  "id": "job-creation-and-search;​visit-the-job-site-sarch-for-job-and-apply-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Job link and finds search page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify user lands on search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User search for job \"\u003ckeyword\u003e\" and \"\u003clocation\u003e\" on \"\u003cjobtype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify jobs listing with fulljob",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on job",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Job Page is displayed click on job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "job-creation-and-search;​visit-the-job-site-sarch-for-job-and-apply-job;",
  "rows": [
    {
      "cells": [
        "keyword",
        "location",
        "jobtype"
      ],
      "line": 16,
      "id": "job-creation-and-search;​visit-the-job-site-sarch-for-job-and-apply-job;;1"
    },
    {
      "cells": [
        "Senior Test Engineer",
        "Anywhere",
        "Full Time"
      ],
      "line": 17,
      "id": "job-creation-and-search;​visit-the-job-site-sarch-for-job-and-apply-job;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "​Visit the job site sarch for job and apply job",
  "description": "",
  "id": "job-creation-and-search;​visit-the-job-site-sarch-for-job-and-apply-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JobsSearchActivity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is Jobs Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Job link and finds search page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify user lands on search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User search for job \"Senior Test Engineer\" and \"Anywhere\" on \"Full Time\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify jobs listing with fulljob",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on job",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Job Page is displayed click on job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Close job browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobsAdminUserCreate.NavigateJobHomePage()"
});
formatter.result({
  "duration": 5739131700,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.clickJobLink()"
});
formatter.result({
  "duration": 716594000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.virifySearchJobPage()"
});
formatter.result({
  "duration": 66580200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior Test Engineer",
      "offset": 21
    },
    {
      "val": "Anywhere",
      "offset": 48
    },
    {
      "val": "Full Time",
      "offset": 62
    }
  ],
  "location": "JobsAdminUserCreate.SearchJob(String,String,String)"
});
formatter.result({
  "duration": 2377534000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.verifyJobListing()"
});
formatter.result({
  "duration": 66170600,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.clickOnJob()"
});
formatter.result({
  "duration": 683775800,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.applyJob()"
});
formatter.result({
  "duration": 381546000,
  "status": "passed"
});
formatter.match({
  "location": "JobsAdminUserCreate.closeBrowser()"
});
formatter.result({
  "duration": 1475019000,
  "status": "passed"
});
});