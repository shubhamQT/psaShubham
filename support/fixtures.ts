import { test as base, expect } from "@playwright/test";
import { CommonPage } from "../pageobjects/CommonPage";
import { ProjectDetailPage } from "../pageobjects/ProjectDetailPage";
import { ProjectTaskDetailPage } from "../pageobjects/ProjectTaskDetailPage";
import { ProjectTasksRelatedListPage } from "../pageobjects/ProjectTasksRelatedListPage";

type AppFixtures = {
  commonPage: CommonPage;
  projectDetailPage: ProjectDetailPage;
  projectTaskDetailPage: ProjectTaskDetailPage;
  projectTasksRelatedListPage: ProjectTasksRelatedListPage;
};

export const test = base.extend<AppFixtures>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  projectDetailPage: async ({ page }, use) => {
    await use(new ProjectDetailPage(page));
  },
  projectTaskDetailPage: async ({ page }, use) => {
    await use(new ProjectTaskDetailPage(page));
  },
  projectTasksRelatedListPage: async ({ page }, use) => {
    await use(new ProjectTasksRelatedListPage(page));
  },
});

export { expect };
