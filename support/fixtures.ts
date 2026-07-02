import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { PseProjCPage } from "../pageobjects/PseProjCPage";
import { PseProjCrelatedPage } from "../pageobjects/PseProjCrelatedPage";
import { PseProjectTaskCPage } from "../pageobjects/PseProjectTaskCPage";
import { SearchResultPage } from "../pageobjects/SearchResultPage";

type AppFixtures = {
  homePage: HomePage;
  pseProjCPage: PseProjCPage;
  pseProjCrelatedPage: PseProjCrelatedPage;
  pseProjectTaskCPage: PseProjectTaskCPage;
  searchResultPage: SearchResultPage;
};

export const test = base.extend<AppFixtures>({
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
  searchResultPage: async ({ page }, use) => {
    await use(new SearchResultPage(page));
  },
});

export { expect };
