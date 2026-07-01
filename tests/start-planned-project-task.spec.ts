import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.describe('Start Planned Project Task - Functional Happy Paths', () => {
  test('Start a Planned Project Task from Project search (typeahead) and verify status updates to Started', { tag: ["@functional","@regression","@P0","@start-planned-task-e2e"] }, async ({ page, commonPage, projectDetailPage, projectTasksRelatedListPage, projectTaskDetailPage }) => {
    const projectName = testData.startAPlannedProjectTaskFromProjectSearchTypeaheadAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch;

    await test.step('Before — Project \'360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation\' exists and has at least one Project Task with status Planned.', async () => {
      await page.goto(env.baseURL);
    });

    await test.step('Open — Open Salesforce PSA Home page', async () => {
      await page.goto('https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home');
    });

    await test.step('Assert visible — Global search input is visible on Home page', async () => {
      await commonPage.expectGlobalSearchVisible();
    });

    await test.step('Assert visible — Verify Global search is available', async () => {
      await commonPage.expectGlobalSearchVisible();
    });

    await test.step('Fill — Enter project name in Global search', async () => {
      await commonPage.fillGlobalSearch(projectName);
    });

    await test.step('Assert visible — Typeahead results list appears', async () => {
      await commonPage.expectTypeaheadListVisible();
    });

    await test.step('Click — Select matching project from typeahead results', async () => {
      await commonPage.clickTypeaheadOptionByText(projectName);
    });

    await test.step('Assert visible — Project Detail page header is visible', async () => {
      await projectDetailPage.expectHeaderVisible();
    });

    await test.step('Assert contains — Verify Project Detail header shows project name', async () => {
      await projectDetailPage.expectHeaderContainsText(projectName);
    });

    await test.step('Assert visible — Verify \'Project Tasks\' related link is present', async () => {
      await projectDetailPage.expectProjectTasksRelatedLinkVisible();
    });

    await test.step('Click — Open Project Tasks related list', async () => {
      await projectDetailPage.clickProjectTasksRelatedLink();
    });

    await test.step('Assert visible — Project Tasks list/table is visible', async () => {
      await projectTasksRelatedListPage.expectRelatedListVisible();
    });

    await test.step('Assert visible — Verify tasks list is displayed', async () => {
      await projectTasksRelatedListPage.expectRelatedListVisible();
    });

    await test.step('Assert contains — Verify at least one task shows status \'Planned\'', async () => {
      await projectTasksRelatedListPage.expectContainsStatusText('Planned');
    });

    await test.step('Click — Open a task whose status is Planned (click task name in the Planned row)', async () => {
      await projectTasksRelatedListPage.clickTaskNameInRowByStatus('Planned');
    });

    await test.step('Assert visible — Project Task Detail page is visible', async () => {
      await projectTaskDetailPage.expectHeaderVisible();
    });

    await test.step('Assert contains — Verify task Status is Planned on detail page', async () => {
      await projectTaskDetailPage.expectStatusValueContainsText('Planned');
    });

    await test.step('Assert visible — Verify Start button is shown for Planned task', async () => {
      await projectTaskDetailPage.expectStartButtonVisible();
    });

    await test.step('Click — Click Start to begin the task', async () => {
      await projectTaskDetailPage.clickStart();
    });

    await test.step('Wait — Wait for status update to complete', async () => {
      await projectTaskDetailPage.waitForStatusToBe('Started');
    });

    await test.step('Assert contains — Verify task Status updated to Started on detail page', async () => {
      await projectTaskDetailPage.expectStatusValueContainsText('Started');
    });
  });
});

test('Global search is case-insensitive for project name via typeahead', { tag: ["@functional","@regression","@P1","@search-project-case-insensitive"] }, async ({ page, commonPage, projectDetailPage }) => {
  await test.step('Before — Project \'360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation\' exists.', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Open — Open Salesforce PSA Home page', async () => {
    await page.goto('https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home');
  });

  await test.step('Assert visible — Global search input is visible', async () => {
    await commonPage.expectGlobalSearchVisible();
  });

  await test.step('Fill — Enter project name in lower case', async () => {
    await commonPage.fillGlobalSearch(testData.globalSearchIsCaseInsensitiveForProjectNameViaTypeahead.enterProjectNameInLowerCase);
  });

  await test.step('Assert visible — Typeahead results list appears', async () => {
    await commonPage.expectTypeaheadListVisible();
  });

  await test.step('Click — Select matching project from typeahead results', async () => {
    await commonPage.clickTypeaheadOptionByText(testData.startAPlannedProjectTaskFromProjectSearchTypeaheadAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Project Detail page header is visible', async () => {
    await projectDetailPage.expectHeaderVisible();
  });

  await test.step('Assert contains — Verify Project Detail header shows canonical project name', async () => {
    await projectDetailPage.expectHeaderContainsText(testData.startAPlannedProjectTaskFromProjectSearchTypeaheadAndVerifyStatusUpdatesToStarted.enterProjectNameInGlobalSearch);
  });
});


test('Start one task when multiple Planned tasks exist and verify others remain Planned', { tag: ["@functional","@regression","@P1","@start-one-of-multiple-planned-tasks"] }, async ({ page, commonPage, projectDetailPage, projectTasksRelatedListPage, projectTaskDetailPage }) => {
  await test.step('Before — Project \'360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation\' exists and has two or more Project Tasks with status Planned.', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Open — Open Salesforce PSA Home page', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Global search input is visible', async () => {
    await commonPage.expectGlobalSearchVisible();
  });

  await test.step('Fill — Enter project name in Global search', async () => {
    await commonPage.fillGlobalSearch(testData.startOneTaskWhenMultiplePlannedTasksExistAndVerifyOthersRemainPlanned.enterProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Typeahead results list appears', async () => {
    await commonPage.expectTypeaheadListVisible();
  });

  await test.step('Click — Select matching project from typeahead results', async () => {
    await commonPage.clickTypeaheadOptionByText(testData.startOneTaskWhenMultiplePlannedTasksExistAndVerifyOthersRemainPlanned.enterProjectNameInGlobalSearch);
  });

  await test.step('Assert visible — Project Detail page header is visible', async () => {
    await projectDetailPage.expectHeaderVisible();
  });

  await test.step('Click — Open Project Tasks related list', async () => {
    await projectDetailPage.clickProjectTasksRelatedLink();
  });

  await test.step('Assert visible — Project Tasks list/table is visible', async () => {
    await projectTasksRelatedListPage.expectRelatedListVisible();
  });

  await test.step('Assert count greater than — Verify more than one Planned task is listed', async () => {
    await projectTasksRelatedListPage.expectStatusCountGreaterThan('Planned', 1);
  });

  await test.step('Click — Open one of the Planned tasks (click task name in a Planned row)', async () => {
    await projectTasksRelatedListPage.clickTaskNameInRowByStatus('Planned');
  });

  await test.step('Assert visible — Project Task Detail page is visible', async () => {
    await projectTaskDetailPage.expectHeaderVisible();
  });

  await test.step('Click — Start the selected Planned task', async () => {
    await projectTaskDetailPage.clickStart();
  });

  await test.step('Wait — Wait for status update to complete', async () => {
    await projectTaskDetailPage.waitForStatusToBe('Started');
  });

  await test.step('Assert contains — Verify task Status updated to Started on detail page', async () => {
    await projectTaskDetailPage.expectStatusValueContainsText('Started');
  });

  await test.step('Navigate back — Return to Project Tasks list', async () => {
    await page.goBack();
  });

  await test.step('Assert visible — Project Tasks list/table is visible again', async () => {
    await projectTasksRelatedListPage.expectRelatedListVisible();
  });

  await test.step('Assert count greater than — Verify at least one other task remains in Planned status', async () => {
    await projectTasksRelatedListPage.expectStatusCountGreaterThan('Planned', 0);
  });
});
