import BasePage from "../base/BasePage.js";
import dashboardLocator from "../locators/dashboardLocator.js";
import { until, Select } from "selenium-webdriver";

/** @param {import('selenium-webdriver').WebDriver} driver */

class DashboardPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  async dashboardTitle() {
    return await this.getText(dashboardLocator.dashboardTitle);
  }

  async selectDropdown(optionValue) {
    const dropdown = await this.driver.wait(
      until.elementLocated(dashboardLocator.sortProduct),
      5000,
    );
    await this.driver.wait(until.elementIsVisible(dropdown), 5000);
    const select = new Select(dropdown);
    await select.selectByValue(optionValue);
  }

  async getTitle() {
    const element = await this.driver.wait(
      until.elementLocated(dashboardLocator.sortProduct),
      5000,
    );
    await this.driver.wait(until.elementIsVisible(element), 5000);
    const select = new Select(element);
    const selectedOption = await select.getFirstSelectedOption();
    return await selectedOption.getText();
  }
}

export default DashboardPage;
