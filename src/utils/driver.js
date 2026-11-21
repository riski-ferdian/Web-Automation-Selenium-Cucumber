/*
import { Builder } from "selenium-webdriver";
export async function createDriver() {
  return await new Builder().forBrowser("chrome").build();
}
  */

import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export async function createDriver() {
  let chromeOptions = new chrome.Options();

  chromeOptions.addArguments("--incognito");
  chromeOptions.addArguments("--headless=new");
  chromeOptions.addArguments("--no-sandbox");
  chromeOptions.addArguments("--disable-dev-shm-usage");
  chromeOptions.addArguments("--window-size=1920,1080");

  return await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
}
