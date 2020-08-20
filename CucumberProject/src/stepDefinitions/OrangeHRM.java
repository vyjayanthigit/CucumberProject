package stepDefinitions;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHRM {
	
	WebDriver driver;
	 WebDriverWait wait;
	
	@Given("^User is orange HRM Home Page$")
	public void navigateAdminJobSite() throws MalformedURLException {
		
		  driver = new FirefoxDriver();
	      wait = new WebDriverWait(driver, 15);
	                
	      //Open the browser
	      driver.get("http://alchemy.hguy.co/orangehrm");
	      //driver.get("​https://www.alchemy.hguy.co/jobs/wp-login.php");
	      
	      wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("txtUsername")));
	      WebElement userName = driver.findElement(By.id("txtUsername"));
	      WebElement passWord = driver.findElement(By.id("txtPassword"));
			
	      userName.sendKeys("orange");
	      passWord.sendKeys("orangepassword123");
		
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      driver.findElement(By.id("btnLogin")).click();
	      
	      wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//b[contains(text(),'Recruitment')]")));
	      
	      driver.findElement(By.xpath("//b[contains(text(),'Recruitment')]")).click();
	      
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		
	}
	
	@When("^User Clicks on Vacancies menu$")
	public void createNewUser() throws Throwable{
		
		 driver.findElement(By.xpath("//a[@id='menu_recruitment_viewJobVacancy']")).click();
		 
		 wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("btnSrch")));
		 
		 if (driver.findElement(By.id("btnSrch")).isDisplayed() == true)
			 System.out.println("Vacancy page displayed successfully");
		 else
			 System.out.println("Vacancy Page not displayed");
		 
		 
		 		 
		
		
	}
	
	@Then("^Verify Add button displayed on Vacancy page and click on it$")
	public void ClickAddVacancy() {
		
		driver.findElement(By.id("btnAdd")).click();
		
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("addJobVacancy_jobTitle")));
		 
		 if (driver.findElement(By.id("addJobVacancy_jobTitle")).isDisplayed() == true)
			 System.out.println("add Vacancy page displayed");
		 else
			 System.out.println("add Vacancy page not displayed");
			 
	}
	
	@When("^User entered required info to create job$")
	public void addVacancy(){
	
		WebElement jobTypeList = driver.findElement(By.id("addJobVacancy_jobTitle"));
		   
		Select slink = new Select(jobTypeList);
		
		slink.selectByVisibleText("DevOps Engineer");
		//slink.selectByValue("DevOps Engineer");
		
		driver.findElement(By.id("addJobVacancy_name")).sendKeys("DevOps Test SDET Engineer");
		
		driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys("John Doe");
		 
		driver.findElement(By.id("addJobVacancy_noOfPositions")).sendKeys("12");
		
		driver.findElement(By.id("btnSave")).click();
		
				
	}
	
	@Then("^Verify Vacancy got created$")
	public void verifyConfirmUser() {
		
		 wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("btnSave")));
		
		 String editButtton = driver.findElement(By.id("btnSave")).getAttribute("value");
		 
		if(editButtton.equals("Edit") == true)
		     System.out.println("job got saved successfully");
		else
			System.out.println("job not saved");
		 
	
	}

	@Then("^Click on Back button$")
	public void clickBackButton() {
	
		driver.findElement(By.id("btnBack")).click();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@And("^Close HRM browser$")
	public void closeHRMBrowser() {
		driver.quit();
	}
	
	@When("^Find the PIM option in the menu and click add button")
	public void clickPIM() {
		
		driver.findElement(By.id("menu_pim_viewPimModule")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("menu_pim_viewEmployeeList")).click();
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("btnAdd")));
	
		if (driver.findElement(By.id("btnAdd")).isDisplayed() == true) { 
			System.out.println("Add button displayed to add employee");
			driver.findElement(By.id("btnAdd")).click();
		}
		else {
			System.out.println("Add button not displayed to add employee");
		}
		
		

	}
	
	@Then("^Verify Add employee page displayed$")
	public void VerifyAddEmployeePage() {
	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("firstName")));
		
		if (driver.findElement(By.id("firstName")).isDisplayed() == true) { 
			System.out.println("Add employee Page displayed to add employee");
		}
		else {
			System.out.println("Add employee page not displayed to add employee");
		}
	
		
	}
	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void addEmployee(String firstName, String LastName) {
		
		driver.findElement(By.id("firstName")).sendKeys(firstName);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("lastName")).sendKeys(LastName);
		 
		
	}
	
	@When("^User enters \"(.*)\" , \"(.*)\" and select \"(.*)\"$")
	public void entersUserNamePassword(String UserName, String Password, String Status) {
		
		//driver.findElement(By.id("chkLogin")).clear();
		
		driver.findElement(By.id("chkLogin")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("user_name")).sendKeys(UserName);
		
		driver.findElement(By.id("user_password")).sendKeys(Password);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("re_password")).sendKeys(Password);
		
		WebElement userStatus = driver.findElement(By.id("status"));
		
		Select st = new Select(userStatus);
		
		st.selectByVisibleText(Status);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("btnSave")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Then("^Verify User got created$")
	public void verifyEmployeeCreation() {
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("empPic")));
		
		WebElement empPic = driver.findElement(By.id("empPic"));
		
		boolean verifyPic = empPic.isDisplayed();
		
		if(verifyPic == true) 
			System.out.println("employee got created");
		else
			System.out.println("employee not created");
		
		
	}
	
	@When("^user finds Recruitment Page click on Add button$")
	public void clickRecruitment() {
		
		driver.findElement(By.xpath("//b[contains(text(),'Recruitment')]")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		
		
		driver.findElement(By.id("menu_recruitment_viewCandidates")).click();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("btnAdd")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
		
	}
	@Then("^Verify Add candidate page displayed$")
	public void VerifyAddCandidatePage() {
	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("addCandidate_firstName")));
		
		if (driver.findElement(By.id("addCandidate_firstName")).isDisplayed() == true) { 
			System.out.println("Add candidate Page displayed to add candidate");
		}
		else {
			System.out.println("Add candidate page not displayed to add candidate");
		}
	
		
	}
	
	@When("^User enters candidate information$")
	public void addCandidate() {
		
		driver.findElement(By.id("addCandidate_firstName")).sendKeys("joessanss");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("addCandidate_lastName")).sendKeys("martinsss");
		
		driver.findElement(By.id("addCandidate_email")).sendKeys("joesmarss@alsec.com");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		WebElement fileInput = driver.findElement(By.id("addCandidate_resume"));
		fileInput.sendKeys("C:\\Test\\sample_resume.doc");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		WebElement jobVac = driver.findElement(By.id("addCandidate_vacancy"));
		
		Select jobVacancy = new Select(jobVac);
		
		jobVacancy.selectByIndex(1);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("btnSave")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	
	@Then("^Verify candidate is added$")
	public void verifyCandidateAdd() {
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("addCandidate_firstName")));
		
		String val = driver.findElement(By.id("btnSave")).getAttribute("value");
		
		if (val.equals("Edit") == true) 
			System.out.println("candidate added successfully");
		else
			System.out.println("unable to add candidate");
		
	}
	@When("^user finds Recruitment Page click on Vacancies menu$")
	public void clickRecruitmentClickVacancy() {
		
		driver.findElement(By.xpath("//b[contains(text(),'Recruitment')]")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("menu_recruitment_viewJobVacancy")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("btnAdd")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	@Then("^Verify Add vacancy page displayed$")
	public void verifyAddVacancy() {
	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("addJobVacancy_jobTitle")));
		
		if (driver.findElement(By.id("addJobVacancy_jobTitle")).isDisplayed() == true) { 
			System.out.println("Add Vacancy Page displayed to add vacancy");
		}
		else {
			System.out.println("Add Vacancy page not displayed to add vacancy");
		}
	
		
	}
	
	@When("^User enters for vacancy \"(.*)\" and \"(.*)\"$")
	public void enterVacancyInfo(String jobTitle, String vacName) {
	
		WebElement jobTypeList = driver.findElement(By.id("addJobVacancy_jobTitle"));
		   
		Select slink = new Select(jobTypeList);
		
		slink.selectByVisibleText(jobTitle);
		//slink.selectByValue("DevOps Engineer");
		
		driver.findElement(By.id("addJobVacancy_name")).sendKeys(vacName);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	}
	
	@When("^User enters for vacancy \"(.*)\" , \"(.*)\" , \"(.*)\"$")
	public void enterOtherInfoVac(String hiringMgr, String pos, String des) {
		
		driver.findElement(By.id("addJobVacancy_hiringManager")).sendKeys(hiringMgr);
		 
		driver.findElement(By.id("addJobVacancy_noOfPositions")).sendKeys(pos);
		
		driver.findElement(By.id("addJobVacancy_description")).sendKeys(des);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.id("btnSave")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
}
