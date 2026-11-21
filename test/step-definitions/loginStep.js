import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../src/pages/actions/LoginPage.js";
import userData from "../../src/data/userData.json" with { type: "json" };
import assert from "assert";

Given("user open webiste saucedemo", async function () {
  this.loginPage = new LoginPage(this.driver);
  await this.loginPage.open();
});

When("user input username and password", async function () {
  await this.loginPage.login(
    userData.validUser.username,
    userData.validUser.password,
  );
});

When("click login button", async function () {
  await this.loginPage.click();
});

Then("user redirect to dashboard page", async function () {
  let title = await this.loginPage.dashboardTitle();
  assert.strictEqual("Products", title, "title berbeda");
});
