import loginLocator from "../locators/loginLocator.js";
import { until } from "selenium-webdriver";

class LoginPage {
  /**
   @param {import('selenium-webdriver').WebDriver} driver
   */
  constructor(driver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com");
  }

  async login(username, password) {
    await this.driver.findElement(loginLocator.username).sendKeys(username);
    await this.driver.findElement(loginLocator.password).sendKeys(password);
  }

  async click() {
    await this.driver.findElement(loginLocator.loginButton).click();
  }

  async dashboardTitle() {
    let title = await this.driver.wait(
      until.elementLocated(loginLocator.dashboardTitle),
      5000,
    );
    return await title.getText();
  }
}

export default LoginPage;
