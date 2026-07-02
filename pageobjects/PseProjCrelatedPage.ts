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

export class PseProjCrelatedPage {
  private static readonly L = {
    stageCompletePlanned: { strategy: 'text' as const, value: 'stage completePlanned', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    stageCompleteReadyToStaff: { strategy: 'text' as const, value: 'stage completeReady to Staff', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    stageCompleteInProgress: { strategy: 'text' as const, value: 'stage completeIn Progress', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    projectSurvey: { strategy: 'css' as const, value: '[title="Project Survey"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    teamMembership: { strategy: 'css' as const, value: '[title="Team Membership"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    healthAndCommu: { strategy: 'role' as const, value: '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee', role: 'option', shadowHost: 'lst-breadcrumbs', actionKind: 'generic' as const },
    healthAndCommuLink: { strategy: 'css' as const, value: '[title="360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation"]', shadowHost: 'lst-breadcrumbs', actionKind: 'link' as const },
    projectTasks: { strategy: 'text' as const, value: 'Project Tasks', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    new: { strategy: 'role' as const, value: 'New', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    massChangeOwner: { strategy: 'role' as const, value: 'Change Owner', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    addProjectTasksFrom: { strategy: 'role' as const, value: 'Add Project Tasks From Template', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    generateResourceRequests: { strategy: 'role' as const, value: 'Generate Resource Requests', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    generateHeldResourceRequests: { strategy: 'role' as const, value: 'Generate Held Resource Requests', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    showActionsForProject: { strategy: 'role' as const, value: 'Show actions for Project Tasks', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    itemsUpdated: { strategy: 'text' as const, value: '32 items • Updated a few seconds ago', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    items: { strategy: 'text' as const, value: '32 items •', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    updatedAFewSeconds: { strategy: 'text' as const, value: 'Updated a few seconds ago', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    multiColumnSortButton: { strategy: 'role' as const, value: 'Column sort', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    showQuickFilters: { strategy: 'role' as const, value: 'Show quick filters', role: 'button', shadowHost: 'lightning-button-icon-stateful', actionKind: 'button' as const },
    lgtDatatable18Options: { strategy: 'css' as const, value: '[name="lgt-datatable-18-options"][type="checkbox"]', shadowHost: 'lightning-primitive-header-factory', actionKind: 'checkbox' as const },
    sortByProjectTask: { strategy: 'role' as const, value: 'Sort by: Project Task Name', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showProjectTaskName: { strategy: 'role' as const, value: 'Show Project Task Name column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1039', actionKind: 'button' as const },
    projectTaskNameColumn: { strategy: 'role' as const, value: 'Project Task Name column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByMilestone: { strategy: 'role' as const, value: 'Sort by: Milestone', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showMilestoneColumnActions: { strategy: 'role' as const, value: 'Show Milestone column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1045', actionKind: 'button' as const },
    milestoneColumnWidth: { strategy: 'role' as const, value: 'Milestone column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByParentTask: { strategy: 'role' as const, value: 'Sort by: Parent Task', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showParentTaskColumn: { strategy: 'role' as const, value: 'Show Parent Task column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1051', actionKind: 'button' as const },
    parentTaskColumnWidth: { strategy: 'role' as const, value: 'Parent Task column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByDescription: { strategy: 'role' as const, value: 'Sort by: Description', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showDescriptionColumnActions: { strategy: 'role' as const, value: 'Show Description column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1057', actionKind: 'button' as const },
    descriptionColumnWidth: { strategy: 'role' as const, value: 'Description column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByStatus: { strategy: 'role' as const, value: 'Sort by: Status', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStatusColumnActions: { strategy: 'role' as const, value: 'Show Status column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1063', actionKind: 'button' as const },
    sortByStartDate: { strategy: 'role' as const, value: 'Sort by: Start Date & Time', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showStartDate: { strategy: 'role' as const, value: 'Show Start Date & Time column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1069', actionKind: 'button' as const },
    startDateTime: { strategy: 'role' as const, value: 'Start Date & Time column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByEndDate: { strategy: 'role' as const, value: 'Sort by: End Date & Time', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showEndDate: { strategy: 'role' as const, value: 'Show End Date & Time column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1075', actionKind: 'button' as const },
    endDateTime: { strategy: 'role' as const, value: 'End Date & Time column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortBySummary: { strategy: 'role' as const, value: 'Sort by: Summary', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showSummaryColumnActions: { strategy: 'role' as const, value: 'Show Summary column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1081', actionKind: 'button' as const },
    summaryColumnWidth: { strategy: 'role' as const, value: 'Summary column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
    sortByKeyTask: { strategy: 'role' as const, value: 'Sort by: Key Task Type', role: 'button', shadowHost: 'lightning-primitive-header-factory', actionKind: 'link' as const },
    showKeyTaskType: { strategy: 'role' as const, value: 'Show Key Task Type column actions', role: 'button', shadowHost: '#primitive-header-action-button-menu-id-1087', actionKind: 'button' as const },
    keyTaskTypeColumn: { strategy: 'role' as const, value: 'Key Task Type column width', role: 'textbox', shadowHost: 'lightning-primitive-resize-handler', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickStageCompletePlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs, soft);
  }

  async clickStageCompleteReadyToStaff(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff));
  }

  async expectStageCompleteReadyToStaffVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs, soft);
  }

  async clickStageCompleteInProgress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs, soft);
  }

  async clickProjectSurvey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey));
  }

  async expectProjectSurveyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs, soft);
  }

  async clickTeamMembership(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.teamMembership));
  }

  async expectTeamMembershipVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs, soft);
  }

  async clickHealthAndCommu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu));
  }

  async expectHealthAndCommuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs, soft);
  }

  async clickHealthAndCommuLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs, soft);
  }

  async getInnerTextProjectTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks));
  }

  async expectProjectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs, soft);
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs, soft);
  }

  async clickMassChangeOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner));
  }

  async doubleClickMassChangeOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs, soft);
  }

  async clickAddProjectTasksFrom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom));
  }

  async doubleClickAddProjectTasksFrom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom));
  }

  async expectAddProjectTasksFromVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs, soft);
  }

  async clickGenerateResourceRequests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests));
  }

  async doubleClickGenerateResourceRequests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests));
  }

  async expectGenerateResourceRequestsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs, soft);
  }

  async clickGenerateHeldResourceRequests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests));
  }

  async doubleClickGenerateHeldResourceRequests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests));
  }

  async expectGenerateHeldResourceRequestsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs, soft);
  }

  async clickShowActionsForProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject));
  }

  async doubleClickShowActionsForProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject));
  }

  async expectShowActionsForProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs, soft);
  }

  async getInnerTextItemsUpdated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated));
  }

  async expectItemsUpdatedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs, soft);
  }

  async getInnerTextItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.items));
  }

  async expectItemsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs, soft);
  }

  async getInnerTextUpdatedAFewSeconds(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds));
  }

  async expectUpdatedAFewSecondsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs, soft);
  }

  async clickMultiColumnSortButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton));
  }

  async doubleClickMultiColumnSortButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs, soft);
  }

  async clickShowQuickFilters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters));
  }

  async doubleClickShowQuickFilters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters));
  }

  async expectShowQuickFiltersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs, soft);
  }

  async checkLgtDatatable18Options(): Promise<void> {
    await checkWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options));
  }

  async uncheckLgtDatatable18Options(): Promise<void> {
    await uncheckWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options));
  }

  async isLgtDatatable18OptionsChecked(): Promise<boolean> {
    return webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options).isChecked();
  }

  async expectLgtDatatable18OptionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs, soft);
  }

  async expectLgtDatatable18OptionsChecked(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs, soft);
  }

  async clickSortByProjectTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask));
  }

  async expectSortByProjectTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs, soft);
  }

  async clickShowProjectTaskName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName));
  }

  async doubleClickShowProjectTaskName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName));
  }

  async expectShowProjectTaskNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs, soft);
  }

  async clickProjectTaskNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn));
  }

  async expectProjectTaskNameColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs, soft);
  }

  async clickSortByMilestone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone));
  }

  async expectSortByMilestoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs, soft);
  }

  async clickShowMilestoneColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions));
  }

  async doubleClickShowMilestoneColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions));
  }

  async expectShowMilestoneColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs, soft);
  }

  async clickMilestoneColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth));
  }

  async expectMilestoneColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs, soft);
  }

  async clickSortByParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask));
  }

  async expectSortByParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs, soft);
  }

  async clickShowParentTaskColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn));
  }

  async doubleClickShowParentTaskColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn));
  }

  async expectShowParentTaskColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs, soft);
  }

  async clickParentTaskColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth));
  }

  async expectParentTaskColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs, soft);
  }

  async clickSortByDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription));
  }

  async expectSortByDescriptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs, soft);
  }

  async clickShowDescriptionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions));
  }

  async doubleClickShowDescriptionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions));
  }

  async expectShowDescriptionColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs, soft);
  }

  async clickDescriptionColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth));
  }

  async expectDescriptionColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs, soft);
  }

  async clickSortByStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus));
  }

  async expectSortByStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs, soft);
  }

  async clickShowStatusColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions));
  }

  async doubleClickShowStatusColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs, soft);
  }

  async clickSortByStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate));
  }

  async expectSortByStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs, soft);
  }

  async clickShowStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStartDate));
  }

  async doubleClickShowStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStartDate));
  }

  async expectShowStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs, soft);
  }

  async clickStartDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.startDateTime));
  }

  async expectStartDateTimeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs, soft);
  }

  async clickSortByEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate));
  }

  async expectSortByEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs, soft);
  }

  async clickShowEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showEndDate));
  }

  async doubleClickShowEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showEndDate));
  }

  async expectShowEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs, soft);
  }

  async clickEndDateTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.endDateTime));
  }

  async expectEndDateTimeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs, soft);
  }

  async clickSortBySummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary));
  }

  async expectSortBySummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs, soft);
  }

  async clickShowSummaryColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions));
  }

  async doubleClickShowSummaryColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions));
  }

  async expectShowSummaryColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs, soft);
  }

  async clickSummaryColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth));
  }

  async expectSummaryColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs, soft);
  }

  async clickSortByKeyTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask));
  }

  async expectSortByKeyTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs, soft);
  }

  async clickShowKeyTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType));
  }

  async doubleClickShowKeyTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType));
  }

  async expectShowKeyTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs, soft);
  }

  async clickKeyTaskTypeColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn));
  }

  async expectKeyTaskTypeColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'Project Tasks | Salesforce', timeoutMs);
  }


  async doubleClickStageCompletePlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned));
  }

  async longPressStageCompletePlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned));
  }

  async expectStageCompletePlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), expected, timeoutMs);
  }

  async expectStageCompletePlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), substring, timeoutMs);
  }

  async expectStageCompletePlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), value, timeoutMs);
  }

  async expectStageCompletePlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), timeoutMs);
  }

  async expectStageCompletePlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned), count, timeoutMs);
  }

  async scrollStageCompletePlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompletePlanned));
  }

  async doubleClickStageCompleteReadyToStaff(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff));
  }

  async longPressStageCompleteReadyToStaff(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff));
  }

  async expectStageCompleteReadyToStaffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), expected, timeoutMs);
  }

  async expectStageCompleteReadyToStaffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), substring, timeoutMs);
  }

  async expectStageCompleteReadyToStaffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), value, timeoutMs);
  }

  async expectStageCompleteReadyToStaffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), timeoutMs);
  }

  async expectStageCompleteReadyToStaffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff), count, timeoutMs);
  }

  async scrollStageCompleteReadyToStaffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteReadyToStaff));
  }

  async doubleClickStageCompleteInProgress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress));
  }

  async longPressStageCompleteInProgress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress));
  }

  async expectStageCompleteInProgressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), expected, timeoutMs);
  }

  async expectStageCompleteInProgressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), substring, timeoutMs);
  }

  async expectStageCompleteInProgressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), value, timeoutMs);
  }

  async expectStageCompleteInProgressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), timeoutMs);
  }

  async expectStageCompleteInProgressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress), count, timeoutMs);
  }

  async scrollStageCompleteInProgressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.stageCompleteInProgress));
  }

  async doubleClickProjectSurvey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey));
  }

  async longPressProjectSurvey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey));
  }

  async expectProjectSurveyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), expected, timeoutMs);
  }

  async expectProjectSurveyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), substring, timeoutMs);
  }

  async expectProjectSurveyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), value, timeoutMs);
  }

  async expectProjectSurveyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), timeoutMs);
  }

  async expectProjectSurveyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey), count, timeoutMs);
  }

  async scrollProjectSurveyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectSurvey));
  }

  async doubleClickTeamMembership(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.teamMembership));
  }

  async longPressTeamMembership(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.teamMembership));
  }

  async expectTeamMembershipHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), expected, timeoutMs);
  }

  async expectTeamMembershipContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), substring, timeoutMs);
  }

  async expectTeamMembershipValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), value, timeoutMs);
  }

  async expectTeamMembershipEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), timeoutMs);
  }

  async expectTeamMembershipCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.teamMembership), count, timeoutMs);
  }

  async scrollTeamMembershipIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.teamMembership));
  }

  async doubleClickHealthAndCommu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu));
  }

  async longPressHealthAndCommu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu));
  }

  async expectHealthAndCommuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), expected, timeoutMs);
  }

  async expectHealthAndCommuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), substring, timeoutMs);
  }

  async expectHealthAndCommuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), value, timeoutMs);
  }

  async expectHealthAndCommuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), timeoutMs);
  }

  async expectHealthAndCommuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu), count, timeoutMs);
  }

  async scrollHealthAndCommuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommu));
  }

  async doubleClickHealthAndCommuLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink));
  }

  async longPressHealthAndCommuLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), expected, timeoutMs);
  }

  async expectHealthAndCommuLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), substring, timeoutMs);
  }

  async expectHealthAndCommuLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), value, timeoutMs);
  }

  async expectHealthAndCommuLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink), count, timeoutMs);
  }

  async scrollHealthAndCommuLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.healthAndCommuLink));
  }

  async clickProjectTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks));
  }

  async doubleClickProjectTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks));
  }

  async longPressProjectTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks));
  }

  async expectProjectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), expected, timeoutMs);
  }

  async expectProjectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), substring, timeoutMs);
  }

  async expectProjectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), value, timeoutMs);
  }

  async expectProjectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.projectTasks), count, timeoutMs);
  }

  async scrollProjectTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTasks));
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.new));
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.new), substring, timeoutMs);
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.new), count, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.new));
  }

  async longPressMassChangeOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner));
  }

  async expectMassChangeOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), expected, timeoutMs);
  }

  async expectMassChangeOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), substring, timeoutMs);
  }

  async expectMassChangeOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), value, timeoutMs);
  }

  async expectMassChangeOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), timeoutMs);
  }

  async expectMassChangeOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner), count, timeoutMs);
  }

  async scrollMassChangeOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.massChangeOwner));
  }

  async longPressAddProjectTasksFrom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom));
  }

  async expectAddProjectTasksFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), expected, timeoutMs);
  }

  async expectAddProjectTasksFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), substring, timeoutMs);
  }

  async expectAddProjectTasksFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), value, timeoutMs);
  }

  async expectAddProjectTasksFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), timeoutMs);
  }

  async expectAddProjectTasksFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom), count, timeoutMs);
  }

  async scrollAddProjectTasksFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.addProjectTasksFrom));
  }

  async longPressGenerateResourceRequests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests));
  }

  async expectGenerateResourceRequestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), expected, timeoutMs);
  }

  async expectGenerateResourceRequestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), substring, timeoutMs);
  }

  async expectGenerateResourceRequestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), value, timeoutMs);
  }

  async expectGenerateResourceRequestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), timeoutMs);
  }

  async expectGenerateResourceRequestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests), count, timeoutMs);
  }

  async scrollGenerateResourceRequestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateResourceRequests));
  }

  async longPressGenerateHeldResourceRequests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests));
  }

  async expectGenerateHeldResourceRequestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), expected, timeoutMs);
  }

  async expectGenerateHeldResourceRequestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), substring, timeoutMs);
  }

  async expectGenerateHeldResourceRequestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), value, timeoutMs);
  }

  async expectGenerateHeldResourceRequestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), timeoutMs);
  }

  async expectGenerateHeldResourceRequestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests), count, timeoutMs);
  }

  async scrollGenerateHeldResourceRequestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.generateHeldResourceRequests));
  }

  async longPressShowActionsForProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject));
  }

  async expectShowActionsForProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), expected, timeoutMs);
  }

  async expectShowActionsForProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), substring, timeoutMs);
  }

  async expectShowActionsForProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), value, timeoutMs);
  }

  async expectShowActionsForProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), timeoutMs);
  }

  async expectShowActionsForProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject), count, timeoutMs);
  }

  async scrollShowActionsForProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showActionsForProject));
  }

  async clickItemsUpdated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated));
  }

  async doubleClickItemsUpdated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated));
  }

  async longPressItemsUpdated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated));
  }

  async expectItemsUpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), expected, timeoutMs);
  }

  async expectItemsUpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), substring, timeoutMs);
  }

  async expectItemsUpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), value, timeoutMs);
  }

  async expectItemsUpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated), count, timeoutMs);
  }

  async scrollItemsUpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.itemsUpdated));
  }

  async clickItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.items));
  }

  async doubleClickItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.items));
  }

  async longPressItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.items));
  }

  async expectItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.items), expected, timeoutMs);
  }

  async expectItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.items), substring, timeoutMs);
  }

  async expectItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.items), value, timeoutMs);
  }

  async expectItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.items), timeoutMs);
  }

  async expectItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.items), count, timeoutMs);
  }

  async scrollItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.items));
  }

  async clickUpdatedAFewSeconds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds));
  }

  async doubleClickUpdatedAFewSeconds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds));
  }

  async longPressUpdatedAFewSeconds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds));
  }

  async expectUpdatedAFewSecondsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), expected, timeoutMs);
  }

  async expectUpdatedAFewSecondsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), substring, timeoutMs);
  }

  async expectUpdatedAFewSecondsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), value, timeoutMs);
  }

  async expectUpdatedAFewSecondsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds), count, timeoutMs);
  }

  async scrollUpdatedAFewSecondsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.updatedAFewSeconds));
  }

  async longPressMultiColumnSortButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), expected, timeoutMs);
  }

  async expectMultiColumnSortButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), substring, timeoutMs);
  }

  async expectMultiColumnSortButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), value, timeoutMs);
  }

  async expectMultiColumnSortButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton), count, timeoutMs);
  }

  async scrollMultiColumnSortButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.multiColumnSortButton));
  }

  async longPressShowQuickFilters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters));
  }

  async expectShowQuickFiltersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), expected, timeoutMs);
  }

  async expectShowQuickFiltersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), substring, timeoutMs);
  }

  async expectShowQuickFiltersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), value, timeoutMs);
  }

  async expectShowQuickFiltersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), timeoutMs);
  }

  async expectShowQuickFiltersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters), count, timeoutMs);
  }

  async scrollShowQuickFiltersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showQuickFilters));
  }

  async expectLgtDatatable18OptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs);
  }

  async expectLgtDatatable18OptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), expected, timeoutMs);
  }

  async expectLgtDatatable18OptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), substring, timeoutMs);
  }

  async expectLgtDatatable18OptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), value, timeoutMs);
  }

  async expectLgtDatatable18OptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs);
  }

  async expectLgtDatatable18OptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs);
  }

  async expectLgtDatatable18OptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs);
  }

  async expectLgtDatatable18OptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), timeoutMs);
  }

  async expectLgtDatatable18OptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options), count, timeoutMs);
  }

  async scrollLgtDatatable18OptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.lgtDatatable18Options));
  }

  async doubleClickSortByProjectTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask));
  }

  async longPressSortByProjectTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask));
  }

  async expectSortByProjectTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), expected, timeoutMs);
  }

  async expectSortByProjectTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), substring, timeoutMs);
  }

  async expectSortByProjectTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), value, timeoutMs);
  }

  async expectSortByProjectTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), timeoutMs);
  }

  async expectSortByProjectTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask), count, timeoutMs);
  }

  async scrollSortByProjectTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByProjectTask));
  }

  async longPressShowProjectTaskName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName));
  }

  async expectShowProjectTaskNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), expected, timeoutMs);
  }

  async expectShowProjectTaskNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), substring, timeoutMs);
  }

  async expectShowProjectTaskNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), value, timeoutMs);
  }

  async expectShowProjectTaskNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), timeoutMs);
  }

  async expectShowProjectTaskNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName), count, timeoutMs);
  }

  async scrollShowProjectTaskNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showProjectTaskName));
  }

  async doubleClickProjectTaskNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn));
  }

  async longPressProjectTaskNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn));
  }

  async expectProjectTaskNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), expected, timeoutMs);
  }

  async expectProjectTaskNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), substring, timeoutMs);
  }

  async expectProjectTaskNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), value, timeoutMs);
  }

  async expectProjectTaskNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), timeoutMs);
  }

  async expectProjectTaskNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn), count, timeoutMs);
  }

  async scrollProjectTaskNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.projectTaskNameColumn));
  }

  async doubleClickSortByMilestone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone));
  }

  async longPressSortByMilestone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone));
  }

  async expectSortByMilestoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), expected, timeoutMs);
  }

  async expectSortByMilestoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), substring, timeoutMs);
  }

  async expectSortByMilestoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), value, timeoutMs);
  }

  async expectSortByMilestoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), timeoutMs);
  }

  async expectSortByMilestoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone), count, timeoutMs);
  }

  async scrollSortByMilestoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByMilestone));
  }

  async longPressShowMilestoneColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions));
  }

  async expectShowMilestoneColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), expected, timeoutMs);
  }

  async expectShowMilestoneColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), substring, timeoutMs);
  }

  async expectShowMilestoneColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), value, timeoutMs);
  }

  async expectShowMilestoneColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), timeoutMs);
  }

  async expectShowMilestoneColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions), count, timeoutMs);
  }

  async scrollShowMilestoneColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showMilestoneColumnActions));
  }

  async doubleClickMilestoneColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth));
  }

  async longPressMilestoneColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth));
  }

  async expectMilestoneColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), expected, timeoutMs);
  }

  async expectMilestoneColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), substring, timeoutMs);
  }

  async expectMilestoneColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), value, timeoutMs);
  }

  async expectMilestoneColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), timeoutMs);
  }

  async expectMilestoneColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth), count, timeoutMs);
  }

  async scrollMilestoneColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.milestoneColumnWidth));
  }

  async doubleClickSortByParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask));
  }

  async longPressSortByParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask));
  }

  async expectSortByParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), expected, timeoutMs);
  }

  async expectSortByParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), substring, timeoutMs);
  }

  async expectSortByParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), value, timeoutMs);
  }

  async expectSortByParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), timeoutMs);
  }

  async expectSortByParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask), count, timeoutMs);
  }

  async scrollSortByParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByParentTask));
  }

  async longPressShowParentTaskColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn));
  }

  async expectShowParentTaskColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), expected, timeoutMs);
  }

  async expectShowParentTaskColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), substring, timeoutMs);
  }

  async expectShowParentTaskColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), value, timeoutMs);
  }

  async expectShowParentTaskColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), timeoutMs);
  }

  async expectShowParentTaskColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn), count, timeoutMs);
  }

  async scrollShowParentTaskColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showParentTaskColumn));
  }

  async doubleClickParentTaskColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth));
  }

  async longPressParentTaskColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth));
  }

  async expectParentTaskColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), expected, timeoutMs);
  }

  async expectParentTaskColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), substring, timeoutMs);
  }

  async expectParentTaskColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), value, timeoutMs);
  }

  async expectParentTaskColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), timeoutMs);
  }

  async expectParentTaskColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth), count, timeoutMs);
  }

  async scrollParentTaskColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.parentTaskColumnWidth));
  }

  async doubleClickSortByDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription));
  }

  async longPressSortByDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription));
  }

  async expectSortByDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), expected, timeoutMs);
  }

  async expectSortByDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), substring, timeoutMs);
  }

  async expectSortByDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), value, timeoutMs);
  }

  async expectSortByDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), timeoutMs);
  }

  async expectSortByDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription), count, timeoutMs);
  }

  async scrollSortByDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByDescription));
  }

  async longPressShowDescriptionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions));
  }

  async expectShowDescriptionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), expected, timeoutMs);
  }

  async expectShowDescriptionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), substring, timeoutMs);
  }

  async expectShowDescriptionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), value, timeoutMs);
  }

  async expectShowDescriptionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), timeoutMs);
  }

  async expectShowDescriptionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions), count, timeoutMs);
  }

  async scrollShowDescriptionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showDescriptionColumnActions));
  }

  async doubleClickDescriptionColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth));
  }

  async longPressDescriptionColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth));
  }

  async expectDescriptionColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), expected, timeoutMs);
  }

  async expectDescriptionColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), substring, timeoutMs);
  }

  async expectDescriptionColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), value, timeoutMs);
  }

  async expectDescriptionColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), timeoutMs);
  }

  async expectDescriptionColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth), count, timeoutMs);
  }

  async scrollDescriptionColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.descriptionColumnWidth));
  }

  async doubleClickSortByStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus));
  }

  async longPressSortByStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus));
  }

  async expectSortByStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), expected, timeoutMs);
  }

  async expectSortByStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), substring, timeoutMs);
  }

  async expectSortByStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), value, timeoutMs);
  }

  async expectSortByStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), timeoutMs);
  }

  async expectSortByStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus), count, timeoutMs);
  }

  async scrollSortByStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStatus));
  }

  async longPressShowStatusColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), expected, timeoutMs);
  }

  async expectShowStatusColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), substring, timeoutMs);
  }

  async expectShowStatusColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), value, timeoutMs);
  }

  async expectShowStatusColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions), count, timeoutMs);
  }

  async scrollShowStatusColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStatusColumnActions));
  }

  async doubleClickSortByStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate));
  }

  async longPressSortByStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate));
  }

  async expectSortByStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), expected, timeoutMs);
  }

  async expectSortByStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), substring, timeoutMs);
  }

  async expectSortByStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), value, timeoutMs);
  }

  async expectSortByStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), timeoutMs);
  }

  async expectSortByStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate), count, timeoutMs);
  }

  async scrollSortByStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByStartDate));
  }

  async longPressShowStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStartDate));
  }

  async expectShowStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), expected, timeoutMs);
  }

  async expectShowStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), substring, timeoutMs);
  }

  async expectShowStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), value, timeoutMs);
  }

  async expectShowStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), timeoutMs);
  }

  async expectShowStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showStartDate), count, timeoutMs);
  }

  async scrollShowStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showStartDate));
  }

  async doubleClickStartDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.startDateTime));
  }

  async longPressStartDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.startDateTime));
  }

  async expectStartDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), expected, timeoutMs);
  }

  async expectStartDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), substring, timeoutMs);
  }

  async expectStartDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), value, timeoutMs);
  }

  async expectStartDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), timeoutMs);
  }

  async expectStartDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.startDateTime), count, timeoutMs);
  }

  async scrollStartDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.startDateTime));
  }

  async doubleClickSortByEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate));
  }

  async longPressSortByEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate));
  }

  async expectSortByEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), expected, timeoutMs);
  }

  async expectSortByEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), substring, timeoutMs);
  }

  async expectSortByEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), value, timeoutMs);
  }

  async expectSortByEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), timeoutMs);
  }

  async expectSortByEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate), count, timeoutMs);
  }

  async scrollSortByEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByEndDate));
  }

  async longPressShowEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showEndDate));
  }

  async expectShowEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), expected, timeoutMs);
  }

  async expectShowEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), substring, timeoutMs);
  }

  async expectShowEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), value, timeoutMs);
  }

  async expectShowEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), timeoutMs);
  }

  async expectShowEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showEndDate), count, timeoutMs);
  }

  async scrollShowEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showEndDate));
  }

  async doubleClickEndDateTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.endDateTime));
  }

  async longPressEndDateTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.endDateTime));
  }

  async expectEndDateTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), expected, timeoutMs);
  }

  async expectEndDateTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), substring, timeoutMs);
  }

  async expectEndDateTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), value, timeoutMs);
  }

  async expectEndDateTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), timeoutMs);
  }

  async expectEndDateTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.endDateTime), count, timeoutMs);
  }

  async scrollEndDateTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.endDateTime));
  }

  async doubleClickSortBySummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary));
  }

  async longPressSortBySummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary));
  }

  async expectSortBySummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), expected, timeoutMs);
  }

  async expectSortBySummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), substring, timeoutMs);
  }

  async expectSortBySummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), value, timeoutMs);
  }

  async expectSortBySummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), timeoutMs);
  }

  async expectSortBySummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary), count, timeoutMs);
  }

  async scrollSortBySummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortBySummary));
  }

  async longPressShowSummaryColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions));
  }

  async expectShowSummaryColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), expected, timeoutMs);
  }

  async expectShowSummaryColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), substring, timeoutMs);
  }

  async expectShowSummaryColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), value, timeoutMs);
  }

  async expectShowSummaryColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), timeoutMs);
  }

  async expectShowSummaryColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions), count, timeoutMs);
  }

  async scrollShowSummaryColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showSummaryColumnActions));
  }

  async doubleClickSummaryColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth));
  }

  async longPressSummaryColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth));
  }

  async expectSummaryColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), expected, timeoutMs);
  }

  async expectSummaryColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), substring, timeoutMs);
  }

  async expectSummaryColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), value, timeoutMs);
  }

  async expectSummaryColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), timeoutMs);
  }

  async expectSummaryColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth), count, timeoutMs);
  }

  async scrollSummaryColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.summaryColumnWidth));
  }

  async doubleClickSortByKeyTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask));
  }

  async longPressSortByKeyTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask));
  }

  async expectSortByKeyTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), expected, timeoutMs);
  }

  async expectSortByKeyTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), substring, timeoutMs);
  }

  async expectSortByKeyTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), value, timeoutMs);
  }

  async expectSortByKeyTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), timeoutMs);
  }

  async expectSortByKeyTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask), count, timeoutMs);
  }

  async scrollSortByKeyTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.sortByKeyTask));
  }

  async longPressShowKeyTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType));
  }

  async expectShowKeyTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), expected, timeoutMs);
  }

  async expectShowKeyTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), substring, timeoutMs);
  }

  async expectShowKeyTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), value, timeoutMs);
  }

  async expectShowKeyTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), timeoutMs);
  }

  async expectShowKeyTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType), count, timeoutMs);
  }

  async scrollShowKeyTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.showKeyTaskType));
  }

  async doubleClickKeyTaskTypeColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn));
  }

  async longPressKeyTaskTypeColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn));
  }

  async expectKeyTaskTypeColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), expected, timeoutMs);
  }

  async expectKeyTaskTypeColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), substring, timeoutMs);
  }

  async expectKeyTaskTypeColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), value, timeoutMs);
  }

  async expectKeyTaskTypeColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), timeoutMs);
  }

  async expectKeyTaskTypeColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn), count, timeoutMs);
  }

  async scrollKeyTaskTypeColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCrelatedPage.L.keyTaskTypeColumn));
  }

}
