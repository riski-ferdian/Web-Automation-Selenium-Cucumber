export default {
  paths: ["test/features/**/*.feature"],
  require: ["test/step-definitions/**/*.js"],
  format: ["summary", "html:reports/cucumber-report.html"],
};
