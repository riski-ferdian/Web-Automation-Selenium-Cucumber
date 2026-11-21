import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../src/pages/actions/LoginPage.js";
import userData from "../../src/data/userData.json" with { type: "json" };
import errorMessage from "../../src/data/errorMessage.json" with { type: "json" };
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
  await this.loginPage.clickLoginButton();
});

Then("user redirect to dashboard page", async function () {
  let title = await this.loginPage.dashboardTitle();
  assert.strictEqual(title, "Products", "title berbeda");
});

When("user input invalid username and password", async function () {
  await this.loginPage.login(
    userData.invalidUser.username,
    userData.invalidUser.password,
  );
});

Then("show error message", async function () {
  let title = await this.loginPage.getErrorMessage();
  assert.strictEqual(title, errorMessage.errorMessage, "error message berbeda");
});

When(
  "user input {string} as username and input {string} as password",
  async function (username, password) {
    await this.loginPage.login(username, password);
  },
);
