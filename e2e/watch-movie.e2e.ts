// libs
import { expect } from "detox";

describe("watch movie flow", () => {
  const movieID = "675353";

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
  it("should select movie", async () => {
    // arrange
    const movieItem = element(
      by
        .id("TestId__homescreen")
        .withDescendant(
          by.id("TestId__topRated").withDescendant(by.id(movieID))
        )
    );
    // act
    await element(by.id("TestId__homescreen")).scroll(100, "down");
    await element(by.id("TestId__topRated")).scrollTo("right");
    await waitFor(movieItem).toBeVisible().withTimeout(5000);
    await movieItem.tap();
    await waitFor(element(by.id("TestId__detail")))
      .toBeVisible()
      .withTimeout(5000);
    // assert
    await expect(element(by.id("TestId__info"))).toBeVisible();
  });
  it("should click to WATCH NOW to enjoy movie", async () => {
    // act
    await element(by.id("TestId__info")).scroll(300, "down");
    await element(
      by.id("TestId__info").withDescendant(by.id("TestId__trailerBtn"))
    ).tap();
    await waitFor(element(by.id("TestId__movie")))
      .toBeVisible()
      .withTimeout(5000);
    // assert
    await expect(element(by.id("TestId__movie"))).toBeVisible();
  });
});
