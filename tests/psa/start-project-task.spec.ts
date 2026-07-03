import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Open a Project Task with Status=Planned and verify fields and Start button', { tag: ["@functional","@regression","@P0","@open-planned-project-task-details"] }, async ({ page, homePage, pseProjCPage, pseProjCrelatedPage, pseProjectTaskCPage }) => {
  await test.step('Before — User has permissions to view and edit the Project and its Project Tasks.', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Open — Open Salesforce Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global Search is visible', async () => {
    await homePage.expectSearchVisible();
  });

  await test.step('Click — Focus the Global Search input', async () => {
    await homePage.clickSearch();
  });

  await test.step('Assert visible — Global Search input is visible', async () => {
    await homePage.expectSearchInputVisible();
  });

  await test.step('Fill — Enter project name into Global Search', async () => {
    await homePage.fillSearchInput(testData.openAProjectTaskWithStatusPlannedAndVerifyFieldsAndStartButton.enterProjectNameIntoGlobalSearch);
  });

  await test.step('Assert visible — Search results show the project', async () => {
    await homePage.expectShowMoreResultsForVisible();
  });

  await test.step('Click — Open the project from search results', async () => {
    await homePage.clickShowMoreResultsFor();
    await homePage.expectPerrySRestaurantsQ453446LinkVisible();
    await homePage.clickPerrySRestaurantsQ453446Link();
  });

  await test.step('Assert visible — Project record header is visible', async () => {
    await pseProjCPage.expectOverviewTabVisible();
  });

  await test.step('Click — Open Related tab on Project record', async () => {
    await pseProjCPage.clickMoreTabsButton();
  });

  await test.step('Scroll — Scroll to Project Tasks related list', async () => {
    await pseProjCPage.scrollProjectTasks10IntoView();
  });

  await test.step('Click — Click View All in Project Tasks related list', async () => {
    await pseProjCPage.clickShowAll35();
  });

  await test.step('Assert visible — Related Lists workspace is visible', async () => {
    await pseProjCrelatedPage.expectProjectTasksVisible();
  });

  await test.step('Click — Open the Project Tasks related list', async () => {
    await pseProjCrelatedPage.clickProjectTasks();
  });

  await test.step('Assert visible — Project Tasks list/table is visible', async () => {
    await pseProjCrelatedPage.expectShowQuickFiltersVisible();
  });

  await test.step('Click — Open the first task with Status = Planned', async () => {
    await pseProjCrelatedPage.clickSldsTable1TableLink();
  });

  await test.step('Assert visible — Project Task record page is visible', async () => {
    await pseProjectTaskCPage.expectProjectTaskNameVisible();
  });

  await test.step('Assert visible — Status field is visible', async () => {
    await pseProjectTaskCPage.expectStatusFieldLabelVisible();
  });

  await test.step('Assert visible — Started checkbox field is visible', async () => {
    await pseProjectTaskCPage.expectStartedVisible();
  });

  await test.step('Assert visible — Actual Start Date field is visible', async () => {
    await pseProjectTaskCPage.expectActualStartDateVisible();
  });

  await test.step('Assert text — Status field value is Planned', async () => {
    const text = await pseProjectTaskCPage.getInnerTextStatusFieldValue();
    expect(text).toBe('Planned');
  });

  await test.step('Assert visible — Start button is visible', async () => {
    await pseProjectTaskCPage.expectStartVisible();
  });

  await test.step('Assert enabled — Start button is enabled', async () => {
    await pseProjectTaskCPage.expectStartEnabled();
  });
});
