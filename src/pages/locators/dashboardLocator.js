import { By } from "selenium-webdriver";
const dashboardLocator = {
  dashboardTitle: By.className("title"),
  sortProduct: By.css("[data-test='product-sort-container']"),
  activeOption: By.css("[data-test='active-option']"),
};

export default dashboardLocator;
