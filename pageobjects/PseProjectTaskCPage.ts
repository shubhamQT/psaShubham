import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class PseProjectTaskCPage {
  private static readonly L = {
    perrySRestaurantsQ453446: { strategy: 'role' as const, value: 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee', role: 'option', shadowHost: 'lst-breadcrumbs', actionKind: 'generic' as const },
    projectTaskAdminTasks: { strategy: 'text' as const, value: 'Project Task Admin Tasks Post-Kick Off', shadowHost: 'records-highlights2', actionKind: 'text' as const },
    edit: { strategy: 'role' as const, value: 'Edit', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    delete: { strategy: 'role' as const, value: 'Delete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    clone: { strategy: 'role' as const, value: 'Clone', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    start: { strategy: 'role' as const, value: 'Start', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    complete: { strategy: 'role' as const, value: 'Complete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    projectTaskAssignments1Link: { strategy: 'role' as const, value: 'Project Task Assignments (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    issues0: { strategy: 'role' as const, value: 'Issues (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    risks0: { strategy: 'role' as const, value: 'Risks (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    taskTime0: { strategy: 'role' as const, value: 'Task Time (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksChildTaskLink: { strategy: 'role' as const, value: 'Project Tasks (Child Task) (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    notes0: { strategy: 'role' as const, value: 'Notes (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    notesAttachments0Link: { strategy: 'role' as const, value: 'Notes & Attachments (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    dependentTasks1: { strategy: 'role' as const, value: 'Dependent Tasks (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    precedingTasks1: { strategy: 'role' as const, value: 'Preceding Tasks (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksPointsCompleteLink: { strategy: 'role' as const, value: 'Project Tasks Points Complete History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksPointsHistoryLink: { strategy: 'role' as const, value: 'Project Tasks Points History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTaskHistory1Link: { strategy: 'role' as const, value: 'Project Task History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showAll13: { strategy: 'role' as const, value: 'Show All (13)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    detailsTab: { strategy: 'css' as const, value: '[title="Details"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    activityTab: { strategy: 'css' as const, value: '[title="Activity"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    projectTaskName: { strategy: 'text' as const, value: 'Project Task Name', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editProjectTaskName: { strategy: 'role' as const, value: 'Edit Project Task Name', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    owner: { strategy: 'text' as const, value: 'Owner', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    morganCoggins: { strategy: 'role' as const, value: 'Morgan Coggins', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    project: { strategy: 'text' as const, value: 'Project', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpProject: { strategy: 'role' as const, value: 'Help Project', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editProject: { strategy: 'role' as const, value: 'Edit Project', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    perrySRestaurantsQ453446Link: { strategy: 'text' as const, value: 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    editStatus: { strategy: 'role' as const, value: 'Edit Status', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    milestone: { strategy: 'text' as const, value: 'Milestone', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    readyProjectManagement: { strategy: 'role' as const, value: 'Ready - Project Management', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    priority: { strategy: 'text' as const, value: 'Priority', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPriority: { strategy: 'role' as const, value: 'Edit Priority', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actualStartDate: { strategy: 'text' as const, value: 'Actual Start Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualStartDate: { strategy: 'role' as const, value: 'Help Actual Start Date & Time', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActualStartDate: { strategy: 'role' as const, value: 'Edit Actual Start Date & Time', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    startDateTime: { strategy: 'text' as const, value: 'Start Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpStartDate: { strategy: 'role' as const, value: 'Help Start Date & Time', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editStartDate: { strategy: 'role' as const, value: 'Edit Start Date & Time', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actualStartDate2: { strategy: 'text' as const, value: 'Actual Start Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualStartDateButton: { strategy: 'role' as const, value: 'Help Actual Start Date', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    startDate: { strategy: 'text' as const, value: 'Start Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    actualEndDate: { strategy: 'text' as const, value: 'Actual End Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualEndDate: { strategy: 'role' as const, value: 'Help Actual End Date & Time', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActualEndDate: { strategy: 'role' as const, value: 'Edit Actual End Date & Time', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    endDateTime: { strategy: 'text' as const, value: 'End Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpEndDate: { strategy: 'role' as const, value: 'Help End Date & Time', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editEndDate: { strategy: 'role' as const, value: 'Edit End Date & Time', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actualEndDate2: { strategy: 'text' as const, value: 'Actual End Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualEndDateButton: { strategy: 'role' as const, value: 'Help Actual End Date', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    endDate: { strategy: 'text' as const, value: 'End Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    estimatedCost: { strategy: 'text' as const, value: 'Estimated Cost', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpEstimatedCost: { strategy: 'role' as const, value: 'Help Estimated Cost', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editEstimatedCost: { strategy: 'role' as const, value: 'Edit Estimated Cost', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    workCalendar: { strategy: 'text' as const, value: 'Work Calendar', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpWorkCalendar: { strategy: 'role' as const, value: 'Help Work Calendar', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    started: { strategy: 'text' as const, value: 'Started', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpStarted: { strategy: 'role' as const, value: 'Help Started', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editStarted: { strategy: 'role' as const, value: 'Edit Started', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actualHours: { strategy: 'text' as const, value: 'Actual Hours', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualHours: { strategy: 'role' as const, value: 'Help Actual Hours', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActualHours: { strategy: 'role' as const, value: 'Edit Actual Hours', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    statusFieldValue: { strategy: 'css' as const, value: 'records-record-layout-item[field-label="Status"] lightning-formatted-text', actionKind: 'text' as const },
    statusFieldLabel: { strategy: 'css' as const, value: 'records-record-layout-item[field-label="Status"] .test-id__field-label', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickPerrySRestaurantsQ453446(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446));
  }

  async expectPerrySRestaurantsQ453446Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs, soft);
  }

  async getInnerTextProjectTaskAdminTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks));
  }

  async expectProjectTaskAdminTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs, soft);
  }

  async clickEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.edit));
  }

  async doubleClickEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.edit));
  }

  async expectEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs, soft);
  }

  async clickDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.delete));
  }

  async doubleClickDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.delete));
  }

  async expectDeleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs, soft);
  }

  async clickClone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.clone));
  }

  async doubleClickClone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.clone));
  }

  async expectCloneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs, soft);
  }

  async clickStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.start));
  }

  async doubleClickStart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.start));
  }

  async expectStartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs, soft);
  }

  async clickComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.complete));
  }

  async doubleClickComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.complete));
  }

  async expectCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs, soft);
  }

  async clickProjectTaskAssignments1Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link));
  }

  async expectProjectTaskAssignments1LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs, soft);
  }

  async clickIssues0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0));
  }

  async expectIssues0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs, soft);
  }

  async clickRisks0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0));
  }

  async expectRisks0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs, soft);
  }

  async clickTaskTime0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0));
  }

  async expectTaskTime0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs, soft);
  }

  async clickProjectTasksChildTaskLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink));
  }

  async expectProjectTasksChildTaskLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs, soft);
  }

  async clickNotes0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0));
  }

  async expectNotes0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs, soft);
  }

  async clickNotesAttachments0Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link));
  }

  async expectNotesAttachments0LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs, soft);
  }

  async clickDependentTasks1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1));
  }

  async expectDependentTasks1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs, soft);
  }

  async clickPrecedingTasks1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1));
  }

  async expectPrecedingTasks1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs, soft);
  }

  async clickProjectTasksPointsCompleteLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink));
  }

  async expectProjectTasksPointsCompleteLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs, soft);
  }

  async clickProjectTasksPointsHistoryLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink));
  }

  async expectProjectTasksPointsHistoryLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs, soft);
  }

  async clickProjectTaskHistory1Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link));
  }

  async expectProjectTaskHistory1LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs, soft);
  }

  async clickShowAll13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.showAll13));
  }

  async expectShowAll13Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs, soft);
  }

  async clickDetailsTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab));
  }

  async expectDetailsTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs, soft);
  }

  async clickActivityTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activityTab));
  }

  async expectActivityTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs, soft);
  }

  async getInnerTextProjectTaskName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName));
  }

  async expectProjectTaskNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs, soft);
  }

  async clickEditProjectTaskName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName));
  }

  async doubleClickEditProjectTaskName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName));
  }

  async expectEditProjectTaskNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs, soft);
  }

  async getInnerTextOwner(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.owner));
  }

  async expectOwnerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs, soft);
  }

  async clickMorganCoggins(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins));
  }

  async expectMorganCogginsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs, soft);
  }

  async getInnerTextProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.project));
  }

  async expectProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs, soft);
  }

  async clickHelpProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProject));
  }

  async doubleClickHelpProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProject));
  }

  async expectHelpProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs, soft);
  }

  async clickEditProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProject));
  }

  async doubleClickEditProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProject));
  }

  async expectEditProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs, soft);
  }

  async clickPerrySRestaurantsQ453446Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link));
  }

  async expectPerrySRestaurantsQ453446LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs, soft);
  }

  async clickEditStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStatus));
  }

  async doubleClickEditStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStatus));
  }

  async expectEditStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs, soft);
  }

  async getInnerTextMilestone(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone));
  }

  async expectMilestoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs, soft);
  }

  async clickReadyProjectManagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement));
  }

  async expectReadyProjectManagementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs, soft);
  }

  async getInnerTextPriority(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.priority));
  }

  async expectPriorityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs, soft);
  }

  async clickEditPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPriority));
  }

  async doubleClickEditPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPriority));
  }

  async expectEditPriorityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs, soft);
  }

  async getInnerTextActualStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate));
  }

  async expectActualStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs, soft);
  }

  async clickHelpActualStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate));
  }

  async doubleClickHelpActualStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate));
  }

  async expectHelpActualStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs, soft);
  }

  async clickEditActualStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate));
  }

  async doubleClickEditActualStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate));
  }

  async expectEditActualStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs, soft);
  }

  async getInnerTextStartDateTime(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime));
  }

  async expectStartDateTimeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs, soft);
  }

  async clickHelpStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate));
  }

  async doubleClickHelpStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate));
  }

  async expectHelpStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs, soft);
  }

  async clickEditStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStartDate));
  }

  async doubleClickEditStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStartDate));
  }

  async expectEditStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs, soft);
  }

  async getInnerTextActualStartDate2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2));
  }

  async expectActualStartDate2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs, soft);
  }

  async clickHelpActualStartDateButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton));
  }

  async doubleClickHelpActualStartDateButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton));
  }

  async expectHelpActualStartDateButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs, soft);
  }

  async getInnerTextStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate));
  }

  async expectStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs, soft);
  }

  async getInnerTextActualEndDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate));
  }

  async expectActualEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs, soft);
  }

  async clickHelpActualEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate));
  }

  async doubleClickHelpActualEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate));
  }

  async expectHelpActualEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs, soft);
  }

  async clickEditActualEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate));
  }

  async doubleClickEditActualEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate));
  }

  async expectEditActualEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs, soft);
  }

  async getInnerTextEndDateTime(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime));
  }

  async expectEndDateTimeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs, soft);
  }

  async clickHelpEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate));
  }

  async doubleClickHelpEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate));
  }

  async expectHelpEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs, soft);
  }

  async clickEditEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEndDate));
  }

  async doubleClickEditEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEndDate));
  }

  async expectEditEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs, soft);
  }

  async getInnerTextActualEndDate2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2));
  }

  async expectActualEndDate2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs, soft);
  }

  async clickHelpActualEndDateButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton));
  }

  async doubleClickHelpActualEndDateButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton));
  }

  async expectHelpActualEndDateButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs, soft);
  }

  async getInnerTextEndDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate));
  }

  async expectEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs, soft);
  }

  async getInnerTextEstimatedCost(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost));
  }

  async expectEstimatedCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs, soft);
  }

  async clickHelpEstimatedCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost));
  }

  async doubleClickHelpEstimatedCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost));
  }

  async expectHelpEstimatedCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs, soft);
  }

  async clickEditEstimatedCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost));
  }

  async doubleClickEditEstimatedCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost));
  }

  async expectEditEstimatedCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs, soft);
  }

  async getInnerTextWorkCalendar(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar));
  }

  async expectWorkCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs, soft);
  }

  async clickHelpWorkCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar));
  }

  async doubleClickHelpWorkCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar));
  }

  async expectHelpWorkCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs, soft);
  }

  async getInnerTextStarted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.started));
  }

  async expectStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs, soft);
  }

  async clickHelpStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStarted));
  }

  async doubleClickHelpStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStarted));
  }

  async expectHelpStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs, soft);
  }

  async clickEditStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStarted));
  }

  async doubleClickEditStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStarted));
  }

  async expectEditStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs, soft);
  }

  async getInnerTextActualHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours));
  }

  async expectActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs, soft);
  }

  async clickHelpActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours));
  }

  async doubleClickHelpActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours));
  }

  async expectHelpActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs, soft);
  }

  async clickEditActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualHours));
  }

  async doubleClickEditActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualHours));
  }

  async expectEditActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Admin Tasks Post-Kick Off | Project Task | Salesforce', timeoutMs);
  }

  async getInnerTextStatusFieldValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue));
  }

  async expectStatusFieldValueVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs, soft);
  }

  async getInnerTextStatusFieldLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel));
  }

  async expectStatusFieldLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs, soft);
  }


  async doubleClickPerrySRestaurantsQ453446(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446));
  }

  async longPressPerrySRestaurantsQ453446(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446));
  }

  async expectPerrySRestaurantsQ453446Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), expected, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), substring, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), value, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446), count, timeoutMs);
  }

  async scrollPerrySRestaurantsQ453446IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446));
  }

  async clickProjectTaskAdminTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks));
  }

  async doubleClickProjectTaskAdminTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks));
  }

  async longPressProjectTaskAdminTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks));
  }

  async expectProjectTaskAdminTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), expected, timeoutMs);
  }

  async expectProjectTaskAdminTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), substring, timeoutMs);
  }

  async expectProjectTaskAdminTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), value, timeoutMs);
  }

  async expectProjectTaskAdminTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), timeoutMs);
  }

  async expectProjectTaskAdminTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks), count, timeoutMs);
  }

  async scrollProjectTaskAdminTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAdminTasks));
  }

  async longPressEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.edit));
  }

  async expectEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.edit), expected, timeoutMs);
  }

  async expectEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.edit), substring, timeoutMs);
  }

  async expectEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.edit), value, timeoutMs);
  }

  async expectEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.edit), timeoutMs);
  }

  async expectEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.edit), count, timeoutMs);
  }

  async scrollEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.edit));
  }

  async longPressDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.delete));
  }

  async expectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.delete), expected, timeoutMs);
  }

  async expectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.delete), substring, timeoutMs);
  }

  async expectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.delete), value, timeoutMs);
  }

  async expectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.delete), timeoutMs);
  }

  async expectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.delete), count, timeoutMs);
  }

  async scrollDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.delete));
  }

  async longPressClone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.clone));
  }

  async expectCloneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.clone), expected, timeoutMs);
  }

  async expectCloneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.clone), substring, timeoutMs);
  }

  async expectCloneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.clone), value, timeoutMs);
  }

  async expectCloneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.clone), timeoutMs);
  }

  async expectCloneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.clone), count, timeoutMs);
  }

  async scrollCloneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.clone));
  }

  async longPressStart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.start));
  }

  async expectStartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.start), expected, timeoutMs);
  }

  async expectStartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.start), substring, timeoutMs);
  }

  async expectStartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.start), value, timeoutMs);
  }

  async expectStartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.start), timeoutMs);
  }

  async expectStartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.start), count, timeoutMs);
  }

  async scrollStartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.start));
  }

  async longPressComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.complete));
  }

  async expectCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.complete), expected, timeoutMs);
  }

  async expectCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.complete), substring, timeoutMs);
  }

  async expectCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.complete), value, timeoutMs);
  }

  async expectCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.complete), timeoutMs);
  }

  async expectCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.complete), count, timeoutMs);
  }

  async scrollCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.complete));
  }

  async doubleClickProjectTaskAssignments1Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link));
  }

  async longPressProjectTaskAssignments1Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link));
  }

  async expectProjectTaskAssignments1LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), expected, timeoutMs);
  }

  async expectProjectTaskAssignments1LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), substring, timeoutMs);
  }

  async expectProjectTaskAssignments1LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), value, timeoutMs);
  }

  async expectProjectTaskAssignments1LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs);
  }

  async expectProjectTaskAssignments1LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), count, timeoutMs);
  }

  async scrollProjectTaskAssignments1LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link));
  }

  async doubleClickIssues0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0));
  }

  async longPressIssues0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0));
  }

  async expectIssues0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.issues0), expected, timeoutMs);
  }

  async expectIssues0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.issues0), substring, timeoutMs);
  }

  async expectIssues0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.issues0), value, timeoutMs);
  }

  async expectIssues0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs);
  }

  async expectIssues0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.issues0), count, timeoutMs);
  }

  async scrollIssues0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0));
  }

  async doubleClickRisks0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0));
  }

  async longPressRisks0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0));
  }

  async expectRisks0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.risks0), expected, timeoutMs);
  }

  async expectRisks0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.risks0), substring, timeoutMs);
  }

  async expectRisks0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.risks0), value, timeoutMs);
  }

  async expectRisks0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs);
  }

  async expectRisks0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.risks0), count, timeoutMs);
  }

  async scrollRisks0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0));
  }

  async doubleClickTaskTime0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0));
  }

  async longPressTaskTime0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0));
  }

  async expectTaskTime0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), expected, timeoutMs);
  }

  async expectTaskTime0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), substring, timeoutMs);
  }

  async expectTaskTime0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), value, timeoutMs);
  }

  async expectTaskTime0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs);
  }

  async expectTaskTime0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), count, timeoutMs);
  }

  async scrollTaskTime0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0));
  }

  async doubleClickProjectTasksChildTaskLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink));
  }

  async longPressProjectTasksChildTaskLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink));
  }

  async expectProjectTasksChildTaskLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), expected, timeoutMs);
  }

  async expectProjectTasksChildTaskLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), substring, timeoutMs);
  }

  async expectProjectTasksChildTaskLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), value, timeoutMs);
  }

  async expectProjectTasksChildTaskLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs);
  }

  async expectProjectTasksChildTaskLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), count, timeoutMs);
  }

  async scrollProjectTasksChildTaskLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink));
  }

  async doubleClickNotes0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0));
  }

  async longPressNotes0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0));
  }

  async expectNotes0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.notes0), expected, timeoutMs);
  }

  async expectNotes0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.notes0), substring, timeoutMs);
  }

  async expectNotes0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.notes0), value, timeoutMs);
  }

  async expectNotes0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs);
  }

  async expectNotes0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.notes0), count, timeoutMs);
  }

  async scrollNotes0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0));
  }

  async doubleClickNotesAttachments0Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link));
  }

  async longPressNotesAttachments0Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link));
  }

  async expectNotesAttachments0LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), expected, timeoutMs);
  }

  async expectNotesAttachments0LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), substring, timeoutMs);
  }

  async expectNotesAttachments0LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), value, timeoutMs);
  }

  async expectNotesAttachments0LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs);
  }

  async expectNotesAttachments0LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), count, timeoutMs);
  }

  async scrollNotesAttachments0LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link));
  }

  async doubleClickDependentTasks1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1));
  }

  async longPressDependentTasks1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1));
  }

  async expectDependentTasks1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), expected, timeoutMs);
  }

  async expectDependentTasks1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), substring, timeoutMs);
  }

  async expectDependentTasks1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), value, timeoutMs);
  }

  async expectDependentTasks1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), timeoutMs);
  }

  async expectDependentTasks1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1), count, timeoutMs);
  }

  async scrollDependentTasks1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks1));
  }

  async doubleClickPrecedingTasks1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1));
  }

  async longPressPrecedingTasks1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1));
  }

  async expectPrecedingTasks1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), expected, timeoutMs);
  }

  async expectPrecedingTasks1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), substring, timeoutMs);
  }

  async expectPrecedingTasks1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), value, timeoutMs);
  }

  async expectPrecedingTasks1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs);
  }

  async expectPrecedingTasks1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), count, timeoutMs);
  }

  async scrollPrecedingTasks1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1));
  }

  async doubleClickProjectTasksPointsCompleteLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink));
  }

  async longPressProjectTasksPointsCompleteLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink));
  }

  async expectProjectTasksPointsCompleteLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), expected, timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), substring, timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), value, timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs);
  }

  async expectProjectTasksPointsCompleteLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), count, timeoutMs);
  }

  async scrollProjectTasksPointsCompleteLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink));
  }

  async doubleClickProjectTasksPointsHistoryLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink));
  }

  async longPressProjectTasksPointsHistoryLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink));
  }

  async expectProjectTasksPointsHistoryLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), expected, timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), substring, timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), value, timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs);
  }

  async expectProjectTasksPointsHistoryLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), count, timeoutMs);
  }

  async scrollProjectTasksPointsHistoryLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink));
  }

  async doubleClickProjectTaskHistory1Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link));
  }

  async longPressProjectTaskHistory1Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link));
  }

  async expectProjectTaskHistory1LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), expected, timeoutMs);
  }

  async expectProjectTaskHistory1LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), substring, timeoutMs);
  }

  async expectProjectTaskHistory1LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), value, timeoutMs);
  }

  async expectProjectTaskHistory1LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), timeoutMs);
  }

  async expectProjectTaskHistory1LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link), count, timeoutMs);
  }

  async scrollProjectTaskHistory1LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1Link));
  }

  async doubleClickShowAll13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.showAll13));
  }

  async longPressShowAll13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.showAll13));
  }

  async expectShowAll13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.showAll13), expected, timeoutMs);
  }

  async expectShowAll13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.showAll13), substring, timeoutMs);
  }

  async expectShowAll13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.showAll13), value, timeoutMs);
  }

  async expectShowAll13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.showAll13), timeoutMs);
  }

  async expectShowAll13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.showAll13), count, timeoutMs);
  }

  async scrollShowAll13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.showAll13));
  }

  async doubleClickDetailsTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab));
  }

  async longPressDetailsTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab));
  }

  async expectDetailsTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), expected, timeoutMs);
  }

  async expectDetailsTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), substring, timeoutMs);
  }

  async expectDetailsTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), value, timeoutMs);
  }

  async expectDetailsTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs);
  }

  async expectDetailsTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), count, timeoutMs);
  }

  async scrollDetailsTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab));
  }

  async doubleClickActivityTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activityTab));
  }

  async longPressActivityTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activityTab));
  }

  async expectActivityTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.activityTab), expected, timeoutMs);
  }

  async expectActivityTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.activityTab), substring, timeoutMs);
  }

  async expectActivityTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.activityTab), value, timeoutMs);
  }

  async expectActivityTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.activityTab), timeoutMs);
  }

  async expectActivityTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.activityTab), count, timeoutMs);
  }

  async scrollActivityTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activityTab));
  }

  async clickProjectTaskName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName));
  }

  async doubleClickProjectTaskName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName));
  }

  async longPressProjectTaskName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName));
  }

  async expectProjectTaskNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), expected, timeoutMs);
  }

  async expectProjectTaskNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), substring, timeoutMs);
  }

  async expectProjectTaskNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), value, timeoutMs);
  }

  async expectProjectTaskNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), timeoutMs);
  }

  async expectProjectTaskNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName), count, timeoutMs);
  }

  async scrollProjectTaskNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskName));
  }

  async longPressEditProjectTaskName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName));
  }

  async expectEditProjectTaskNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), expected, timeoutMs);
  }

  async expectEditProjectTaskNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), substring, timeoutMs);
  }

  async expectEditProjectTaskNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), value, timeoutMs);
  }

  async expectEditProjectTaskNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), timeoutMs);
  }

  async expectEditProjectTaskNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName), count, timeoutMs);
  }

  async scrollEditProjectTaskNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskName));
  }

  async clickOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.owner));
  }

  async doubleClickOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.owner));
  }

  async longPressOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.owner));
  }

  async expectOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.owner), expected, timeoutMs);
  }

  async expectOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.owner), substring, timeoutMs);
  }

  async expectOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.owner), value, timeoutMs);
  }

  async expectOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.owner), timeoutMs);
  }

  async expectOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.owner), count, timeoutMs);
  }

  async scrollOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.owner));
  }

  async doubleClickMorganCoggins(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins));
  }

  async longPressMorganCoggins(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins));
  }

  async expectMorganCogginsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), expected, timeoutMs);
  }

  async expectMorganCogginsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), substring, timeoutMs);
  }

  async expectMorganCogginsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), value, timeoutMs);
  }

  async expectMorganCogginsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), timeoutMs);
  }

  async expectMorganCogginsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins), count, timeoutMs);
  }

  async scrollMorganCogginsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.morganCoggins));
  }

  async clickProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.project));
  }

  async doubleClickProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.project));
  }

  async longPressProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.project));
  }

  async expectProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.project), expected, timeoutMs);
  }

  async expectProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.project), substring, timeoutMs);
  }

  async expectProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.project), value, timeoutMs);
  }

  async expectProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.project), timeoutMs);
  }

  async expectProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.project), count, timeoutMs);
  }

  async scrollProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.project));
  }

  async longPressHelpProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProject));
  }

  async expectHelpProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpProject), expected, timeoutMs);
  }

  async expectHelpProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpProject), substring, timeoutMs);
  }

  async expectHelpProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpProject), value, timeoutMs);
  }

  async expectHelpProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpProject), timeoutMs);
  }

  async expectHelpProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpProject), count, timeoutMs);
  }

  async scrollHelpProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProject));
  }

  async longPressEditProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProject));
  }

  async expectEditProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editProject), expected, timeoutMs);
  }

  async expectEditProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editProject), substring, timeoutMs);
  }

  async expectEditProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editProject), value, timeoutMs);
  }

  async expectEditProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editProject), timeoutMs);
  }

  async expectEditProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editProject), count, timeoutMs);
  }

  async scrollEditProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProject));
  }

  async doubleClickPerrySRestaurantsQ453446Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link));
  }

  async longPressPerrySRestaurantsQ453446Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link));
  }

  async expectPerrySRestaurantsQ453446LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), expected, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), substring, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), value, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link), count, timeoutMs);
  }

  async scrollPerrySRestaurantsQ453446LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.perrySRestaurantsQ453446Link));
  }

  async longPressEditStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStatus));
  }

  async expectEditStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editStatus), expected, timeoutMs);
  }

  async expectEditStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editStatus), substring, timeoutMs);
  }

  async expectEditStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editStatus), value, timeoutMs);
  }

  async expectEditStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editStatus), timeoutMs);
  }

  async expectEditStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editStatus), count, timeoutMs);
  }

  async scrollEditStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStatus));
  }

  async clickMilestone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone));
  }

  async doubleClickMilestone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone));
  }

  async longPressMilestone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone));
  }

  async expectMilestoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.milestone), expected, timeoutMs);
  }

  async expectMilestoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.milestone), substring, timeoutMs);
  }

  async expectMilestoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.milestone), value, timeoutMs);
  }

  async expectMilestoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.milestone), timeoutMs);
  }

  async expectMilestoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.milestone), count, timeoutMs);
  }

  async scrollMilestoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.milestone));
  }

  async doubleClickReadyProjectManagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement));
  }

  async longPressReadyProjectManagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement));
  }

  async expectReadyProjectManagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), expected, timeoutMs);
  }

  async expectReadyProjectManagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), substring, timeoutMs);
  }

  async expectReadyProjectManagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), value, timeoutMs);
  }

  async expectReadyProjectManagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs);
  }

  async expectReadyProjectManagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), count, timeoutMs);
  }

  async scrollReadyProjectManagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement));
  }

  async clickPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.priority));
  }

  async doubleClickPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.priority));
  }

  async longPressPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.priority));
  }

  async expectPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.priority), expected, timeoutMs);
  }

  async expectPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.priority), substring, timeoutMs);
  }

  async expectPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.priority), value, timeoutMs);
  }

  async expectPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.priority), timeoutMs);
  }

  async expectPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.priority), count, timeoutMs);
  }

  async scrollPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.priority));
  }

  async longPressEditPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPriority));
  }

  async expectEditPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPriority), expected, timeoutMs);
  }

  async expectEditPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPriority), substring, timeoutMs);
  }

  async expectEditPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPriority), value, timeoutMs);
  }

  async expectEditPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPriority), timeoutMs);
  }

  async expectEditPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPriority), count, timeoutMs);
  }

  async scrollEditPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPriority));
  }

  async clickActualStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate));
  }

  async doubleClickActualStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate));
  }

  async longPressActualStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate));
  }

  async expectActualStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), expected, timeoutMs);
  }

  async expectActualStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), substring, timeoutMs);
  }

  async expectActualStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), value, timeoutMs);
  }

  async expectActualStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), timeoutMs);
  }

  async expectActualStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate), count, timeoutMs);
  }

  async scrollActualStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate));
  }

  async longPressHelpActualStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate));
  }

  async expectHelpActualStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), expected, timeoutMs);
  }

  async expectHelpActualStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), substring, timeoutMs);
  }

  async expectHelpActualStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), value, timeoutMs);
  }

  async expectHelpActualStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), timeoutMs);
  }

  async expectHelpActualStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate), count, timeoutMs);
  }

  async scrollHelpActualStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDate));
  }

  async longPressEditActualStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate));
  }

  async expectEditActualStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), expected, timeoutMs);
  }

  async expectEditActualStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), substring, timeoutMs);
  }

  async expectEditActualStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), value, timeoutMs);
  }

  async expectEditActualStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), timeoutMs);
  }

  async expectEditActualStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate), count, timeoutMs);
  }

  async scrollEditActualStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualStartDate));
  }

  async clickStartDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime));
  }

  async doubleClickStartDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime));
  }

  async longPressStartDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime));
  }

  async expectStartDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), expected, timeoutMs);
  }

  async expectStartDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), substring, timeoutMs);
  }

  async expectStartDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), value, timeoutMs);
  }

  async expectStartDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.startDateTime), count, timeoutMs);
  }

  async scrollStartDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDateTime));
  }

  async longPressHelpStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate));
  }

  async expectHelpStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), expected, timeoutMs);
  }

  async expectHelpStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), substring, timeoutMs);
  }

  async expectHelpStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), value, timeoutMs);
  }

  async expectHelpStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), timeoutMs);
  }

  async expectHelpStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate), count, timeoutMs);
  }

  async scrollHelpStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStartDate));
  }

  async longPressEditStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStartDate));
  }

  async expectEditStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), expected, timeoutMs);
  }

  async expectEditStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), substring, timeoutMs);
  }

  async expectEditStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), value, timeoutMs);
  }

  async expectEditStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), timeoutMs);
  }

  async expectEditStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editStartDate), count, timeoutMs);
  }

  async scrollEditStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStartDate));
  }

  async clickActualStartDate2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2));
  }

  async doubleClickActualStartDate2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2));
  }

  async longPressActualStartDate2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2));
  }

  async expectActualStartDate2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), expected, timeoutMs);
  }

  async expectActualStartDate2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), substring, timeoutMs);
  }

  async expectActualStartDate2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), value, timeoutMs);
  }

  async expectActualStartDate2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), timeoutMs);
  }

  async expectActualStartDate2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2), count, timeoutMs);
  }

  async scrollActualStartDate2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualStartDate2));
  }

  async longPressHelpActualStartDateButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton));
  }

  async expectHelpActualStartDateButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), expected, timeoutMs);
  }

  async expectHelpActualStartDateButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), substring, timeoutMs);
  }

  async expectHelpActualStartDateButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), value, timeoutMs);
  }

  async expectHelpActualStartDateButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), timeoutMs);
  }

  async expectHelpActualStartDateButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton), count, timeoutMs);
  }

  async scrollHelpActualStartDateButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualStartDateButton));
  }

  async clickStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate));
  }

  async doubleClickStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate));
  }

  async longPressStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate));
  }

  async expectStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.startDate), expected, timeoutMs);
  }

  async expectStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.startDate), substring, timeoutMs);
  }

  async expectStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.startDate), value, timeoutMs);
  }

  async expectStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.startDate), timeoutMs);
  }

  async expectStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.startDate), count, timeoutMs);
  }

  async scrollStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.startDate));
  }

  async clickActualEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate));
  }

  async doubleClickActualEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate));
  }

  async longPressActualEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate));
  }

  async expectActualEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), expected, timeoutMs);
  }

  async expectActualEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), substring, timeoutMs);
  }

  async expectActualEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), value, timeoutMs);
  }

  async expectActualEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), timeoutMs);
  }

  async expectActualEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate), count, timeoutMs);
  }

  async scrollActualEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate));
  }

  async longPressHelpActualEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate));
  }

  async expectHelpActualEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), expected, timeoutMs);
  }

  async expectHelpActualEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), substring, timeoutMs);
  }

  async expectHelpActualEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), value, timeoutMs);
  }

  async expectHelpActualEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), timeoutMs);
  }

  async expectHelpActualEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate), count, timeoutMs);
  }

  async scrollHelpActualEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDate));
  }

  async longPressEditActualEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate));
  }

  async expectEditActualEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), expected, timeoutMs);
  }

  async expectEditActualEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), substring, timeoutMs);
  }

  async expectEditActualEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), value, timeoutMs);
  }

  async expectEditActualEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), timeoutMs);
  }

  async expectEditActualEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate), count, timeoutMs);
  }

  async scrollEditActualEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualEndDate));
  }

  async clickEndDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime));
  }

  async doubleClickEndDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime));
  }

  async longPressEndDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime));
  }

  async expectEndDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), expected, timeoutMs);
  }

  async expectEndDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), substring, timeoutMs);
  }

  async expectEndDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), value, timeoutMs);
  }

  async expectEndDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.endDateTime), count, timeoutMs);
  }

  async scrollEndDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDateTime));
  }

  async longPressHelpEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate));
  }

  async expectHelpEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), expected, timeoutMs);
  }

  async expectHelpEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), substring, timeoutMs);
  }

  async expectHelpEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), value, timeoutMs);
  }

  async expectHelpEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), timeoutMs);
  }

  async expectHelpEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate), count, timeoutMs);
  }

  async scrollHelpEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEndDate));
  }

  async longPressEditEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEndDate));
  }

  async expectEditEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), expected, timeoutMs);
  }

  async expectEditEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), substring, timeoutMs);
  }

  async expectEditEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), value, timeoutMs);
  }

  async expectEditEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), timeoutMs);
  }

  async expectEditEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editEndDate), count, timeoutMs);
  }

  async scrollEditEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEndDate));
  }

  async clickActualEndDate2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2));
  }

  async doubleClickActualEndDate2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2));
  }

  async longPressActualEndDate2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2));
  }

  async expectActualEndDate2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), expected, timeoutMs);
  }

  async expectActualEndDate2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), substring, timeoutMs);
  }

  async expectActualEndDate2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), value, timeoutMs);
  }

  async expectActualEndDate2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), timeoutMs);
  }

  async expectActualEndDate2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2), count, timeoutMs);
  }

  async scrollActualEndDate2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualEndDate2));
  }

  async longPressHelpActualEndDateButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton));
  }

  async expectHelpActualEndDateButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), expected, timeoutMs);
  }

  async expectHelpActualEndDateButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), substring, timeoutMs);
  }

  async expectHelpActualEndDateButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), value, timeoutMs);
  }

  async expectHelpActualEndDateButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), timeoutMs);
  }

  async expectHelpActualEndDateButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton), count, timeoutMs);
  }

  async scrollHelpActualEndDateButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualEndDateButton));
  }

  async clickEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate));
  }

  async doubleClickEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate));
  }

  async longPressEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate));
  }

  async expectEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.endDate), expected, timeoutMs);
  }

  async expectEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.endDate), substring, timeoutMs);
  }

  async expectEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.endDate), value, timeoutMs);
  }

  async expectEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.endDate), timeoutMs);
  }

  async expectEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.endDate), count, timeoutMs);
  }

  async scrollEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.endDate));
  }

  async clickEstimatedCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost));
  }

  async doubleClickEstimatedCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost));
  }

  async longPressEstimatedCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost));
  }

  async expectEstimatedCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), expected, timeoutMs);
  }

  async expectEstimatedCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), substring, timeoutMs);
  }

  async expectEstimatedCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), value, timeoutMs);
  }

  async expectEstimatedCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), timeoutMs);
  }

  async expectEstimatedCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost), count, timeoutMs);
  }

  async scrollEstimatedCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedCost));
  }

  async longPressHelpEstimatedCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost));
  }

  async expectHelpEstimatedCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), expected, timeoutMs);
  }

  async expectHelpEstimatedCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), substring, timeoutMs);
  }

  async expectHelpEstimatedCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), value, timeoutMs);
  }

  async expectHelpEstimatedCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), timeoutMs);
  }

  async expectHelpEstimatedCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost), count, timeoutMs);
  }

  async scrollHelpEstimatedCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedCost));
  }

  async longPressEditEstimatedCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost));
  }

  async expectEditEstimatedCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), expected, timeoutMs);
  }

  async expectEditEstimatedCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), substring, timeoutMs);
  }

  async expectEditEstimatedCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), value, timeoutMs);
  }

  async expectEditEstimatedCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), timeoutMs);
  }

  async expectEditEstimatedCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost), count, timeoutMs);
  }

  async scrollEditEstimatedCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedCost));
  }

  async clickWorkCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar));
  }

  async doubleClickWorkCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar));
  }

  async longPressWorkCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar));
  }

  async expectWorkCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), expected, timeoutMs);
  }

  async expectWorkCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), substring, timeoutMs);
  }

  async expectWorkCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), value, timeoutMs);
  }

  async expectWorkCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), timeoutMs);
  }

  async expectWorkCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.workCalendar), count, timeoutMs);
  }

  async scrollWorkCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workCalendar));
  }

  async longPressHelpWorkCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar));
  }

  async expectHelpWorkCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), expected, timeoutMs);
  }

  async expectHelpWorkCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), substring, timeoutMs);
  }

  async expectHelpWorkCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), value, timeoutMs);
  }

  async expectHelpWorkCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), timeoutMs);
  }

  async expectHelpWorkCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar), count, timeoutMs);
  }

  async scrollHelpWorkCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkCalendar));
  }

  async clickStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.started));
  }

  async doubleClickStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.started));
  }

  async longPressStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.started));
  }

  async expectStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.started), expected, timeoutMs);
  }

  async expectStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.started), substring, timeoutMs);
  }

  async expectStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.started), value, timeoutMs);
  }

  async expectStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.started), timeoutMs);
  }

  async expectStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.started), count, timeoutMs);
  }

  async scrollStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.started));
  }

  async longPressHelpStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStarted));
  }

  async expectHelpStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), expected, timeoutMs);
  }

  async expectHelpStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), substring, timeoutMs);
  }

  async expectHelpStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), value, timeoutMs);
  }

  async expectHelpStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), timeoutMs);
  }

  async expectHelpStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpStarted), count, timeoutMs);
  }

  async scrollHelpStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpStarted));
  }

  async longPressEditStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStarted));
  }

  async expectEditStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editStarted), expected, timeoutMs);
  }

  async expectEditStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editStarted), substring, timeoutMs);
  }

  async expectEditStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editStarted), value, timeoutMs);
  }

  async expectEditStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editStarted), timeoutMs);
  }

  async expectEditStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editStarted), count, timeoutMs);
  }

  async scrollEditStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editStarted));
  }

  async clickActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours));
  }

  async doubleClickActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours));
  }

  async longPressActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours));
  }

  async expectActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualHours), expected, timeoutMs);
  }

  async expectActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualHours), substring, timeoutMs);
  }

  async expectActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualHours), value, timeoutMs);
  }

  async expectActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualHours), timeoutMs);
  }

  async expectActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualHours), count, timeoutMs);
  }

  async scrollActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualHours));
  }

  async longPressHelpActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours));
  }

  async expectHelpActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), expected, timeoutMs);
  }

  async expectHelpActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), substring, timeoutMs);
  }

  async expectHelpActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), value, timeoutMs);
  }

  async expectHelpActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), timeoutMs);
  }

  async expectHelpActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours), count, timeoutMs);
  }

  async scrollHelpActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualHours));
  }

  async longPressEditActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualHours));
  }

  async expectEditActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), expected, timeoutMs);
  }

  async expectEditActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), substring, timeoutMs);
  }

  async expectEditActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), value, timeoutMs);
  }

  async expectEditActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), timeoutMs);
  }

  async expectEditActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editActualHours), count, timeoutMs);
  }

  async scrollEditActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualHours));
  }

  async clickStatusFieldValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue));
  }

  async doubleClickStatusFieldValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue));
  }

  async longPressStatusFieldValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue));
  }

  async expectStatusFieldValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), expected, timeoutMs);
  }

  async expectStatusFieldValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), substring, timeoutMs);
  }

  async expectStatusFieldValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), value, timeoutMs);
  }

  async expectStatusFieldValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue), count, timeoutMs);
  }

  async scrollStatusFieldValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldValue));
  }

  async clickStatusFieldLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel));
  }

  async doubleClickStatusFieldLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel));
  }

  async longPressStatusFieldLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel));
  }

  async expectStatusFieldLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), expected, timeoutMs);
  }

  async expectStatusFieldLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), substring, timeoutMs);
  }

  async expectStatusFieldLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), value, timeoutMs);
  }

  async expectStatusFieldLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), timeoutMs);
  }

  async expectStatusFieldLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel), count, timeoutMs);
  }

  async scrollStatusFieldLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.statusFieldLabel));
  }

}
