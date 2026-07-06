import { test as base, expect } from "@playwright/test";
import { CommonPage } from "../pageobjects/CommonPage";
import { HomePage } from "../pageobjects/HomePage";
import { PseProjCPage } from "../pageobjects/PseProjCPage";
import { PseProjCrelatedPage } from "../pageobjects/PseProjCrelatedPage";
import { PseProjectTaskCPage } from "../pageobjects/PseProjectTaskCPage";

type AppFixtures = {
  commonPage: CommonPage;
  homePage: HomePage;
  pseProjCPage: PseProjCPage;
  pseProjCrelatedPage: PseProjCrelatedPage;
  pseProjectTaskCPage: PseProjectTaskCPage;
};

export const test = base.extend<AppFixtures>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  pseProjCPage: async ({ page }, use) => {
    await use(new PseProjCPage(page));
  },
  pseProjCrelatedPage: async ({ page }, use) => {
    await use(new PseProjCrelatedPage(page));
  },
  pseProjectTaskCPage: async ({ page }, use) => {
    await use(new PseProjectTaskCPage(page));
  },
});

export { expect };
