package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestSteps {
	
	 WebDriver driver;
	 WebDriverWait wait;
	 
	 @Given("^User is on Login page$")
	 public void userIsOnLoginPage() throws Throwable {
        //Create a new instance of the Firefox driver
        driver = new FirefoxDriver();
        wait = new WebDriverWait(driver, 15);
                
        //Open the browser
        driver.get("https://www.training-support.net/selenium/login-form");
	 }
	 
	 @When("^User enters username and password$")
	 public void userLogin() throws Throwable {
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("username")));
		WebElement userName = driver.findElement(By.id("username"));
		WebElement passWord = driver.findElement(By.id("password"));
		
		userName.sendKeys("admin");
		passWord.sendKeys("password");
		
		driver.findElement(By.xpath("//button[@class='ui button']")).click();
 
	 }
	 
	 
	 @Then("^Read the page title and confirmation message$")
	 public void readTitleAndHeading() {
		 
		 wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("action-confirmation")));
		 WebElement conMsg = driver.findElement(By.xpath("//div[@id='action-confirmation']"));
		 
		 System.out.println("Page title is:"+driver.getTitle());
		 System.out.println("Page title is:"+conMsg.getText());
		 
	 }
	 
	@And("^Close the Browser$")
	public void closeBrowser() {
		driver.close();
	}
}
