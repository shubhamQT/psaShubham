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

test('Start a Planned Project Task and verify updated fields', { tag: ["@functional","@regression","@P0","@start-planned-project-task"] }, async ({ page, homePage, pseProjCPage, pseProjCrelatedPage, pseProjectTaskCPage }) => {
  await test.step('Navigate to URL — Open Salesforce Home', async () => {
    await page.goto('https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home');
  });
  await test.step('Wait until visible — Global Search input is visible — (input[title=\'Search Salesforce\'])', async () => {
    await homePage.expectSearchVisible();
  });
  await test.step('Click — Focus the Global Search input — (input[title=\'Search Salesforce\'])', async () => {
    await homePage.clickSearch();
  });
  await test.step('Fill — Enter project name into Global Search — (input[title=\'Search Salesforce\'])', async () => {
    await homePage.fillSearchInput('Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation');
  });
  await test.step('Wait until visible — Search results show the project — (a:has-text(\'QA Planned Task Project\'))', async () => {
    await homePage.expectPerrySRestaurantsQ453446LinkVisible();
  });
  await test.step('Click — Open the project from search results — (a:has-text(\'QA Planned Task Project\'))', async () => {
    await homePage.clickPerrySRestaurantsQ453446Link();
  });
  await test.step('Wait until visible — Project record header is visible — (records-record-layout h1:has-text(\'QA Planned Task Project\'))', async () => {
    await pseProjCPage.expectProjectPerrySRestaurantsVisible();
  });
  await test.step('Assert visible — Open Related tab on Project record (a[role=\'tab\'][data-label=\'Related\'], a[role=\'tab\']:has-text(\'Relate', async () => {
    await pseProjCPage.expectShowAll35Visible();
  });
  await test.step('Click — Open Related tab on Project record (a[role=\'tab\'][data-label=\'Related\'], a[role=\'tab\']:has-text(\'Related\'))', async () => {
    await pseProjCPage.clickShowAll35();
  });
  await test.step('Wait until visible — Related Lists workspace is visible — (nav[aria-label=\'Related Lists\'])', async () => {
    await pseProjCPage.expectProjectTasks10Visible();
  });
  await test.step('Click — Open the Project Tasks related list — (a:has-text(\'Project Tasks\'))', async () => {
    await pseProjCPage.clickProjectTasks10();
  });
  await test.step('Wait until visible — Project Tasks list/table is visible — (table[role=\'grid\'])', async () => {
    await pseProjCrelatedPage.expectProjectTasksVisible();
  });
  await test.step('Wait until visible — Project Task record page is visible — (records-record-layout h1)', async () => {
    await pseProjectTaskCPage.expectProjectVisible();
  });
  await test.step('Click — Click Start button — (button:has-text(\'Start\'), button[name=\'Start\'])', async () => {
    await pseProjectTaskCPage.clickStart();
  });
  await test.step('Wait (timeout) — Wait for update to complete', async () => {
    await page.waitForTimeout(1500);
  });
  await test.step('Assert text (exact) — Status field value is Started — (.slds-form__item:has(label:has-text(\'Status\')) .slds-form-element', async () => {
    await pseProjectTaskCPage.expectStartText('Started');
  });
  await test.step('Assert checked — Started checkbox is checked — (input[type=\'checkbox\'][name=\'Started\'], lightning-input:has-text(\'Starte', async () => {
    await pseProjectTaskCPage.expectStartChecked();
  });
  await test.step('Assert contains text — Actual Start Date is populated with today\'s date — (.slds-form__item:has(label:has-text(\'Actual S', async () => {
    await pseProjectTaskCPage.expectStartContainsText('{{TODAY}}');
  });
});
