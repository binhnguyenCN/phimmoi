/* eslint-disable jest/no-standalone-expect */
/* eslint-disable jest/require-hook */
// libs
import { expect } from "detox";
import { Then, When } from "@cucumber/cucumber";

When("I open the app and access Welcome Screen", async () => {
  await device.launchApp();
});
Then("I should see Login and Register button", async () => {
  const loginBtn = element(by.id("loginBtn"));
  const registerBtn = element(by.id("registerBtn"));
  await expect(loginBtn).toBeVisible();
  await expect(registerBtn).toBeVisible();
});
