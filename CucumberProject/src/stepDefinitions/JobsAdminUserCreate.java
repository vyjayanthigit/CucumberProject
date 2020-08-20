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

public class JobsAdminUserCreate {
	
	WebDriver driver;
	 WebDriverWait wait;
	
	@Given("^User is on Admin Page logs in and selects users menu$")
	public void navigateAdminJobSite() throws MalformedURLException {
		
		  driver = new FirefoxDriver();
	      wait = new WebDriverWait(driver, 15);
	                
	      //Open the browser
	      driver.get("https://alchemy.hguy.co/jobs/wp-login.php");
	      //driver.get("​https://www.alchemy.hguy.co/jobs/wp-login.php");
	      
	      wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("user_login")));
	      WebElement userName = driver.findElement(By.id("user_login"));
	      WebElement passWord = driver.findElement(By.id("user_pass"));
			
	      userName.sendKeys("root");
	      passWord.sendKeys("pa$$w0rd");
		
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      driver.findElement(By.id("wp-submit")).click();
	      
	      wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//div[contains(text(),'Users')]")));
	      
	      driver.findElement(By.xpath("//div[contains(text(),'Users')]")).click();
	      
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		
	}
	
	@When("^Creates new User clicking on Add New User button$")
	public void createNewUser() throws Throwable{
		
		 driver.findElement(By.xpath("//a[@class='page-title-action']")).click();
		 
		 wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("user_login")));
		 
		 driver.findElement(By.id("user_login")).sendKeys("userAlchemytemp223");
		 
		 driver.findElement(By.id("email")).sendKeys("Alchemy1_temp@yahoo.com");
		 
		 driver.findElement(By.id("first_name")).sendKeys("Vyjayanthii");
		 
		 driver.findElement(By.id("last_name")).sendKeys("Vinjarapu1i");
		 
		 driver.findElement(By.id("url")).sendKeys("www.Alchemy.com");
		 
		 driver.findElement(By.xpath("//button[@class='button wp-generate-pw hide-if-no-js']")).click();

		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
		 
		 driver.findElement(By.id("createusersub")).click();
		 
		
		
	}
	
	@Then("^Verify the user is created$")
	public void verifyConfirmUser() {
		
		 wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//p[contains(text(),'New user created.')]")));
			
		 String confrmText = driver.findElement(By.xpath("//p[contains(text(),'New user created.')]")).getText();
		 System.out.println(confrmText);
		 
		 
		 if (confrmText.contains("New user created.") == true)
			 System.out.println("confirmation Text displayed for user " + confrmText );
		 else 
			System.out.println("User not created");
		
	}
	
	@And("^Close job browser$")
	public void closeBrowser() {
		driver.quit();
	}
	
	
	@When("^User is Jobs Home Page$")
	public void NavigateJobHomePage() {
		
		  driver = new FirefoxDriver();
	      wait = new WebDriverWait(driver, 15);
	                
	      //Open the browser
	      driver.get("https://alchemy.hguy.co/jobs/");
	    
	      
	      wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//li[@id='menu-item-24']//a[contains(text(),'Jobs')]")));
	      
	       boolean jobLink = driver.findElement(By.xpath("//li[@id='menu-item-24']//a[contains(text(),'Jobs')]")).isDisplayed();
	      
	       if (jobLink == true) 
	    	System.out.println("job link is available");
	       else
	    	System.out.println("job links is not available");
	    		
	}
	
	@When("^User Clicks on Job link and finds search page$")
	public void clickJobLink() {
		
		driver.findElement(By.xpath("//li[@id='menu-item-24']//a[contains(text(),'Jobs')]")).click();
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("search_keywords")));
	
	}
	
	@Then("^Verify user lands on search page$")
	public void virifySearchJobPage() {
		
		  
		System.out.println(driver.getTitle());
		WebElement keyWord = driver.findElement(By.id("search_keywords"));
		System.out.println("job search page is available with Keyword field "+ keyWord.isDisplayed());
		
	}
	
	
	@When("^User search for job \"(.*)\" and \"(.*)\" on \"(.*)\"$")
			
	public void SearchJob(String tempKeyword, String tempLocation, String tempJobtype) throws Throwable {
	       
	     System.out.println(tempKeyword);
	     System.out.println(tempLocation);
	     System.out.println(tempJobtype);
	     
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      WebElement keyWord = driver.findElement(By.id("search_keywords"));
	    //  WebElement location = driver.findElement(By.id("search_location"));
	      WebElement jobType = driver.findElement(By.xpath("//input[@id='job_type_full-time']"));
			
	      keyWord.sendKeys(tempKeyword);
	     // location.sendKeys(tempLocation);
	      
	      WebElement jobTypeFreeLance = driver.findElement(By.xpath("//label[@class='freelance']"));
	      WebElement jobTypeInternShip = driver.findElement(By.xpath("//label[@class='internship']"));
	      WebElement jobTypePartTime = driver.findElement(By.xpath("//label[@class='part-time']"));
	      WebElement jobTypeTemperory = driver.findElement(By.xpath("//label[@class='temporary']"));
	      
	      jobTypeFreeLance.click();
	      
	      jobTypeInternShip.click();
	      
	      jobTypePartTime.click();
	      
	      jobTypeTemperory.click();
	      
	      jobType.click();
	      
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      jobType.click();
	      
	      if (tempJobtype == "Full Time"){
	    	  System.out.println("into job type");
	    	  jobType.click();	  
	      }
	      
	      Thread.sleep(500);
	      
	      driver.findElement(By.xpath("//div[@class='search_submit']//input")).click();
		
		
	}
	@Then("^Verify jobs listing with fulljob$")
	public void verifyJobListing() {
	
		
		  WebElement jobListing = driver.findElement(By.xpath("//h3[contains(text(),'Senior Test Engineer')]"));
		     
		  if (jobListing.isDisplayed() == true) 
			  System.out.println("job Listing displayed for full time");
		  
		  else
			  System.out.println("Job Listing not displayed for full time");
		  
	    
	}
	
	@Then("^Click on job$")
	public void clickOnJob() {
		  
		  WebElement jobListing = driver.findElement(By.xpath("//h3[contains(text(),'Senior Test Engineer')]"));
		
		  jobListing.click();
	      
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      System.out.println("job Title :"+ driver.findElement(By.xpath("//h1[@class='entry-title']")).getText());
	      
	      
	}
	
	@When("^Job Page is displayed click on job$")
	public void applyJob(){
		

	      driver.findElement(By.xpath("//input[@class='application_button button']")).click();
	      
	      driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	      
	      System.out.println(driver.findElement(By.xpath("//p[contains(text(),'To apply for this job')]")).getText());
	
		
		
	}
	
	@When("^User Clicks on Post a Job$")
	public void clickPostJob() {
		
		driver.findElement(By.xpath("//a[contains(text(),'Post a Job')]")).click();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	}
	@Then("^Verify post job page opened$")
	public void verifyPostJobPage() {
		
		if (driver.findElement(By.xpath("//h1[@class='entry-title']")).getText().equals("Post a Job") == true)
		    System.out.println("post job page is displayed successfully");
		else
			System.out.println("post job page is not displayed successfully");
	}
	
	@When("^post job details$")
	public void postJobDetails() {
		
		driver.findElement(By.id("create_account_email")).sendKeys("abc@yahoo.com");
		
		driver.findElement(By.id("job_title")).sendKeys("TestNG Engineer");
		
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		
		WebElement jobTypeList = driver.findElement(By.id("job_type"));
		   
		Select slink = new Select(jobTypeList);
		   
		slink.selectByValue("Internship");
		
		WebElement jobDescEdit = driver.findElement(By.xpath("//iframe[@id='job_description_ifr']"));
		   
		jobDescEdit.sendKeys("Good knowledge on Automation");
		   
		WebElement appEmailEdit = driver.findElement(By.id("application"));
		   
		appEmailEdit.sendKeys("abc@yahoo.com");
		   
		
		 WebElement comNameEdit = driver.findElement(By.id("company_name"));
		   
		 comNameEdit.sendKeys("Maveric System");
		   
		 WebElement previewButton = driver.findElement(By.xpath("//input[@name='submit_job']"));
		   
		 previewButton.click();
		   
	}
	
	@When("^logged in user enters \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void postJobFeature(String email,String jobTitle, String jobType, String url, String comName) {
		
		driver.findElement(By.id("create_account_email")).sendKeys(email);
		
		driver.findElement(By.id("job_title")).sendKeys(jobTitle);
		
		WebElement jobTypeList = driver.findElement(By.id("job_type"));
		   
		Select slink = new Select(jobTypeList);
		   
		slink.selectByVisibleText(jobType);
		
		WebElement jobDescEdit = driver.findElement(By.xpath("//iframe[@id='job_description_ifr']"));
		   
		jobDescEdit.sendKeys("Good knowledge on Automation");
		
		WebElement appEmailEdit = driver.findElement(By.id("application"));
		   
		appEmailEdit.sendKeys("testa123_1@yahoo.com");
		
		
		//WebElement appEmailEdit = driver.findElement(By.id("application"));
		   
		//appEmailEdit.sendKeys(url);
		
		 WebElement comNameEdit = driver.findElement(By.id("company_name"));
		   
		 comNameEdit.sendKeys(comName);
		 
		 WebElement previewButton = driver.findElement(By.xpath("//input[@name='submit_job']"));
		   
		 previewButton.click();
		   
		
	}
	
	@Then("^verify preview available with jobtitle$")
	public void verifyPreviewwithJobtitle() {
		
     boolean previewDisp = driver.findElement(By.xpath("//h2[contains(text(),'Preview')]")).isDisplayed();
     
     
    //String jobTitle = driver.findElement(By.xpath("//h1[contains(text(),\" && tempjobTitle && \")]")).getText();
     
    // if(jobTitle.equals(tempjobTitle))
     if (previewDisp == true )
    	 System.out.println("preview is available with the posted job");
     else
    	 System.out.println("preview is not available with the posted job");
	
     /*if (jobTitle.isEmpty() == true )
    	 System.out.println("preview is available with the posted job");
     else
    	 System.out.println("preview is not available with the posted job");
	*/
     
	} 
	
	
	@Then("^verify the preview is available$")
	public void verifyPreview() {
		
     boolean previewDisp = driver.findElement(By.xpath("//div[@class='job_listing_preview_title'")).isDisplayed();
     
     String jobTitle = driver.findElement(By.xpath("//h1[@class='job_listing_preview single_job_listing']")).getText();
     
     if(previewDisp == true && jobTitle.equals(""))
    	 System.out.println("preview is available with the posted job");
     else
    	 System.out.println("preview is not available with the posted job");
		
	} 
	
	@When("^user click on submit listing button$")
	public void submitJob() throws Throwable {
		
		driver.findElement(By.id("job_preview_submit_button")).click();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		Thread.sleep(500);
	}
	
	@Then("^veriy job posted$")
	public void verifyPostedJob() {
		
		WebElement confirmText = driver.findElement(By.xpath("//div[@class='entry-content clear']"));
		String postedText = confirmText.getText();
		System.out.println(postedText);
		
	}
	
}
