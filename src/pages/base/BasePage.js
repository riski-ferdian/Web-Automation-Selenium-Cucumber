import { until } from "selenium-webdriver";

class BasePage {
  /**
   @param {import('selenium-webdriver').WebDriver} driver
   */
  constructor(driver) {
    this.driver = driver;
  }

  // base page for input text
  async inputText(locator, text, timeout = 5000) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      timeout,
    );
    await this.driver.wait(until.elementIsVisible(element), timeout);
    await element.clear();
    await element.sendKeys(text);
  }

  // base page for click button or element
  async clickElement(locator, timeout = 5000) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      timeout,
    );
    await this.driver.wait(until.elementIsVisible(element), timeout);
    await element.click();
  }

  // base page for get title or text
  async getText(locator, timeout = 5000) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      timeout,
    );
    await this.driver.wait(until.elementIsVisible(element), timeout);
    return await element.getText();
  }
}

export default BasePage;
