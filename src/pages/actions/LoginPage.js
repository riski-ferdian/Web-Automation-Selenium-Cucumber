import loginLocator from "../locators/loginLocator.js";
import { until } from "selenium-webdriver";
import BasePage from "../base/basePage.js";

class LoginPage extends BasePage {
  /**
   @param {import('selenium-webdriver').WebDriver} driver
   */
  constructor(driver) {
    super(driver);
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com");
  }

  async login(username, password) {
    await this.inputText(loginLocator.username, username);
    await this.inputText(loginLocator.password, password);
  }

  async clickLoginButton() {
    await this.clickElement(loginLocator.loginButton);
  }

  async dashboardTitle() {
    return await this.getText(loginLocator.dashboardTitle);
  }
}

export default LoginPage;
