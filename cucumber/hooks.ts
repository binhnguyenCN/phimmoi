/* eslint-disable jest/require-hook */
// libs
import { Before, After } from "@cucumber/cucumber";
import detox, { device } from "detox";

Before({ timeout: 120 * 1000 }, async () => {
  await detox.init();
  await device.launchApp();
  await device.reloadReactNative();
});
After({ timeout: 120 * 1000 }, async () => {
  await detox.cleanup();
});
