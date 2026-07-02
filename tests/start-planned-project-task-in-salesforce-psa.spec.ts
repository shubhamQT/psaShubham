import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.describe('Salesforce PSA - Start Planned Project Task - Functional', () => {
  test('E2E: Search project, open Project Tasks, open Planned task, and Start it (Planned → Started)', { tag: ["@functional","@regression","@P0","@e2e-start-planned-project-task"] }, async ({ page, homePage, searchResultPage, pseProjCPage, pseProjCrelatedPage, pseProjectTaskCPage }) => {
    await test.step('Open — Navigate to Salesforce PSA Home', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Assert visible — Global header visible (Home loaded)', async () => {
      await homePage.expectSearchVisible();
    });

    await test.step('Open — Expand global search', async () => {
      await homePage.clickSearch();
    });

    await test.step('Assert visible — Global search input is visible on Home', async () => {
      await homePage.expectSearchInputVisible();
    });

    await test.step('Fill — Enter exact Project name in global search', async () => {
      await homePage.fillSearchInput(testData.e2eSearchProjectOpenProjectTasksOpenPlannedTaskAndStartItPlannedStarted.enterExactProjectNameInGlobalSearch);
    });

    await test.step('Assert visible — Search results dropdown/listbox becomes visible', async () => {
      await searchResultPage.expectSearchResultsVisible();
    });

    await test.step('Assert contains — Expected project appears in search results', async () => {
      await searchResultPage.expectSearch360HealthAndContainsText(testData.e2eSearchProjectOpenProjectTasksOpenPlannedTaskAndStartItPlannedStarted.enterExactProjectNameInGlobalSearch);
    });

    await test.step('Click — Open Project from search results', async () => {
      await searchResultPage.clickSearch360HealthAnd();
    });

    await test.step('Assert visible — Project Detail header is visible', async () => {
      await pseProjCPage.expectProjectNameVisible();
    });

    await test.step('Assert contains — Project Detail header shows selected project name', async () => {
      await pseProjCPage.expectProject360HealthAndContainsText(testData.e2eSearchProjectOpenProjectTasksOpenPlannedTaskAndStartItPlannedStarted.enterExactProjectNameInGlobalSearch);
    });

    await test.step('Click — Open Related tab on Project Detail', async () => {
      await pseProjCPage.clickProjectTasksPreview();
    });

    await test.step('Scroll — Scroll to Project Tasks related list card', async () => {
      await pseProjCPage.scrollProjectTasksPreviewIntoView();
    });

    await test.step('Click — Click View All on Project Tasks related list', async () => {
      await pseProjCPage.clickProjectTasks();
    });

    await test.step('Assert visible — Project Tasks list view is displayed', async () => {
      await pseProjCrelatedPage.expectProjectTasksVisible();
    });

    await test.step('Assert visible — Tasks table/list is visible', async () => {
      await pseProjCrelatedPage.expectProjectTaskNameColumnVisible();
    });

    await test.step('Assert visible — At least one task shows status Planned', async () => {
      await pseProjCrelatedPage.expectSortByStatusVisible();
    });

    await test.step('Click — Open a task with status Planned', async () => {
      await pseProjCrelatedPage.clickProjectTaskNameColumn();
    });

    await test.step('Assert visible — Project Task Detail page header is visible', async () => {
      await pseProjectTaskCPage.expectProjectTaskNameVisible();
    });

    await test.step('Assert contains — Project Task Status shows Planned before starting', async () => {
      await pseProjectTaskCPage.expectStatusContainsText('Planned');
    });

    await test.step('Assert visible — Start button is visible on Planned task', async () => {
      await pseProjectTaskCPage.expectStartVisible();
    });

    await test.step('Click — Click Start to change status to Started', async () => {
      await pseProjectTaskCPage.clickStart();
    });

    await test.step('Assert visible — Updated status value displays on Task Detail', async () => {
      await pseProjectTaskCPage.expectStartedVisible();
    });

    await test.step('Assert contains — Verify status changed to Started', async () => {
      await pseProjectTaskCPage.expectStatusContainsText('Started');
    });
  });

  test('Global Search: Case-insensitive search returns the target project', { tag: ["@functional","@regression","@P1","@search-project-case-insensitive"] }, async ({ page, homePage, searchResultPage }) => {
    await test.step('Open — Navigate to Salesforce PSA Home', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Assert visible — Global header visible (Home loaded)', async () => {
      await homePage.expectSearchVisible();
    });

    await test.step('Open — Expand global search', async () => {
      await homePage.clickSearch();
    });

    await test.step('Assert visible — Global search input is visible on Home', async () => {
      await homePage.expectSearchInputVisible();
    });

    await test.step('Fill — Enter project name in lowercase to test case-insensitivity', async () => {
      await homePage.fillSearchInput(testData.globalSearchCaseInsensitiveSearchReturnsTheTargetProject.enterProjectNameInLowercaseToTestCaseInsensitivity);
    });

    await test.step('Assert visible — Search results dropdown/listbox becomes visible', async () => {
      await searchResultPage.expectSearchResultsVisible();
    });

    await test.step('Assert contains — Results include the correctly-cased project name (case-insensitive match)', async () => {
      await searchResultPage.expectSearch360HealthAndContainsText(testData.e2eSearchProjectOpenProjectTasksOpenPlannedTaskAndStartItPlannedStarted.enterExactProjectNameInGlobalSearch);
    });
  });
});
