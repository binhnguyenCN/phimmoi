// libs
import { expect } from "detox";

describe("logout flow", () => {
  // arrange
  const userName = "Binh Nguyen";
  it("should login successfully", async () => {
    // arrange
    const email = "binh@gmail.com";
    const password = "1234";
    // act
    await device.launchApp();
    await element(by.id("TestId__loginBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__password")).typeText(password);
    await device.disableSynchronization();
    await element(by.id("TestId__submitBtn")).tap();
    await waitFor(element(by.id("TestId__email")))
      .not.toBeVisible()
      .withTimeout(5000);
    // assert
    await expect(
      element(
        by.id("TestId__homescreen").withDescendant(by.id("TestId__popularity"))
      )
    ).toBeVisible();
  });
  it("should navigate to Account screen", async () => {
    // act
    await element(by.id("TestId__account")).tap();
    await waitFor(
      element(
        by.id("TestId__homescreen").withDescendant(by.id("TestId__popularity"))
      )
    )
      .not.toBeVisible()
      .withTimeout(5000);
    // assert
    await expect(element(by.text(userName))).toBeVisible();
  });
  it("should logout successfully", async () => {
    // act
    await element(by.id("TestId__logoutBtn")).tap();
    await waitFor(element(by.text(userName)))
      .not.toBeVisible()
      .withTimeout(5000);
    // assert
    await expect(element(by.id("TestId__loginBtn"))).toBeVisible();
    await expect(element(by.id("TestId__registerBtn"))).toBeVisible();
  });
});
