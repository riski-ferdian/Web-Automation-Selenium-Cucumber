import { By } from "selenium-webdriver";

const loginLocator = {
  username: By.id("user-name"),
  password: By.id("password"),
  loginButton: By.id("login-button"),
  dashboardTitle: By.className("title"),
  errorMessage: By.css(".error-message-container"),
};

export default loginLocator;
