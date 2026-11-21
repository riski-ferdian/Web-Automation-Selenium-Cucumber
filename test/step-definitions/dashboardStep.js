import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../../src/pages/actions/DashboardPage.js";
import assert from "assert";

Then("user redirect to dashboard page", async function () {
  this.dashboardPage = new DashboardPage(this.driver);
  let title = await this.dashboardPage.dashboardTitle();
  assert.strictEqual(title, "Products", "title berbeda");
});

When("user sort product {string}", async function (optionValue) {
  await this.dashboardPage.selectDropdown(optionValue);
});

Then("dropdown option should be {string}", async function (activeOption) {
  let title = await this.dashboardPage.getTitle();
  assert.strictEqual(title, activeOption);
  // console.log(activeOption);
});
