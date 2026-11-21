import { createDriver } from "../../../src/utils/driver.js";
import { Before, After } from "@cucumber/cucumber";

setDefaultTimeout(30 * 1000);

Before(async function () {
  this.driver = await createDriver();
  await this.driver.manage().window().maximize();
});

After(async function () {
  if (this.driver) {
    await this.driver.quit();
  }
});
