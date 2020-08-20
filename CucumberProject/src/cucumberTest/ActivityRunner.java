package cucumberTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "Features",
    glue = {"stepDefinitions"},
  // tags = {"@HRMAddRecruitment,@HRMCreateVacancy,@HRMAddMultipleEmployees,@HRMAddMultiplevacancies"},
   //  tags = {"@JobsPostActivity"},
    tags = {"@JobsActivity,@JobsSearchActivity,@JobsPostActivityFeature,@JobsPostActivity"},
    strict = true,    
    plugin = { "pretty", "html:target/cucumber-reports/reports" },
    monochrome = true

)

public class ActivityRunner {
    //empty
}