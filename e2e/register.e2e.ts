// libs
import { expect } from "detox";

const fs = require("fs");
const pixelmatch = require("pixelmatch");
const { PNG } = require("pngjs");

describe("register flow", () => {
  // arrange
  const emailInvalid = "Email must be a valid email";
  const passInvalid = "Password must be at least 4 characters";
  const emailRequired = "Please enter your email !";
  const passRequired = "Please enter your password !";
  const retypeRequired = "Please retype your password !";
  const retypeInvalid = "Password does not match !";
  const accountErr = "Invalid email and/or password";

  // eslint-disable-next-line jest/no-hooks
  beforeEach(async () => {
    await device.launchApp();
    await device.reloadReactNative();
  });
  it("should see the Welcome screen", async () => {
    // act
    const img = await device.takeScreenshot("welcome-screen");
    const origin = PNG.sync.read(
      fs.readFileSync("./assets/welcome-screen.png")
    );
    const result = PNG.sync.read(fs.readFileSync(img));
    const { width, height } = origin;
    const diff = new PNG({ width, height });
    const numDiffPixels = pixelmatch(
      origin.data,
      result.data,
      diff.data,
      width,
      height,
      {
        threshold: 0.1
      }
    );

    // assert
    await expect(element(by.id("TestId__loginBtn"))).toBeVisible();
    await expect(element(by.id("TestId__registerBtn"))).toBeVisible();
  });
  it("should register fail without email and password", async () => {
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(emailRequired))).toBeVisible();
    await expect(element(by.text(passRequired))).toBeVisible();
  });
  it("should register fail without password", async () => {
    // arrange
    const email = "binh@gmail.com";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(passRequired))).toBeVisible();
  });
  it("should register fail without email", async () => {
    const password = "1234";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(emailRequired))).toBeVisible();
  });
  it("should register fail with invalid email", async () => {
    // arrange
    const email = "binh@gmail";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(emailInvalid))).toBeVisible();
  });
  it("should register fail with invalid password", async () => {
    // arrange
    const password = "12";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(passInvalid))).toBeVisible();
  });
  it("should register fail without retype password", async () => {
    // arrange
    const email = "binh@gmail.comm";
    const password = "1234";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(retypeRequired))).toBeVisible();
  });
  it("should register fail because retyped wrong password", async () => {
    // arrange
    const password = "1234";
    const retype = "4321";
    const email = "binh@gmail.com";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__confirmPassword")).typeText(retype);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(retypeInvalid))).toBeVisible();
  });
  it("should login fail with invalid account", async () => {
    // arrange
    const email = "binhng@citynow.com";
    const password = "1234";
    const retype = "1234";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__confirmPassword")).typeText(retype);
    await element(by.id("TestId__submitBtn")).tap();
    // assert
    await expect(element(by.text(accountErr))).toBeVisible();
  });
  it("should register successfully", async () => {
    // arrange
    const email = "binh@gmail.com";
    const password = "1234";
    // act
    await element(by.id("TestId__registerBtn")).tap();
    await element(by.id("TestId__email")).typeText(email);
    await element(by.id("TestId__password")).typeText(password);
    await element(by.id("TestId__confirmPassword")).typeText(password);
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
});
