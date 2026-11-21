import { Builder } from "selenium-webdriver";
export async function createDriver() {
  return await new Builder().forBrowser("chrome").build();
}
