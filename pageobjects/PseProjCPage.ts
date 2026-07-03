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

export class PseProjCPage {
  private static readonly L = {
    projectPerrySRestaurants: { strategy: 'text' as const, value: 'Project Perry\'s Restaurants, - Q-453446 - Ready', shadowHost: 'records-highlights2', actionKind: 'text' as const },
    edit: { strategy: 'role' as const, value: 'Edit', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    delete: { strategy: 'role' as const, value: 'Delete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    projectPlanner: { strategy: 'role' as const, value: 'Project Planner', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    shareProject: { strategy: 'role' as const, value: 'Share Project', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    share: { strategy: 'role' as const, value: 'Sharing', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    showMoreActions: { strategy: 'role' as const, value: 'Show more actions', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    account: { strategy: 'text' as const, value: 'Account', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    projectManager: { strategy: 'text' as const, value: 'Project Manager', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    bookings: { strategy: 'text' as const, value: 'Bookings', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    billings: { strategy: 'text' as const, value: 'Billings', shadowHost: 'records-highlights-details-item', actionKind: 'text' as const },
    projectHistory4: { strategy: 'role' as const, value: 'Project History (4)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    teams1: { strategy: 'role' as const, value: 'Teams (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    resourceRequests8: { strategy: 'role' as const, value: 'Resource Requests (8)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    assignments1: { strategy: 'role' as const, value: 'Assignments (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgetAllocations1: { strategy: 'role' as const, value: 'Budget Allocations (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    timecards0: { strategy: 'role' as const, value: 'Timecards (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    timecardSplits0: { strategy: 'role' as const, value: 'Timecard Splits (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenseReports0: { strategy: 'role' as const, value: 'Expense Reports (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenses0: { strategy: 'role' as const, value: 'Expenses (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    milestones10: { strategy: 'role' as const, value: 'Milestones (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgets1: { strategy: 'role' as const, value: 'Budgets (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    miscellaneousAdjustments0: { strategy: 'role' as const, value: 'Miscellaneous Adjustments (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showAll35: { strategy: 'role' as const, value: 'Show All (35)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    planned: { strategy: 'text' as const, value: 'Planned', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    readyToStaff: { strategy: 'text' as const, value: 'Ready to Staff', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    inProgress: { strategy: 'text' as const, value: 'In Progress', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    onHold: { strategy: 'text' as const, value: 'On Hold', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    completed: { strategy: 'text' as const, value: 'Completed', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    canceled: { strategy: 'text' as const, value: 'Canceled', shadowHost: 'flexipage-aura-wrapper', actionKind: 'generic' as const },
    markStageAsComplete: { strategy: 'role' as const, value: '', role: 'button', shadowHost: 'flexipage-aura-wrapper', actionKind: 'button' as const },
    overviewTab: { strategy: 'css' as const, value: '[title="Overview"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    projectPlanTab: { strategy: 'css' as const, value: '[title="Project Plan"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    ganttTab: { strategy: 'css' as const, value: '[title="Gantt"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    resourcePlanTab: { strategy: 'css' as const, value: '[title="Resource Plan"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    financialsTab: { strategy: 'css' as const, value: '[title="Financials"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    raidTrackerTab: { strategy: 'css' as const, value: '[title="RAID Tracker"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    moreTabsButton: { strategy: 'role' as const, value: 'More Tabs', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    projectPhases0: { strategy: 'role' as const, value: 'Project Phases (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectMethodologies0: { strategy: 'role' as const, value: 'Project Methodologies (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectLocations0: { strategy: 'role' as const, value: 'Project Locations (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectActuals4: { strategy: 'role' as const, value: 'Project Actuals (4)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    transactionLog10: { strategy: 'role' as const, value: 'Transaction Log (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    billingEvents1: { strategy: 'role' as const, value: 'Billing Events (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    billingEventItems1Link: { strategy: 'role' as const, value: 'Billing Event Items (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    permissionControls1: { strategy: 'role' as const, value: 'Permission Controls (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    immediateSubProjects0: { strategy: 'role' as const, value: 'Immediate Sub-Projects (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    masterProjectForSubProjectsLink: { strategy: 'role' as const, value: 'Master Project For Sub-Projects: (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    expenseLimitsRatesLink: { strategy: 'role' as const, value: 'Expense Limits / Rates (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    budgetHeaders0: { strategy: 'role' as const, value: 'Budget Headers (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    estVsActuals10Link: { strategy: 'role' as const, value: 'Est Vs Actuals (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    backlogCalculations0: { strategy: 'role' as const, value: 'Backlog Calculations (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    backlogDetails0: { strategy: 'role' as const, value: 'Backlog Details (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasks10: { strategy: 'role' as const, value: 'Project Tasks (10+)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    revenueForecasts0: { strategy: 'role' as const, value: 'Revenue Forecasts (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    costForecasts0: { strategy: 'role' as const, value: 'Cost Forecasts (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    revenueForecastBatchLogsLink: { strategy: 'role' as const, value: 'Revenue Forecast Batch Logs (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectSources5: { strategy: 'role' as const, value: 'Project Sources (5)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectServicesDeliverables0Link: { strategy: 'role' as const, value: 'Project Services Deliverables (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectServicesDeliverableItemsLink: { strategy: 'role' as const, value: 'Project Services Deliverable Items (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    managedVersions0: { strategy: 'role' as const, value: 'Managed Versions (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showLess: { strategy: 'role' as const, value: 'Show Less', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextProjectPerrySRestaurants(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants));
  }

  async expectProjectPerrySRestaurantsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs, soft);
  }

  async clickEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async doubleClickEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async expectEditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.edit), timeoutMs, soft);
  }

  async clickDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async doubleClickDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async expectDeleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.delete), timeoutMs, soft);
  }

  async clickProjectPlanner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async doubleClickProjectPlanner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async expectProjectPlannerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs, soft);
  }

  async clickShareProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async doubleClickShareProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async expectShareProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs, soft);
  }

  async clickShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async doubleClickShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async expectShareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.share), timeoutMs, soft);
  }

  async clickShowMoreActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async doubleClickShowMoreActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async expectShowMoreActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs, soft);
  }

  async getInnerTextAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.account));
  }

  async expectAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.account), timeoutMs, soft);
  }

  async getInnerTextProjectManager(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async expectProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs, soft);
  }

  async getInnerTextBookings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async expectBookingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs, soft);
  }

  async getInnerTextBillings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billings), timeoutMs, soft);
  }

  async clickProjectHistory4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory4));
  }

  async expectProjectHistory4Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs, soft);
  }

  async clickTeams1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async expectTeams1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs, soft);
  }

  async clickResourceRequests8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests8));
  }

  async expectResourceRequests8Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs, soft);
  }

  async clickAssignments1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments1));
  }

  async expectAssignments1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs, soft);
  }

  async clickBudgetAllocations1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations1));
  }

  async expectBudgetAllocations1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs, soft);
  }

  async clickTimecards0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async expectTimecards0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs, soft);
  }

  async clickTimecardSplits0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async expectTimecardSplits0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs, soft);
  }

  async clickExpenseReports0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async expectExpenseReports0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs, soft);
  }

  async clickExpenses0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async expectExpenses0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs, soft);
  }

  async clickMilestones10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones10));
  }

  async expectMilestones10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs, soft);
  }

  async clickBudgets1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async expectBudgets1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs, soft);
  }

  async clickMiscellaneousAdjustments0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async expectMiscellaneousAdjustments0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs, soft);
  }

  async clickShowAll35(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async expectShowAll35Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs, soft);
  }

  async clickPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async expectPlannedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.planned), timeoutMs, soft);
  }

  async clickReadyToStaff(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async expectReadyToStaffVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs, soft);
  }

  async clickInProgress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async expectInProgressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs, soft);
  }

  async clickOnHold(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.onHold));
  }

  async expectOnHoldVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs, soft);
  }

  async clickCompleted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.completed));
  }

  async expectCompletedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.completed), timeoutMs, soft);
  }

  async clickCanceled(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.canceled));
  }

  async expectCanceledVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs, soft);
  }

  async clickMarkStageAsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async doubleClickMarkStageAsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async expectMarkStageAsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs, soft);
  }

  async clickOverviewTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async expectOverviewTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs, soft);
  }

  async clickProjectPlanTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async expectProjectPlanTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs, soft);
  }

  async clickGanttTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async expectGanttTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs, soft);
  }

  async clickResourcePlanTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async expectResourcePlanTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs, soft);
  }

  async clickFinancialsTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async expectFinancialsTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs, soft);
  }

  async clickRaidTrackerTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async expectRaidTrackerTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs, soft);
  }

  async clickMoreTabsButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async doubleClickMoreTabsButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async expectMoreTabsButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs, soft);
  }

  async clickProjectPhases0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async expectProjectPhases0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs, soft);
  }

  async clickProjectMethodologies0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async expectProjectMethodologies0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs, soft);
  }

  async clickProjectLocations0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async expectProjectLocations0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs, soft);
  }

  async clickProjectActuals4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals4));
  }

  async expectProjectActuals4Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs, soft);
  }

  async clickTransactionLog10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog10));
  }

  async expectTransactionLog10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs, soft);
  }

  async clickBillingEvents1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async expectBillingEvents1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs, soft);
  }

  async clickBillingEventItems1Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async expectBillingEventItems1LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs, soft);
  }

  async clickPermissionControls1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async expectPermissionControls1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs, soft);
  }

  async clickImmediateSubProjects0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async expectImmediateSubProjects0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs, soft);
  }

  async clickMasterProjectForSubProjectsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async expectMasterProjectForSubProjectsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs, soft);
  }

  async clickExpenseLimitsRatesLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async expectExpenseLimitsRatesLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs, soft);
  }

  async clickBudgetHeaders0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async expectBudgetHeaders0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs, soft);
  }

  async clickEstVsActuals10Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async expectEstVsActuals10LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs, soft);
  }

  async clickBacklogCalculations0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async expectBacklogCalculations0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs, soft);
  }

  async clickBacklogDetails0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async expectBacklogDetails0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs, soft);
  }

  async clickProjectTasks10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async expectProjectTasks10Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs, soft);
  }

  async clickRevenueForecasts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async expectRevenueForecasts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs, soft);
  }

  async clickCostForecasts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async expectCostForecasts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs, soft);
  }

  async clickRevenueForecastBatchLogsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async expectRevenueForecastBatchLogsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs, soft);
  }

  async clickProjectSources5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources5));
  }

  async expectProjectSources5Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs, soft);
  }

  async clickProjectServicesDeliverables0Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async expectProjectServicesDeliverables0LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs, soft);
  }

  async clickProjectServicesDeliverableItemsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async expectProjectServicesDeliverableItemsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs, soft);
  }

  async clickManagedVersions0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async expectManagedVersions0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs, soft);
  }

  async clickShowLess(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async expectShowLessVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs, soft);
  }


  async clickProjectPerrySRestaurants(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants));
  }

  async doubleClickProjectPerrySRestaurants(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants));
  }

  async longPressProjectPerrySRestaurants(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants));
  }

  async expectProjectPerrySRestaurantsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), expected, timeoutMs);
  }

  async expectProjectPerrySRestaurantsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), substring, timeoutMs);
  }

  async expectProjectPerrySRestaurantsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), value, timeoutMs);
  }

  async expectProjectPerrySRestaurantsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), timeoutMs);
  }

  async expectProjectPerrySRestaurantsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants), count, timeoutMs);
  }

  async scrollProjectPerrySRestaurantsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPerrySRestaurants));
  }

  async longPressEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async expectEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.edit), expected, timeoutMs);
  }

  async expectEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.edit), substring, timeoutMs);
  }

  async expectEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.edit), value, timeoutMs);
  }

  async expectEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.edit), timeoutMs);
  }

  async expectEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.edit), count, timeoutMs);
  }

  async scrollEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.edit));
  }

  async longPressDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async expectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.delete), expected, timeoutMs);
  }

  async expectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.delete), substring, timeoutMs);
  }

  async expectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.delete), value, timeoutMs);
  }

  async expectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.delete), timeoutMs);
  }

  async expectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.delete), count, timeoutMs);
  }

  async scrollDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.delete));
  }

  async longPressProjectPlanner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async expectProjectPlannerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPlanner), expected, timeoutMs);
  }

  async expectProjectPlannerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPlanner), substring, timeoutMs);
  }

  async expectProjectPlannerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPlanner), value, timeoutMs);
  }

  async expectProjectPlannerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPlanner), timeoutMs);
  }

  async expectProjectPlannerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPlanner), count, timeoutMs);
  }

  async scrollProjectPlannerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanner));
  }

  async longPressShareProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async expectShareProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.shareProject), expected, timeoutMs);
  }

  async expectShareProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.shareProject), substring, timeoutMs);
  }

  async expectShareProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.shareProject), value, timeoutMs);
  }

  async expectShareProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.shareProject), timeoutMs);
  }

  async expectShareProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.shareProject), count, timeoutMs);
  }

  async scrollShareProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.shareProject));
  }

  async longPressShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async expectShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.share), expected, timeoutMs);
  }

  async expectShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.share), substring, timeoutMs);
  }

  async expectShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.share), value, timeoutMs);
  }

  async expectShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.share), timeoutMs);
  }

  async expectShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.share), count, timeoutMs);
  }

  async scrollShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.share));
  }

  async longPressShowMoreActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async expectShowMoreActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showMoreActions), expected, timeoutMs);
  }

  async expectShowMoreActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showMoreActions), substring, timeoutMs);
  }

  async expectShowMoreActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showMoreActions), value, timeoutMs);
  }

  async expectShowMoreActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showMoreActions), timeoutMs);
  }

  async expectShowMoreActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showMoreActions), count, timeoutMs);
  }

  async scrollShowMoreActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showMoreActions));
  }

  async clickAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.account));
  }

  async doubleClickAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.account));
  }

  async longPressAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.account));
  }

  async expectAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.account), expected, timeoutMs);
  }

  async expectAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.account), substring, timeoutMs);
  }

  async expectAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.account), value, timeoutMs);
  }

  async expectAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.account), timeoutMs);
  }

  async expectAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.account), count, timeoutMs);
  }

  async scrollAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.account));
  }

  async clickProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async doubleClickProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async longPressProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async expectProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectManager), expected, timeoutMs);
  }

  async expectProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectManager), substring, timeoutMs);
  }

  async expectProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectManager), value, timeoutMs);
  }

  async expectProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectManager), timeoutMs);
  }

  async expectProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectManager), count, timeoutMs);
  }

  async scrollProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectManager));
  }

  async clickBookings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async doubleClickBookings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async longPressBookings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async expectBookingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.bookings), expected, timeoutMs);
  }

  async expectBookingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.bookings), substring, timeoutMs);
  }

  async expectBookingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.bookings), value, timeoutMs);
  }

  async expectBookingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.bookings), timeoutMs);
  }

  async expectBookingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.bookings), count, timeoutMs);
  }

  async scrollBookingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.bookings));
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billings), substring, timeoutMs);
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billings), count, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billings));
  }

  async doubleClickProjectHistory4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory4));
  }

  async longPressProjectHistory4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory4));
  }

  async expectProjectHistory4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectHistory4), expected, timeoutMs);
  }

  async expectProjectHistory4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectHistory4), substring, timeoutMs);
  }

  async expectProjectHistory4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectHistory4), value, timeoutMs);
  }

  async expectProjectHistory4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectHistory4), timeoutMs);
  }

  async expectProjectHistory4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectHistory4), count, timeoutMs);
  }

  async scrollProjectHistory4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectHistory4));
  }

  async doubleClickTeams1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async longPressTeams1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async expectTeams1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.teams1), expected, timeoutMs);
  }

  async expectTeams1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.teams1), substring, timeoutMs);
  }

  async expectTeams1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.teams1), value, timeoutMs);
  }

  async expectTeams1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.teams1), timeoutMs);
  }

  async expectTeams1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.teams1), count, timeoutMs);
  }

  async scrollTeams1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.teams1));
  }

  async doubleClickResourceRequests8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests8));
  }

  async longPressResourceRequests8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests8));
  }

  async expectResourceRequests8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.resourceRequests8), expected, timeoutMs);
  }

  async expectResourceRequests8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.resourceRequests8), substring, timeoutMs);
  }

  async expectResourceRequests8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.resourceRequests8), value, timeoutMs);
  }

  async expectResourceRequests8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.resourceRequests8), timeoutMs);
  }

  async expectResourceRequests8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.resourceRequests8), count, timeoutMs);
  }

  async scrollResourceRequests8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.resourceRequests8));
  }

  async doubleClickAssignments1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.assignments1));
  }

  async longPressAssignments1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.assignments1));
  }

  async expectAssignments1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.assignments1), expected, timeoutMs);
  }

  async expectAssignments1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.assignments1), substring, timeoutMs);
  }

  async expectAssignments1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.assignments1), value, timeoutMs);
  }

  async expectAssignments1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.assignments1), timeoutMs);
  }

  async expectAssignments1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.assignments1), count, timeoutMs);
  }

  async scrollAssignments1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.assignments1));
  }

  async doubleClickBudgetAllocations1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations1));
  }

  async longPressBudgetAllocations1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations1));
  }

  async expectBudgetAllocations1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetAllocations1), expected, timeoutMs);
  }

  async expectBudgetAllocations1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetAllocations1), substring, timeoutMs);
  }

  async expectBudgetAllocations1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetAllocations1), value, timeoutMs);
  }

  async expectBudgetAllocations1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetAllocations1), timeoutMs);
  }

  async expectBudgetAllocations1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetAllocations1), count, timeoutMs);
  }

  async scrollBudgetAllocations1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetAllocations1));
  }

  async doubleClickTimecards0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async longPressTimecards0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async expectTimecards0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecards0), expected, timeoutMs);
  }

  async expectTimecards0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecards0), substring, timeoutMs);
  }

  async expectTimecards0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecards0), value, timeoutMs);
  }

  async expectTimecards0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecards0), timeoutMs);
  }

  async expectTimecards0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecards0), count, timeoutMs);
  }

  async scrollTimecards0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecards0));
  }

  async doubleClickTimecardSplits0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async longPressTimecardSplits0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async expectTimecardSplits0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.timecardSplits0), expected, timeoutMs);
  }

  async expectTimecardSplits0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.timecardSplits0), substring, timeoutMs);
  }

  async expectTimecardSplits0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.timecardSplits0), value, timeoutMs);
  }

  async expectTimecardSplits0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.timecardSplits0), timeoutMs);
  }

  async expectTimecardSplits0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.timecardSplits0), count, timeoutMs);
  }

  async scrollTimecardSplits0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.timecardSplits0));
  }

  async doubleClickExpenseReports0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async longPressExpenseReports0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async expectExpenseReports0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseReports0), expected, timeoutMs);
  }

  async expectExpenseReports0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseReports0), substring, timeoutMs);
  }

  async expectExpenseReports0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseReports0), value, timeoutMs);
  }

  async expectExpenseReports0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseReports0), timeoutMs);
  }

  async expectExpenseReports0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseReports0), count, timeoutMs);
  }

  async scrollExpenseReports0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseReports0));
  }

  async doubleClickExpenses0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async longPressExpenses0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async expectExpenses0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenses0), expected, timeoutMs);
  }

  async expectExpenses0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenses0), substring, timeoutMs);
  }

  async expectExpenses0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenses0), value, timeoutMs);
  }

  async expectExpenses0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenses0), timeoutMs);
  }

  async expectExpenses0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenses0), count, timeoutMs);
  }

  async scrollExpenses0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenses0));
  }

  async doubleClickMilestones10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.milestones10));
  }

  async longPressMilestones10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.milestones10));
  }

  async expectMilestones10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.milestones10), expected, timeoutMs);
  }

  async expectMilestones10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.milestones10), substring, timeoutMs);
  }

  async expectMilestones10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.milestones10), value, timeoutMs);
  }

  async expectMilestones10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.milestones10), timeoutMs);
  }

  async expectMilestones10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.milestones10), count, timeoutMs);
  }

  async scrollMilestones10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.milestones10));
  }

  async doubleClickBudgets1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async longPressBudgets1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async expectBudgets1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgets1), expected, timeoutMs);
  }

  async expectBudgets1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgets1), substring, timeoutMs);
  }

  async expectBudgets1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgets1), value, timeoutMs);
  }

  async expectBudgets1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgets1), timeoutMs);
  }

  async expectBudgets1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgets1), count, timeoutMs);
  }

  async scrollBudgets1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgets1));
  }

  async doubleClickMiscellaneousAdjustments0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async longPressMiscellaneousAdjustments0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async expectMiscellaneousAdjustments0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), expected, timeoutMs);
  }

  async expectMiscellaneousAdjustments0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), substring, timeoutMs);
  }

  async expectMiscellaneousAdjustments0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), value, timeoutMs);
  }

  async expectMiscellaneousAdjustments0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), timeoutMs);
  }

  async expectMiscellaneousAdjustments0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0), count, timeoutMs);
  }

  async scrollMiscellaneousAdjustments0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.miscellaneousAdjustments0));
  }

  async doubleClickShowAll35(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async longPressShowAll35(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async expectShowAll35Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showAll35), expected, timeoutMs);
  }

  async expectShowAll35ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showAll35), substring, timeoutMs);
  }

  async expectShowAll35Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showAll35), value, timeoutMs);
  }

  async expectShowAll35Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showAll35), timeoutMs);
  }

  async expectShowAll35Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showAll35), count, timeoutMs);
  }

  async scrollShowAll35IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showAll35));
  }

  async doubleClickPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async longPressPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async expectPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.planned), expected, timeoutMs);
  }

  async expectPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.planned), substring, timeoutMs);
  }

  async expectPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.planned), value, timeoutMs);
  }

  async expectPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.planned), timeoutMs);
  }

  async expectPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.planned), count, timeoutMs);
  }

  async scrollPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.planned));
  }

  async doubleClickReadyToStaff(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async longPressReadyToStaff(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async expectReadyToStaffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.readyToStaff), expected, timeoutMs);
  }

  async expectReadyToStaffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.readyToStaff), substring, timeoutMs);
  }

  async expectReadyToStaffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.readyToStaff), value, timeoutMs);
  }

  async expectReadyToStaffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.readyToStaff), timeoutMs);
  }

  async expectReadyToStaffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.readyToStaff), count, timeoutMs);
  }

  async scrollReadyToStaffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.readyToStaff));
  }

  async doubleClickInProgress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async longPressInProgress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async expectInProgressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.inProgress), expected, timeoutMs);
  }

  async expectInProgressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.inProgress), substring, timeoutMs);
  }

  async expectInProgressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.inProgress), value, timeoutMs);
  }

  async expectInProgressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.inProgress), timeoutMs);
  }

  async expectInProgressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.inProgress), count, timeoutMs);
  }

  async scrollInProgressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.inProgress));
  }

  async doubleClickOnHold(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.onHold));
  }

  async longPressOnHold(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.onHold));
  }

  async expectOnHoldHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.onHold), expected, timeoutMs);
  }

  async expectOnHoldContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.onHold), substring, timeoutMs);
  }

  async expectOnHoldValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.onHold), value, timeoutMs);
  }

  async expectOnHoldEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.onHold), timeoutMs);
  }

  async expectOnHoldCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.onHold), count, timeoutMs);
  }

  async scrollOnHoldIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.onHold));
  }

  async doubleClickCompleted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.completed));
  }

  async longPressCompleted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.completed));
  }

  async expectCompletedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.completed), expected, timeoutMs);
  }

  async expectCompletedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.completed), substring, timeoutMs);
  }

  async expectCompletedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.completed), value, timeoutMs);
  }

  async expectCompletedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.completed), timeoutMs);
  }

  async expectCompletedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.completed), count, timeoutMs);
  }

  async scrollCompletedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.completed));
  }

  async doubleClickCanceled(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.canceled));
  }

  async longPressCanceled(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.canceled));
  }

  async expectCanceledHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.canceled), expected, timeoutMs);
  }

  async expectCanceledContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.canceled), substring, timeoutMs);
  }

  async expectCanceledValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.canceled), value, timeoutMs);
  }

  async expectCanceledEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.canceled), timeoutMs);
  }

  async expectCanceledCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.canceled), count, timeoutMs);
  }

  async scrollCanceledIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.canceled));
  }

  async longPressMarkStageAsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async expectMarkStageAsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.markStageAsComplete), expected, timeoutMs);
  }

  async expectMarkStageAsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.markStageAsComplete), substring, timeoutMs);
  }

  async expectMarkStageAsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.markStageAsComplete), value, timeoutMs);
  }

  async expectMarkStageAsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.markStageAsComplete), timeoutMs);
  }

  async expectMarkStageAsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.markStageAsComplete), count, timeoutMs);
  }

  async scrollMarkStageAsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.markStageAsComplete));
  }

  async doubleClickOverviewTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async longPressOverviewTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async expectOverviewTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.overviewTab), expected, timeoutMs);
  }

  async expectOverviewTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.overviewTab), substring, timeoutMs);
  }

  async expectOverviewTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.overviewTab), value, timeoutMs);
  }

  async expectOverviewTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.overviewTab), timeoutMs);
  }

  async expectOverviewTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.overviewTab), count, timeoutMs);
  }

  async scrollOverviewTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.overviewTab));
  }

  async doubleClickProjectPlanTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async longPressProjectPlanTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async expectProjectPlanTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPlanTab), expected, timeoutMs);
  }

  async expectProjectPlanTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPlanTab), substring, timeoutMs);
  }

  async expectProjectPlanTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPlanTab), value, timeoutMs);
  }

  async expectProjectPlanTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPlanTab), timeoutMs);
  }

  async expectProjectPlanTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPlanTab), count, timeoutMs);
  }

  async scrollProjectPlanTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPlanTab));
  }

  async doubleClickGanttTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async longPressGanttTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async expectGanttTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.ganttTab), expected, timeoutMs);
  }

  async expectGanttTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.ganttTab), substring, timeoutMs);
  }

  async expectGanttTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.ganttTab), value, timeoutMs);
  }

  async expectGanttTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.ganttTab), timeoutMs);
  }

  async expectGanttTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.ganttTab), count, timeoutMs);
  }

  async scrollGanttTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.ganttTab));
  }

  async doubleClickResourcePlanTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async longPressResourcePlanTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async expectResourcePlanTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.resourcePlanTab), expected, timeoutMs);
  }

  async expectResourcePlanTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.resourcePlanTab), substring, timeoutMs);
  }

  async expectResourcePlanTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.resourcePlanTab), value, timeoutMs);
  }

  async expectResourcePlanTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.resourcePlanTab), timeoutMs);
  }

  async expectResourcePlanTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.resourcePlanTab), count, timeoutMs);
  }

  async scrollResourcePlanTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.resourcePlanTab));
  }

  async doubleClickFinancialsTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async longPressFinancialsTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async expectFinancialsTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.financialsTab), expected, timeoutMs);
  }

  async expectFinancialsTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.financialsTab), substring, timeoutMs);
  }

  async expectFinancialsTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.financialsTab), value, timeoutMs);
  }

  async expectFinancialsTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.financialsTab), timeoutMs);
  }

  async expectFinancialsTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.financialsTab), count, timeoutMs);
  }

  async scrollFinancialsTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.financialsTab));
  }

  async doubleClickRaidTrackerTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async longPressRaidTrackerTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async expectRaidTrackerTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.raidTrackerTab), expected, timeoutMs);
  }

  async expectRaidTrackerTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.raidTrackerTab), substring, timeoutMs);
  }

  async expectRaidTrackerTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.raidTrackerTab), value, timeoutMs);
  }

  async expectRaidTrackerTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.raidTrackerTab), timeoutMs);
  }

  async expectRaidTrackerTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.raidTrackerTab), count, timeoutMs);
  }

  async scrollRaidTrackerTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.raidTrackerTab));
  }

  async longPressMoreTabsButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async expectMoreTabsButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.moreTabsButton), expected, timeoutMs);
  }

  async expectMoreTabsButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.moreTabsButton), substring, timeoutMs);
  }

  async expectMoreTabsButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.moreTabsButton), value, timeoutMs);
  }

  async expectMoreTabsButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.moreTabsButton), timeoutMs);
  }

  async expectMoreTabsButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.moreTabsButton), count, timeoutMs);
  }

  async scrollMoreTabsButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.moreTabsButton));
  }

  async doubleClickProjectPhases0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async longPressProjectPhases0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async expectProjectPhases0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectPhases0), expected, timeoutMs);
  }

  async expectProjectPhases0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectPhases0), substring, timeoutMs);
  }

  async expectProjectPhases0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectPhases0), value, timeoutMs);
  }

  async expectProjectPhases0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectPhases0), timeoutMs);
  }

  async expectProjectPhases0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectPhases0), count, timeoutMs);
  }

  async scrollProjectPhases0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectPhases0));
  }

  async doubleClickProjectMethodologies0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async longPressProjectMethodologies0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async expectProjectMethodologies0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectMethodologies0), expected, timeoutMs);
  }

  async expectProjectMethodologies0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectMethodologies0), substring, timeoutMs);
  }

  async expectProjectMethodologies0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectMethodologies0), value, timeoutMs);
  }

  async expectProjectMethodologies0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectMethodologies0), timeoutMs);
  }

  async expectProjectMethodologies0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectMethodologies0), count, timeoutMs);
  }

  async scrollProjectMethodologies0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectMethodologies0));
  }

  async doubleClickProjectLocations0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async longPressProjectLocations0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async expectProjectLocations0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectLocations0), expected, timeoutMs);
  }

  async expectProjectLocations0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectLocations0), substring, timeoutMs);
  }

  async expectProjectLocations0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectLocations0), value, timeoutMs);
  }

  async expectProjectLocations0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectLocations0), timeoutMs);
  }

  async expectProjectLocations0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectLocations0), count, timeoutMs);
  }

  async scrollProjectLocations0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectLocations0));
  }

  async doubleClickProjectActuals4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals4));
  }

  async longPressProjectActuals4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals4));
  }

  async expectProjectActuals4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectActuals4), expected, timeoutMs);
  }

  async expectProjectActuals4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectActuals4), substring, timeoutMs);
  }

  async expectProjectActuals4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectActuals4), value, timeoutMs);
  }

  async expectProjectActuals4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectActuals4), timeoutMs);
  }

  async expectProjectActuals4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectActuals4), count, timeoutMs);
  }

  async scrollProjectActuals4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectActuals4));
  }

  async doubleClickTransactionLog10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog10));
  }

  async longPressTransactionLog10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog10));
  }

  async expectTransactionLog10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.transactionLog10), expected, timeoutMs);
  }

  async expectTransactionLog10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.transactionLog10), substring, timeoutMs);
  }

  async expectTransactionLog10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.transactionLog10), value, timeoutMs);
  }

  async expectTransactionLog10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.transactionLog10), timeoutMs);
  }

  async expectTransactionLog10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.transactionLog10), count, timeoutMs);
  }

  async scrollTransactionLog10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.transactionLog10));
  }

  async doubleClickBillingEvents1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async longPressBillingEvents1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async expectBillingEvents1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEvents1), expected, timeoutMs);
  }

  async expectBillingEvents1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEvents1), substring, timeoutMs);
  }

  async expectBillingEvents1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEvents1), value, timeoutMs);
  }

  async expectBillingEvents1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEvents1), timeoutMs);
  }

  async expectBillingEvents1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEvents1), count, timeoutMs);
  }

  async scrollBillingEvents1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEvents1));
  }

  async doubleClickBillingEventItems1Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async longPressBillingEventItems1Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async expectBillingEventItems1LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), expected, timeoutMs);
  }

  async expectBillingEventItems1LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), substring, timeoutMs);
  }

  async expectBillingEventItems1LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), value, timeoutMs);
  }

  async expectBillingEventItems1LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), timeoutMs);
  }

  async expectBillingEventItems1LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.billingEventItems1Link), count, timeoutMs);
  }

  async scrollBillingEventItems1LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.billingEventItems1Link));
  }

  async doubleClickPermissionControls1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async longPressPermissionControls1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async expectPermissionControls1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.permissionControls1), expected, timeoutMs);
  }

  async expectPermissionControls1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.permissionControls1), substring, timeoutMs);
  }

  async expectPermissionControls1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.permissionControls1), value, timeoutMs);
  }

  async expectPermissionControls1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.permissionControls1), timeoutMs);
  }

  async expectPermissionControls1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.permissionControls1), count, timeoutMs);
  }

  async scrollPermissionControls1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.permissionControls1));
  }

  async doubleClickImmediateSubProjects0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async longPressImmediateSubProjects0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async expectImmediateSubProjects0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), expected, timeoutMs);
  }

  async expectImmediateSubProjects0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), substring, timeoutMs);
  }

  async expectImmediateSubProjects0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), value, timeoutMs);
  }

  async expectImmediateSubProjects0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), timeoutMs);
  }

  async expectImmediateSubProjects0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.immediateSubProjects0), count, timeoutMs);
  }

  async scrollImmediateSubProjects0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.immediateSubProjects0));
  }

  async doubleClickMasterProjectForSubProjectsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async longPressMasterProjectForSubProjectsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async expectMasterProjectForSubProjectsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), expected, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), substring, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), value, timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), timeoutMs);
  }

  async expectMasterProjectForSubProjectsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink), count, timeoutMs);
  }

  async scrollMasterProjectForSubProjectsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.masterProjectForSubProjectsLink));
  }

  async doubleClickExpenseLimitsRatesLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async longPressExpenseLimitsRatesLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async expectExpenseLimitsRatesLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), expected, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), substring, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), value, timeoutMs);
  }

  async expectExpenseLimitsRatesLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), timeoutMs);
  }

  async expectExpenseLimitsRatesLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink), count, timeoutMs);
  }

  async scrollExpenseLimitsRatesLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.expenseLimitsRatesLink));
  }

  async doubleClickBudgetHeaders0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async longPressBudgetHeaders0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async expectBudgetHeaders0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.budgetHeaders0), expected, timeoutMs);
  }

  async expectBudgetHeaders0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.budgetHeaders0), substring, timeoutMs);
  }

  async expectBudgetHeaders0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.budgetHeaders0), value, timeoutMs);
  }

  async expectBudgetHeaders0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.budgetHeaders0), timeoutMs);
  }

  async expectBudgetHeaders0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.budgetHeaders0), count, timeoutMs);
  }

  async scrollBudgetHeaders0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.budgetHeaders0));
  }

  async doubleClickEstVsActuals10Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async longPressEstVsActuals10Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async expectEstVsActuals10LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), expected, timeoutMs);
  }

  async expectEstVsActuals10LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), substring, timeoutMs);
  }

  async expectEstVsActuals10LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), value, timeoutMs);
  }

  async expectEstVsActuals10LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), timeoutMs);
  }

  async expectEstVsActuals10LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.estVsActuals10Link), count, timeoutMs);
  }

  async scrollEstVsActuals10LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.estVsActuals10Link));
  }

  async doubleClickBacklogCalculations0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async longPressBacklogCalculations0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async expectBacklogCalculations0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogCalculations0), expected, timeoutMs);
  }

  async expectBacklogCalculations0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogCalculations0), substring, timeoutMs);
  }

  async expectBacklogCalculations0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogCalculations0), value, timeoutMs);
  }

  async expectBacklogCalculations0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogCalculations0), timeoutMs);
  }

  async expectBacklogCalculations0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogCalculations0), count, timeoutMs);
  }

  async scrollBacklogCalculations0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogCalculations0));
  }

  async doubleClickBacklogDetails0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async longPressBacklogDetails0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async expectBacklogDetails0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.backlogDetails0), expected, timeoutMs);
  }

  async expectBacklogDetails0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.backlogDetails0), substring, timeoutMs);
  }

  async expectBacklogDetails0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.backlogDetails0), value, timeoutMs);
  }

  async expectBacklogDetails0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.backlogDetails0), timeoutMs);
  }

  async expectBacklogDetails0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.backlogDetails0), count, timeoutMs);
  }

  async scrollBacklogDetails0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.backlogDetails0));
  }

  async doubleClickProjectTasks10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async longPressProjectTasks10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async expectProjectTasks10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectTasks10), expected, timeoutMs);
  }

  async expectProjectTasks10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectTasks10), substring, timeoutMs);
  }

  async expectProjectTasks10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectTasks10), value, timeoutMs);
  }

  async expectProjectTasks10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectTasks10), timeoutMs);
  }

  async expectProjectTasks10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectTasks10), count, timeoutMs);
  }

  async scrollProjectTasks10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectTasks10));
  }

  async doubleClickRevenueForecasts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async longPressRevenueForecasts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async expectRevenueForecasts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecasts0), expected, timeoutMs);
  }

  async expectRevenueForecasts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecasts0), substring, timeoutMs);
  }

  async expectRevenueForecasts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecasts0), value, timeoutMs);
  }

  async expectRevenueForecasts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecasts0), timeoutMs);
  }

  async expectRevenueForecasts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecasts0), count, timeoutMs);
  }

  async scrollRevenueForecasts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecasts0));
  }

  async doubleClickCostForecasts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async longPressCostForecasts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async expectCostForecasts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.costForecasts0), expected, timeoutMs);
  }

  async expectCostForecasts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.costForecasts0), substring, timeoutMs);
  }

  async expectCostForecasts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.costForecasts0), value, timeoutMs);
  }

  async expectCostForecasts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.costForecasts0), timeoutMs);
  }

  async expectCostForecasts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.costForecasts0), count, timeoutMs);
  }

  async scrollCostForecasts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.costForecasts0));
  }

  async doubleClickRevenueForecastBatchLogsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async longPressRevenueForecastBatchLogsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async expectRevenueForecastBatchLogsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), expected, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), substring, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), value, timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), timeoutMs);
  }

  async expectRevenueForecastBatchLogsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink), count, timeoutMs);
  }

  async scrollRevenueForecastBatchLogsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.revenueForecastBatchLogsLink));
  }

  async doubleClickProjectSources5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources5));
  }

  async longPressProjectSources5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources5));
  }

  async expectProjectSources5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectSources5), expected, timeoutMs);
  }

  async expectProjectSources5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectSources5), substring, timeoutMs);
  }

  async expectProjectSources5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectSources5), value, timeoutMs);
  }

  async expectProjectSources5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectSources5), timeoutMs);
  }

  async expectProjectSources5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectSources5), count, timeoutMs);
  }

  async scrollProjectSources5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectSources5));
  }

  async doubleClickProjectServicesDeliverables0Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async longPressProjectServicesDeliverables0Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async expectProjectServicesDeliverables0LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), expected, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), substring, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), value, timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), timeoutMs);
  }

  async expectProjectServicesDeliverables0LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link), count, timeoutMs);
  }

  async scrollProjectServicesDeliverables0LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverables0Link));
  }

  async doubleClickProjectServicesDeliverableItemsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async longPressProjectServicesDeliverableItemsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async expectProjectServicesDeliverableItemsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), expected, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), substring, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), value, timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), timeoutMs);
  }

  async expectProjectServicesDeliverableItemsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink), count, timeoutMs);
  }

  async scrollProjectServicesDeliverableItemsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.projectServicesDeliverableItemsLink));
  }

  async doubleClickManagedVersions0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async longPressManagedVersions0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async expectManagedVersions0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.managedVersions0), expected, timeoutMs);
  }

  async expectManagedVersions0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.managedVersions0), substring, timeoutMs);
  }

  async expectManagedVersions0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.managedVersions0), value, timeoutMs);
  }

  async expectManagedVersions0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.managedVersions0), timeoutMs);
  }

  async expectManagedVersions0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.managedVersions0), count, timeoutMs);
  }

  async scrollManagedVersions0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.managedVersions0));
  }

  async doubleClickShowLess(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async longPressShowLess(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

  async expectShowLessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjCPage.L.showLess), expected, timeoutMs);
  }

  async expectShowLessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjCPage.L.showLess), substring, timeoutMs);
  }

  async expectShowLessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjCPage.L.showLess), value, timeoutMs);
  }

  async expectShowLessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjCPage.L.showLess), timeoutMs);
  }

  async expectShowLessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjCPage.L.showLess), count, timeoutMs);
  }

  async scrollShowLessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjCPage.L.showLess));
  }

}
