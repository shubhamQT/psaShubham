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
    changeManagementUser: { strategy: 'role' as const, value: '* Change Management & User Adoption | Project Task', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    changeManagementUserLink: { strategy: 'role' as const, value: 'Change Management & User Adoption | Project Task', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    closeTab: { strategy: 'role' as const, value: 'Close tab', role: 'button', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'button' as const },
    projectTaskChangeManagement: { strategy: 'text' as const, value: 'Project Task Change Management & User Adoption', shadowHost: 'records-highlights2', actionKind: 'text' as const },
    clone: { strategy: 'role' as const, value: 'Clone', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    start: { strategy: 'role' as const, value: 'Start', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    complete: { strategy: 'role' as const, value: 'Complete', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    projectTaskAssignments1: { strategy: 'text' as const, value: 'Project Task Assignments (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTaskAssignments1Link: { strategy: 'role' as const, value: 'Project Task Assignments (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    issues0Preview: { strategy: 'text' as const, value: 'Issues (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    issues0: { strategy: 'role' as const, value: 'Issues (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    risks0Preview: { strategy: 'text' as const, value: 'Risks (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    risks0: { strategy: 'role' as const, value: 'Risks (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    taskTime0Preview: { strategy: 'text' as const, value: 'Task Time (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    taskTime0: { strategy: 'role' as const, value: 'Task Time (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksChildTask: { strategy: 'text' as const, value: 'Project Tasks (Child Task) (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTasksChildTaskLink: { strategy: 'role' as const, value: 'Project Tasks (Child Task) (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    notes0Preview: { strategy: 'text' as const, value: 'Notes (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    notes0: { strategy: 'role' as const, value: 'Notes (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    notesAttachments0: { strategy: 'text' as const, value: 'Notes & Attachments (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    notesAttachments0Link: { strategy: 'role' as const, value: 'Notes & Attachments (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    dependentTasks0Preview: { strategy: 'text' as const, value: 'Dependent Tasks (0) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    dependentTasks0: { strategy: 'role' as const, value: 'Dependent Tasks (0)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    precedingTasks1Preview: { strategy: 'text' as const, value: 'Preceding Tasks (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    precedingTasks1: { strategy: 'role' as const, value: 'Preceding Tasks (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksPointsComplete: { strategy: 'text' as const, value: 'Project Tasks Points Complete History (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTasksPointsCompleteLink: { strategy: 'role' as const, value: 'Project Tasks Points Complete History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTasksPointsHistory: { strategy: 'text' as const, value: 'Project Tasks Points History (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTasksPointsHistoryLink: { strategy: 'role' as const, value: 'Project Tasks Points History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTaskHistory1: { strategy: 'text' as const, value: 'Project Task History (1) Preview', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'text' as const },
    projectTaskHistory1Link: { strategy: 'role' as const, value: 'Project Task History (1)', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    showAll13: { strategy: 'role' as const, value: 'Show All (13)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    details: { strategy: 'css' as const, value: '[title="Details"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    detailsTab: { strategy: 'role' as const, value: 'Details', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    activity: { strategy: 'css' as const, value: '[title="Activity"]', shadowHost: 'lightning-tab-bar', actionKind: 'generic' as const },
    activityTab: { strategy: 'role' as const, value: 'Activity', role: 'link', shadowHost: 'lightning-tab-bar', actionKind: 'link' as const },
    projectTaskName: { strategy: 'text' as const, value: 'Project Task Name', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editProjectTaskName: { strategy: 'role' as const, value: 'Edit Project Task Name', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    owner: { strategy: 'text' as const, value: 'Owner', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    project: { strategy: 'text' as const, value: 'Project', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpProject: { strategy: 'role' as const, value: 'Help Project', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editProject: { strategy: 'role' as const, value: 'Edit Project', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    healthAndCommuLink: { strategy: 'text' as const, value: '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    status: { strategy: 'text' as const, value: 'Status', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editStatus: { strategy: 'role' as const, value: 'Edit Status', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    milestone: { strategy: 'text' as const, value: 'Milestone', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editMilestone: { strategy: 'role' as const, value: 'Edit Milestone', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    readyProjectManagement: { strategy: 'role' as const, value: 'Ready - Project Management', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    wbsElementNumber: { strategy: 'text' as const, value: 'WBS Element Number', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpWbsElementNumber: { strategy: 'role' as const, value: 'Help WBS Element Number', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editWbsElementNumber: { strategy: 'role' as const, value: 'Edit WBS Element Number', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
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
    editWorkCalendar: { strategy: 'role' as const, value: 'Edit Work Calendar', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    australiaNswFull: { strategy: 'role' as const, value: 'Australia - NSW Full Time', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    actualCost: { strategy: 'text' as const, value: 'Actual Cost', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualCost: { strategy: 'role' as const, value: 'Help Actual Cost', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActualCost: { strategy: 'role' as const, value: 'Edit Actual Cost', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    estimatedHours: { strategy: 'text' as const, value: 'Estimated Hours', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editEstimatedHours: { strategy: 'role' as const, value: 'Edit Estimated Hours', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    workRemaining: { strategy: 'text' as const, value: 'Work Remaining', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpWorkRemaining: { strategy: 'role' as const, value: 'Help Work Remaining', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editWorkRemaining: { strategy: 'role' as const, value: 'Edit Work Remaining', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    projectedHours: { strategy: 'text' as const, value: 'Projected Hours', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpProjectedHours: { strategy: 'role' as const, value: 'Help Projected Hours', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    started: { strategy: 'text' as const, value: 'Started', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpStarted: { strategy: 'role' as const, value: 'Help Started', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editStarted: { strategy: 'role' as const, value: 'Edit Started', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actualHours: { strategy: 'text' as const, value: 'Actual Hours', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActualHours: { strategy: 'role' as const, value: 'Help Actual Hours', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActualHours: { strategy: 'role' as const, value: 'Edit Actual Hours', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    helpCompleted: { strategy: 'role' as const, value: 'Help Completed', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editCompleted: { strategy: 'role' as const, value: 'Edit Completed', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    timecardActualHours: { strategy: 'text' as const, value: 'Timecard Actual Hours', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpTimecardActualHours: { strategy: 'role' as const, value: 'Help Timecard Actual Hours', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editTimecardActualHours: { strategy: 'role' as const, value: 'Edit Timecard Actual Hours', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    blocked: { strategy: 'text' as const, value: 'Blocked', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editBlocked: { strategy: 'role' as const, value: 'Edit Blocked', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    hoursRemaining: { strategy: 'text' as const, value: 'Hours Remaining', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpHoursRemaining: { strategy: 'role' as const, value: 'Help Hours Remaining', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    numberOfAssignments: { strategy: 'text' as const, value: 'Number of Assignments', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpNumberOfAssignments: { strategy: 'role' as const, value: 'Help Number of Assignments', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    estimatedTimeToCompletion: { strategy: 'text' as const, value: 'Estimated Time To Completion (Task)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpEstimatedTimeTo: { strategy: 'role' as const, value: 'Help Estimated Time To Completion (Task)', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editEstimatedTimeTo: { strategy: 'role' as const, value: 'Edit Estimated Time To Completion (Task)', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    summary: { strategy: 'text' as const, value: 'Summary', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editSummary: { strategy: 'role' as const, value: 'Edit Summary', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    percentCompleteHours: { strategy: 'text' as const, value: 'Percent Complete (Hours)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    doNotAutoUpdate: { strategy: 'text' as const, value: 'Do Not Auto Update Parents', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editDoNotAuto: { strategy: 'role' as const, value: 'Edit Do Not Auto Update Parents', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    percentCompleteTasks: { strategy: 'text' as const, value: 'Percent Complete (Tasks)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPercentCompleteTasks: { strategy: 'role' as const, value: 'Edit Percent Complete (Tasks)', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    doNotAutoUpdate3: { strategy: 'text' as const, value: 'Do Not Auto Update This Task', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpDoNotAuto: { strategy: 'role' as const, value: 'Help Do Not Auto Update This Task', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editDoNotAutoButton: { strategy: 'role' as const, value: 'Edit Do Not Auto Update This Task', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    percentCompletePoints: { strategy: 'text' as const, value: 'Percent Complete (Points)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPercentCompletePoints: { strategy: 'role' as const, value: 'Edit Percent Complete (Points)', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    actionSyncWithExternal: { strategy: 'text' as const, value: 'Action: Sync with External Calendar', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpActionSyncWith: { strategy: 'role' as const, value: 'Help Action: Sync with External Calendar', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editActionSyncWith: { strategy: 'role' as const, value: 'Edit Action: Sync with External Calendar', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    points: { strategy: 'text' as const, value: 'Points', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPoints: { strategy: 'role' as const, value: 'Edit Points', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    excludeFromExternalCalendar: { strategy: 'text' as const, value: 'Exclude from External Calendar Sync', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpExcludeFromExternal: { strategy: 'role' as const, value: 'Help Exclude from External Calendar Sync', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editExcludeFromExternal: { strategy: 'role' as const, value: 'Edit Exclude from External Calendar Sync', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    pointsComplete: { strategy: 'text' as const, value: 'Points Complete', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpPointsComplete: { strategy: 'role' as const, value: 'Help Points Complete', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editPointsComplete: { strategy: 'role' as const, value: 'Edit Points Complete', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskPlaybookContent: { strategy: 'text' as const, value: 'Task Playbook Content', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editTaskPlaybookContent: { strategy: 'role' as const, value: 'Edit Task Playbook Content', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    pointsRemaining: { strategy: 'text' as const, value: 'Points Remaining', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    keyTaskType: { strategy: 'text' as const, value: 'Key Task Type', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editKeyTaskType: { strategy: 'role' as const, value: 'Edit Key Task Type', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    pointsBaseline: { strategy: 'text' as const, value: 'Points Baseline', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPointsBaseline: { strategy: 'role' as const, value: 'Edit Points Baseline', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskNumber: { strategy: 'text' as const, value: 'Task Number', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    projectTaskUniqueId: { strategy: 'text' as const, value: 'Project Task Unique Id', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editProjectTaskUnique: { strategy: 'role' as const, value: 'Edit Project Task Unique Id', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    pushReason: { strategy: 'text' as const, value: 'Push Reason', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editPushReason: { strategy: 'role' as const, value: 'Edit Push Reason', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    assignedResources: { strategy: 'text' as const, value: 'Assigned Resources', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpAssignedResources: { strategy: 'role' as const, value: 'Help Assigned Resources', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editAssignedResources: { strategy: 'role' as const, value: 'Edit Assigned Resources', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    assignedResourcesLong: { strategy: 'text' as const, value: 'Assigned Resources (Long)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editAssignedResourcesLong: { strategy: 'role' as const, value: 'Edit Assigned Resources (Long)', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    description: { strategy: 'role' as const, value: 'Description', role: 'button', shadowHost: 'records-record-layout-section', actionKind: 'button' as const },
    editDescription: { strategy: 'role' as const, value: 'Edit Description', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    notes: { strategy: 'text' as const, value: 'Notes', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editNotes: { strategy: 'role' as const, value: 'Edit Notes', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    longDescription: { strategy: 'text' as const, value: 'Long Description', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editLongDescription: { strategy: 'role' as const, value: 'Edit Long Description', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    detailedNotes: { strategy: 'text' as const, value: 'Detailed Notes', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpDetailedNotes: { strategy: 'role' as const, value: 'Help Detailed Notes', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editDetailedNotes: { strategy: 'role' as const, value: 'Edit Detailed Notes', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    synchronizeMilestoneAndTask: { strategy: 'text' as const, value: 'Synchronize Milestone and Task', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpSynchronizeMilestoneAnd: { strategy: 'role' as const, value: 'Help Synchronize Milestone and Task', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editSynchronizeMilestoneAnd: { strategy: 'role' as const, value: 'Edit Synchronize Milestone and Task', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskHierarchy: { strategy: 'role' as const, value: 'Task Hierarchy', role: 'button', shadowHost: 'records-record-layout-section', actionKind: 'button' as const },
    parentTask: { strategy: 'text' as const, value: 'Parent Task', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpParentTask: { strategy: 'role' as const, value: 'Help Parent Task', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editParentTask: { strategy: 'role' as const, value: 'Edit Parent Task', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    topLevelParentTask: { strategy: 'text' as const, value: 'Top-level Parent Task', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpTopLevelParentTask: { strategy: 'role' as const, value: 'Help Top-level Parent Task', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editTopLevelParentTask: { strategy: 'role' as const, value: 'Edit Top-level Parent Task', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    parentTaskStartDate: { strategy: 'text' as const, value: 'Parent Task Start Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    parentTaskEndDate: { strategy: 'text' as const, value: 'Parent Task End Date & Time', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    parentTaskStartDate2: { strategy: 'text' as const, value: 'Parent Task Start Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    parentTaskEndDate2: { strategy: 'text' as const, value: 'Parent Task End Date', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    taskKey: { strategy: 'text' as const, value: 'Task Key', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editTaskKey: { strategy: 'role' as const, value: 'Edit Task Key', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskNameChain: { strategy: 'text' as const, value: 'Task Name Chain', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpTaskNameChain: { strategy: 'role' as const, value: 'Help Task Name Chain', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editTaskNameChain: { strategy: 'role' as const, value: 'Edit Task Name Chain', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    hierarchyDepth: { strategy: 'text' as const, value: 'Hierarchy Depth', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpHierarchyDepth: { strategy: 'role' as const, value: 'Help Hierarchy Depth', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editHierarchyDepth: { strategy: 'role' as const, value: 'Edit Hierarchy Depth', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskNameChainLong: { strategy: 'text' as const, value: 'Task Name Chain (Long)', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpTaskNameChainButton: { strategy: 'role' as const, value: 'Help Task Name Chain (Long)', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editTaskNameChainButton: { strategy: 'role' as const, value: 'Edit Task Name Chain (Long)', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    taskKeyChain: { strategy: 'text' as const, value: 'Task Key Chain', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    editTaskKeyChain: { strategy: 'role' as const, value: 'Edit Task Key Chain', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    createdBy: { strategy: 'text' as const, value: 'Created By', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    stephenDonnelly: { strategy: 'role' as const, value: 'Stephen Donnelly', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    lastModifiedBy: { strategy: 'text' as const, value: 'Last Modified By', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    aashishRaghav: { strategy: 'role' as const, value: 'Aashish Raghav', role: 'link', shadowHost: 'records-hoverable-link', actionKind: 'link' as const },
    projectTaskType: { strategy: 'text' as const, value: 'Project Task Type', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpProjectTaskType: { strategy: 'role' as const, value: 'Help Project Task Type', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editProjectTaskType: { strategy: 'role' as const, value: 'Edit Project Task Type', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    externalTaskId: { strategy: 'text' as const, value: 'External Task ID', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpExternalTaskId: { strategy: 'role' as const, value: 'Help External Task ID', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editExternalTaskId: { strategy: 'role' as const, value: 'Edit External Task ID', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
    resourceTaskSync: { strategy: 'text' as const, value: 'Resource Task Sync', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    helpResourceTaskSync: { strategy: 'role' as const, value: 'Help Resource Task Sync', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    editResourceTaskSync: { strategy: 'role' as const, value: 'Edit Resource Task Sync', role: 'button', shadowHost: 'records-record-layout-item', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickChangeManagementUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser));
  }

  async expectChangeManagementUserVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs, soft);
  }

  async clickChangeManagementUserLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink));
  }

  async expectChangeManagementUserLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs, soft);
  }

  async clickCloseTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.closeTab));
  }

  async doubleClickCloseTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.closeTab));
  }

  async expectCloseTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs, soft);
  }

  async getInnerTextProjectTaskChangeManagement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement));
  }

  async expectProjectTaskChangeManagementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs, soft);
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

  async getInnerTextProjectTaskAssignments1(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1));
  }

  async expectProjectTaskAssignments1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs, soft);
  }

  async clickProjectTaskAssignments1Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link));
  }

  async expectProjectTaskAssignments1LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1Link), timeoutMs, soft);
  }

  async getInnerTextIssues0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview));
  }

  async expectIssues0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs, soft);
  }

  async clickIssues0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0));
  }

  async expectIssues0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0), timeoutMs, soft);
  }

  async getInnerTextRisks0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview));
  }

  async expectRisks0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs, soft);
  }

  async clickRisks0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0));
  }

  async expectRisks0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0), timeoutMs, soft);
  }

  async getInnerTextTaskTime0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview));
  }

  async expectTaskTime0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs, soft);
  }

  async clickTaskTime0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0));
  }

  async expectTaskTime0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0), timeoutMs, soft);
  }

  async getInnerTextProjectTasksChildTask(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask));
  }

  async expectProjectTasksChildTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs, soft);
  }

  async clickProjectTasksChildTaskLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink));
  }

  async expectProjectTasksChildTaskLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTaskLink), timeoutMs, soft);
  }

  async getInnerTextNotes0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview));
  }

  async expectNotes0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs, soft);
  }

  async clickNotes0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0));
  }

  async expectNotes0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0), timeoutMs, soft);
  }

  async getInnerTextNotesAttachments0(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0));
  }

  async expectNotesAttachments0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs, soft);
  }

  async clickNotesAttachments0Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link));
  }

  async expectNotesAttachments0LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0Link), timeoutMs, soft);
  }

  async getInnerTextDependentTasks0Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview));
  }

  async expectDependentTasks0PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs, soft);
  }

  async clickDependentTasks0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0));
  }

  async expectDependentTasks0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs, soft);
  }

  async getInnerTextPrecedingTasks1Preview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview));
  }

  async expectPrecedingTasks1PreviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs, soft);
  }

  async clickPrecedingTasks1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1));
  }

  async expectPrecedingTasks1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1), timeoutMs, soft);
  }

  async getInnerTextProjectTasksPointsComplete(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete));
  }

  async expectProjectTasksPointsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs, soft);
  }

  async clickProjectTasksPointsCompleteLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink));
  }

  async expectProjectTasksPointsCompleteLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsCompleteLink), timeoutMs, soft);
  }

  async getInnerTextProjectTasksPointsHistory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory));
  }

  async expectProjectTasksPointsHistoryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs, soft);
  }

  async clickProjectTasksPointsHistoryLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink));
  }

  async expectProjectTasksPointsHistoryLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistoryLink), timeoutMs, soft);
  }

  async getInnerTextProjectTaskHistory1(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1));
  }

  async expectProjectTaskHistory1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs, soft);
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

  async clickDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.details));
  }

  async expectDetailsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs, soft);
  }

  async clickDetailsTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab));
  }

  async expectDetailsTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.detailsTab), timeoutMs, soft);
  }

  async clickActivity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activity));
  }

  async expectActivityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs, soft);
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

  async clickHealthAndCommuLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs, soft);
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs, soft);
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

  async clickEditMilestone(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editMilestone));
  }

  async doubleClickEditMilestone(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editMilestone));
  }

  async expectEditMilestoneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs, soft);
  }

  async clickReadyProjectManagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement));
  }

  async expectReadyProjectManagementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.readyProjectManagement), timeoutMs, soft);
  }

  async getInnerTextWbsElementNumber(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber));
  }

  async expectWbsElementNumberVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs, soft);
  }

  async clickHelpWbsElementNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber));
  }

  async doubleClickHelpWbsElementNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber));
  }

  async expectHelpWbsElementNumberVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs, soft);
  }

  async clickEditWbsElementNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber));
  }

  async doubleClickEditWbsElementNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber));
  }

  async expectEditWbsElementNumberVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs, soft);
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

  async clickEditWorkCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar));
  }

  async doubleClickEditWorkCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar));
  }

  async expectEditWorkCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs, soft);
  }

  async clickAustraliaNswFull(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull));
  }

  async expectAustraliaNswFullVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs, soft);
  }

  async getInnerTextActualCost(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost));
  }

  async expectActualCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs, soft);
  }

  async clickHelpActualCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost));
  }

  async doubleClickHelpActualCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost));
  }

  async expectHelpActualCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs, soft);
  }

  async clickEditActualCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualCost));
  }

  async doubleClickEditActualCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualCost));
  }

  async expectEditActualCostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs, soft);
  }

  async getInnerTextEstimatedHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours));
  }

  async expectEstimatedHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs, soft);
  }

  async clickEditEstimatedHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours));
  }

  async doubleClickEditEstimatedHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours));
  }

  async expectEditEstimatedHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs, soft);
  }

  async getInnerTextWorkRemaining(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining));
  }

  async expectWorkRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs, soft);
  }

  async clickHelpWorkRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining));
  }

  async doubleClickHelpWorkRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining));
  }

  async expectHelpWorkRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs, soft);
  }

  async clickEditWorkRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining));
  }

  async doubleClickEditWorkRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining));
  }

  async expectEditWorkRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs, soft);
  }

  async getInnerTextProjectedHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours));
  }

  async expectProjectedHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs, soft);
  }

  async clickHelpProjectedHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours));
  }

  async doubleClickHelpProjectedHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours));
  }

  async expectHelpProjectedHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs, soft);
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

  async clickHelpCompleted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted));
  }

  async doubleClickHelpCompleted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted));
  }

  async expectHelpCompletedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs, soft);
  }

  async clickEditCompleted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editCompleted));
  }

  async doubleClickEditCompleted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editCompleted));
  }

  async expectEditCompletedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs, soft);
  }

  async getInnerTextTimecardActualHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours));
  }

  async expectTimecardActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs, soft);
  }

  async clickHelpTimecardActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours));
  }

  async doubleClickHelpTimecardActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours));
  }

  async expectHelpTimecardActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs, soft);
  }

  async clickEditTimecardActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours));
  }

  async doubleClickEditTimecardActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours));
  }

  async expectEditTimecardActualHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs, soft);
  }

  async getInnerTextBlocked(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked));
  }

  async expectBlockedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs, soft);
  }

  async clickEditBlocked(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editBlocked));
  }

  async doubleClickEditBlocked(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editBlocked));
  }

  async expectEditBlockedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs, soft);
  }

  async getInnerTextHoursRemaining(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining));
  }

  async expectHoursRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs, soft);
  }

  async clickHelpHoursRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining));
  }

  async doubleClickHelpHoursRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining));
  }

  async expectHelpHoursRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs, soft);
  }

  async getInnerTextNumberOfAssignments(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments));
  }

  async expectNumberOfAssignmentsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs, soft);
  }

  async clickHelpNumberOfAssignments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments));
  }

  async doubleClickHelpNumberOfAssignments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments));
  }

  async expectHelpNumberOfAssignmentsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs, soft);
  }

  async getInnerTextEstimatedTimeToCompletion(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion));
  }

  async expectEstimatedTimeToCompletionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs, soft);
  }

  async clickHelpEstimatedTimeTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo));
  }

  async doubleClickHelpEstimatedTimeTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo));
  }

  async expectHelpEstimatedTimeToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs, soft);
  }

  async clickEditEstimatedTimeTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo));
  }

  async doubleClickEditEstimatedTimeTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo));
  }

  async expectEditEstimatedTimeToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs, soft);
  }

  async getInnerTextSummary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.summary));
  }

  async expectSummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs, soft);
  }

  async clickEditSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSummary));
  }

  async doubleClickEditSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSummary));
  }

  async expectEditSummaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs, soft);
  }

  async getInnerTextPercentCompleteHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours));
  }

  async expectPercentCompleteHoursVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs, soft);
  }

  async getInnerTextDoNotAutoUpdate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate));
  }

  async expectDoNotAutoUpdateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs, soft);
  }

  async clickEditDoNotAuto(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto));
  }

  async doubleClickEditDoNotAuto(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto));
  }

  async expectEditDoNotAutoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs, soft);
  }

  async getInnerTextPercentCompleteTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks));
  }

  async expectPercentCompleteTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs, soft);
  }

  async clickEditPercentCompleteTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks));
  }

  async doubleClickEditPercentCompleteTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks));
  }

  async expectEditPercentCompleteTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs, soft);
  }

  async getInnerTextDoNotAutoUpdate3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3));
  }

  async expectDoNotAutoUpdate3Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs, soft);
  }

  async clickHelpDoNotAuto(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto));
  }

  async doubleClickHelpDoNotAuto(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto));
  }

  async expectHelpDoNotAutoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs, soft);
  }

  async clickEditDoNotAutoButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton));
  }

  async doubleClickEditDoNotAutoButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton));
  }

  async expectEditDoNotAutoButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs, soft);
  }

  async getInnerTextPercentCompletePoints(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints));
  }

  async expectPercentCompletePointsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs, soft);
  }

  async clickEditPercentCompletePoints(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints));
  }

  async doubleClickEditPercentCompletePoints(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints));
  }

  async expectEditPercentCompletePointsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs, soft);
  }

  async getInnerTextActionSyncWithExternal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal));
  }

  async expectActionSyncWithExternalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs, soft);
  }

  async clickHelpActionSyncWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith));
  }

  async doubleClickHelpActionSyncWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith));
  }

  async expectHelpActionSyncWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs, soft);
  }

  async clickEditActionSyncWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith));
  }

  async doubleClickEditActionSyncWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith));
  }

  async expectEditActionSyncWithVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs, soft);
  }

  async getInnerTextPoints(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.points));
  }

  async expectPointsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs, soft);
  }

  async clickEditPoints(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPoints));
  }

  async doubleClickEditPoints(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPoints));
  }

  async expectEditPointsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs, soft);
  }

  async getInnerTextExcludeFromExternalCalendar(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar));
  }

  async expectExcludeFromExternalCalendarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs, soft);
  }

  async clickHelpExcludeFromExternal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal));
  }

  async doubleClickHelpExcludeFromExternal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal));
  }

  async expectHelpExcludeFromExternalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs, soft);
  }

  async clickEditExcludeFromExternal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal));
  }

  async doubleClickEditExcludeFromExternal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal));
  }

  async expectEditExcludeFromExternalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs, soft);
  }

  async getInnerTextPointsComplete(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete));
  }

  async expectPointsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs, soft);
  }

  async clickHelpPointsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete));
  }

  async doubleClickHelpPointsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete));
  }

  async expectHelpPointsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs, soft);
  }

  async clickEditPointsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete));
  }

  async doubleClickEditPointsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete));
  }

  async expectEditPointsCompleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs, soft);
  }

  async getInnerTextTaskPlaybookContent(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent));
  }

  async expectTaskPlaybookContentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs, soft);
  }

  async clickEditTaskPlaybookContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent));
  }

  async doubleClickEditTaskPlaybookContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent));
  }

  async expectEditTaskPlaybookContentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs, soft);
  }

  async getInnerTextPointsRemaining(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining));
  }

  async expectPointsRemainingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs, soft);
  }

  async getInnerTextKeyTaskType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType));
  }

  async expectKeyTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs, soft);
  }

  async clickEditKeyTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType));
  }

  async doubleClickEditKeyTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType));
  }

  async expectEditKeyTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs, soft);
  }

  async getInnerTextPointsBaseline(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline));
  }

  async expectPointsBaselineVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs, soft);
  }

  async clickEditPointsBaseline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline));
  }

  async doubleClickEditPointsBaseline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline));
  }

  async expectEditPointsBaselineVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs, soft);
  }

  async getInnerTextTaskNumber(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber));
  }

  async expectTaskNumberVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs, soft);
  }

  async getInnerTextProjectTaskUniqueId(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId));
  }

  async expectProjectTaskUniqueIdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs, soft);
  }

  async clickEditProjectTaskUnique(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique));
  }

  async doubleClickEditProjectTaskUnique(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique));
  }

  async expectEditProjectTaskUniqueVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs, soft);
  }

  async getInnerTextPushReason(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason));
  }

  async expectPushReasonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs, soft);
  }

  async clickEditPushReason(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPushReason));
  }

  async doubleClickEditPushReason(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPushReason));
  }

  async expectEditPushReasonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs, soft);
  }

  async getInnerTextAssignedResources(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources));
  }

  async expectAssignedResourcesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs, soft);
  }

  async clickHelpAssignedResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources));
  }

  async doubleClickHelpAssignedResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources));
  }

  async expectHelpAssignedResourcesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs, soft);
  }

  async clickEditAssignedResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources));
  }

  async doubleClickEditAssignedResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources));
  }

  async expectEditAssignedResourcesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs, soft);
  }

  async getInnerTextAssignedResourcesLong(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong));
  }

  async expectAssignedResourcesLongVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs, soft);
  }

  async clickEditAssignedResourcesLong(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong));
  }

  async doubleClickEditAssignedResourcesLong(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong));
  }

  async expectEditAssignedResourcesLongVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs, soft);
  }

  async clickDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.description));
  }

  async doubleClickDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.description));
  }

  async expectDescriptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs, soft);
  }

  async clickEditDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDescription));
  }

  async doubleClickEditDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDescription));
  }

  async expectEditDescriptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs, soft);
  }

  async getInnerTextNotes(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes));
  }

  async expectNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs, soft);
  }

  async clickEditNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editNotes));
  }

  async doubleClickEditNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editNotes));
  }

  async expectEditNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs, soft);
  }

  async getInnerTextLongDescription(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription));
  }

  async expectLongDescriptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs, soft);
  }

  async clickEditLongDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription));
  }

  async doubleClickEditLongDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription));
  }

  async expectEditLongDescriptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs, soft);
  }

  async getInnerTextDetailedNotes(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes));
  }

  async expectDetailedNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs, soft);
  }

  async clickHelpDetailedNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes));
  }

  async doubleClickHelpDetailedNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes));
  }

  async expectHelpDetailedNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs, soft);
  }

  async clickEditDetailedNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes));
  }

  async doubleClickEditDetailedNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes));
  }

  async expectEditDetailedNotesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs, soft);
  }

  async getInnerTextSynchronizeMilestoneAndTask(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask));
  }

  async expectSynchronizeMilestoneAndTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs, soft);
  }

  async clickHelpSynchronizeMilestoneAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd));
  }

  async doubleClickHelpSynchronizeMilestoneAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd));
  }

  async expectHelpSynchronizeMilestoneAndVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs, soft);
  }

  async clickEditSynchronizeMilestoneAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd));
  }

  async doubleClickEditSynchronizeMilestoneAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd));
  }

  async expectEditSynchronizeMilestoneAndVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs, soft);
  }

  async clickTaskHierarchy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy));
  }

  async doubleClickTaskHierarchy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy));
  }

  async expectTaskHierarchyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs, soft);
  }

  async getInnerTextParentTask(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask));
  }

  async expectParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs, soft);
  }

  async clickHelpParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask));
  }

  async doubleClickHelpParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask));
  }

  async expectHelpParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs, soft);
  }

  async clickEditParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editParentTask));
  }

  async doubleClickEditParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editParentTask));
  }

  async expectEditParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs, soft);
  }

  async getInnerTextTopLevelParentTask(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask));
  }

  async expectTopLevelParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs, soft);
  }

  async clickHelpTopLevelParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask));
  }

  async doubleClickHelpTopLevelParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask));
  }

  async expectHelpTopLevelParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs, soft);
  }

  async clickEditTopLevelParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask));
  }

  async doubleClickEditTopLevelParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask));
  }

  async expectEditTopLevelParentTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs, soft);
  }

  async getInnerTextParentTaskStartDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate));
  }

  async expectParentTaskStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs, soft);
  }

  async getInnerTextParentTaskEndDate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate));
  }

  async expectParentTaskEndDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs, soft);
  }

  async getInnerTextParentTaskStartDate2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2));
  }

  async expectParentTaskStartDate2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs, soft);
  }

  async getInnerTextParentTaskEndDate2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2));
  }

  async expectParentTaskEndDate2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs, soft);
  }

  async getInnerTextTaskKey(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey));
  }

  async expectTaskKeyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs, soft);
  }

  async clickEditTaskKey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey));
  }

  async doubleClickEditTaskKey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey));
  }

  async expectEditTaskKeyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs, soft);
  }

  async getInnerTextTaskNameChain(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain));
  }

  async expectTaskNameChainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs, soft);
  }

  async clickHelpTaskNameChain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain));
  }

  async doubleClickHelpTaskNameChain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain));
  }

  async expectHelpTaskNameChainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs, soft);
  }

  async clickEditTaskNameChain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain));
  }

  async doubleClickEditTaskNameChain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain));
  }

  async expectEditTaskNameChainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs, soft);
  }

  async getInnerTextHierarchyDepth(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth));
  }

  async expectHierarchyDepthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs, soft);
  }

  async clickHelpHierarchyDepth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth));
  }

  async doubleClickHelpHierarchyDepth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth));
  }

  async expectHelpHierarchyDepthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs, soft);
  }

  async clickEditHierarchyDepth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth));
  }

  async doubleClickEditHierarchyDepth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth));
  }

  async expectEditHierarchyDepthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs, soft);
  }

  async getInnerTextTaskNameChainLong(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong));
  }

  async expectTaskNameChainLongVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs, soft);
  }

  async clickHelpTaskNameChainButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton));
  }

  async doubleClickHelpTaskNameChainButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton));
  }

  async expectHelpTaskNameChainButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs, soft);
  }

  async clickEditTaskNameChainButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton));
  }

  async doubleClickEditTaskNameChainButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton));
  }

  async expectEditTaskNameChainButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs, soft);
  }

  async getInnerTextTaskKeyChain(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain));
  }

  async expectTaskKeyChainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs, soft);
  }

  async clickEditTaskKeyChain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain));
  }

  async doubleClickEditTaskKeyChain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain));
  }

  async expectEditTaskKeyChainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs, soft);
  }

  async getInnerTextCreatedBy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy));
  }

  async expectCreatedByVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs, soft);
  }

  async clickStephenDonnelly(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly));
  }

  async expectStephenDonnellyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs, soft);
  }

  async getInnerTextLastModifiedBy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy));
  }

  async expectLastModifiedByVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs, soft);
  }

  async clickAashishRaghav(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav));
  }

  async expectAashishRaghavVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs, soft);
  }

  async getInnerTextProjectTaskType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType));
  }

  async expectProjectTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs, soft);
  }

  async clickHelpProjectTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType));
  }

  async doubleClickHelpProjectTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType));
  }

  async expectHelpProjectTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs, soft);
  }

  async clickEditProjectTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType));
  }

  async doubleClickEditProjectTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType));
  }

  async expectEditProjectTaskTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs, soft);
  }

  async getInnerTextExternalTaskId(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId));
  }

  async expectExternalTaskIdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs, soft);
  }

  async clickHelpExternalTaskId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId));
  }

  async doubleClickHelpExternalTaskId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId));
  }

  async expectHelpExternalTaskIdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs, soft);
  }

  async clickEditExternalTaskId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId));
  }

  async doubleClickEditExternalTaskId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId));
  }

  async expectEditExternalTaskIdVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs, soft);
  }

  async getInnerTextResourceTaskSync(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync));
  }

  async expectResourceTaskSyncVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs, soft);
  }

  async clickHelpResourceTaskSync(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync));
  }

  async doubleClickHelpResourceTaskSync(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync));
  }

  async expectHelpResourceTaskSyncVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs, soft);
  }

  async clickEditResourceTaskSync(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync));
  }

  async doubleClickEditResourceTaskSync(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync));
  }

  async expectEditResourceTaskSyncVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'Change Management & User Adoption | Project Task | Salesforce', timeoutMs);
  }


  async doubleClickChangeManagementUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser));
  }

  async longPressChangeManagementUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser));
  }

  async expectChangeManagementUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), expected, timeoutMs);
  }

  async expectChangeManagementUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), substring, timeoutMs);
  }

  async expectChangeManagementUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), value, timeoutMs);
  }

  async expectChangeManagementUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), timeoutMs);
  }

  async expectChangeManagementUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser), count, timeoutMs);
  }

  async scrollChangeManagementUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUser));
  }

  async doubleClickChangeManagementUserLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink));
  }

  async longPressChangeManagementUserLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink));
  }

  async expectChangeManagementUserLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), expected, timeoutMs);
  }

  async expectChangeManagementUserLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), substring, timeoutMs);
  }

  async expectChangeManagementUserLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), value, timeoutMs);
  }

  async expectChangeManagementUserLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), timeoutMs);
  }

  async expectChangeManagementUserLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink), count, timeoutMs);
  }

  async scrollChangeManagementUserLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.changeManagementUserLink));
  }

  async longPressCloseTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.closeTab));
  }

  async expectCloseTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.closeTab), expected, timeoutMs);
  }

  async expectCloseTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.closeTab), substring, timeoutMs);
  }

  async expectCloseTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.closeTab), value, timeoutMs);
  }

  async expectCloseTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.closeTab), timeoutMs);
  }

  async expectCloseTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.closeTab), count, timeoutMs);
  }

  async scrollCloseTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.closeTab));
  }

  async clickProjectTaskChangeManagement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement));
  }

  async doubleClickProjectTaskChangeManagement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement));
  }

  async longPressProjectTaskChangeManagement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement));
  }

  async expectProjectTaskChangeManagementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), expected, timeoutMs);
  }

  async expectProjectTaskChangeManagementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), substring, timeoutMs);
  }

  async expectProjectTaskChangeManagementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), value, timeoutMs);
  }

  async expectProjectTaskChangeManagementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), timeoutMs);
  }

  async expectProjectTaskChangeManagementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement), count, timeoutMs);
  }

  async scrollProjectTaskChangeManagementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskChangeManagement));
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

  async clickProjectTaskAssignments1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1));
  }

  async doubleClickProjectTaskAssignments1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1));
  }

  async longPressProjectTaskAssignments1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1));
  }

  async expectProjectTaskAssignments1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), expected, timeoutMs);
  }

  async expectProjectTaskAssignments1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), substring, timeoutMs);
  }

  async expectProjectTaskAssignments1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), value, timeoutMs);
  }

  async expectProjectTaskAssignments1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), timeoutMs);
  }

  async expectProjectTaskAssignments1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1), count, timeoutMs);
  }

  async scrollProjectTaskAssignments1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskAssignments1));
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

  async clickIssues0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview));
  }

  async doubleClickIssues0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview));
  }

  async longPressIssues0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview));
  }

  async expectIssues0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), expected, timeoutMs);
  }

  async expectIssues0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), substring, timeoutMs);
  }

  async expectIssues0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), value, timeoutMs);
  }

  async expectIssues0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), timeoutMs);
  }

  async expectIssues0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview), count, timeoutMs);
  }

  async scrollIssues0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.issues0Preview));
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

  async clickRisks0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview));
  }

  async doubleClickRisks0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview));
  }

  async longPressRisks0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview));
  }

  async expectRisks0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), expected, timeoutMs);
  }

  async expectRisks0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), substring, timeoutMs);
  }

  async expectRisks0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), value, timeoutMs);
  }

  async expectRisks0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), timeoutMs);
  }

  async expectRisks0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview), count, timeoutMs);
  }

  async scrollRisks0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.risks0Preview));
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

  async clickTaskTime0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview));
  }

  async doubleClickTaskTime0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview));
  }

  async longPressTaskTime0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview));
  }

  async expectTaskTime0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), expected, timeoutMs);
  }

  async expectTaskTime0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), substring, timeoutMs);
  }

  async expectTaskTime0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), value, timeoutMs);
  }

  async expectTaskTime0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), timeoutMs);
  }

  async expectTaskTime0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview), count, timeoutMs);
  }

  async scrollTaskTime0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskTime0Preview));
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

  async clickProjectTasksChildTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask));
  }

  async doubleClickProjectTasksChildTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask));
  }

  async longPressProjectTasksChildTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask));
  }

  async expectProjectTasksChildTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), expected, timeoutMs);
  }

  async expectProjectTasksChildTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), substring, timeoutMs);
  }

  async expectProjectTasksChildTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), value, timeoutMs);
  }

  async expectProjectTasksChildTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), timeoutMs);
  }

  async expectProjectTasksChildTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask), count, timeoutMs);
  }

  async scrollProjectTasksChildTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksChildTask));
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

  async clickNotes0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview));
  }

  async doubleClickNotes0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview));
  }

  async longPressNotes0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview));
  }

  async expectNotes0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), expected, timeoutMs);
  }

  async expectNotes0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), substring, timeoutMs);
  }

  async expectNotes0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), value, timeoutMs);
  }

  async expectNotes0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), timeoutMs);
  }

  async expectNotes0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview), count, timeoutMs);
  }

  async scrollNotes0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes0Preview));
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

  async clickNotesAttachments0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0));
  }

  async doubleClickNotesAttachments0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0));
  }

  async longPressNotesAttachments0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0));
  }

  async expectNotesAttachments0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), expected, timeoutMs);
  }

  async expectNotesAttachments0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), substring, timeoutMs);
  }

  async expectNotesAttachments0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), value, timeoutMs);
  }

  async expectNotesAttachments0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), timeoutMs);
  }

  async expectNotesAttachments0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0), count, timeoutMs);
  }

  async scrollNotesAttachments0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notesAttachments0));
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

  async clickDependentTasks0Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview));
  }

  async doubleClickDependentTasks0Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview));
  }

  async longPressDependentTasks0Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview));
  }

  async expectDependentTasks0PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), expected, timeoutMs);
  }

  async expectDependentTasks0PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), substring, timeoutMs);
  }

  async expectDependentTasks0PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), value, timeoutMs);
  }

  async expectDependentTasks0PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), timeoutMs);
  }

  async expectDependentTasks0PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview), count, timeoutMs);
  }

  async scrollDependentTasks0PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0Preview));
  }

  async doubleClickDependentTasks0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0));
  }

  async longPressDependentTasks0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0));
  }

  async expectDependentTasks0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), expected, timeoutMs);
  }

  async expectDependentTasks0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), substring, timeoutMs);
  }

  async expectDependentTasks0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), value, timeoutMs);
  }

  async expectDependentTasks0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), timeoutMs);
  }

  async expectDependentTasks0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0), count, timeoutMs);
  }

  async scrollDependentTasks0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.dependentTasks0));
  }

  async clickPrecedingTasks1Preview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview));
  }

  async doubleClickPrecedingTasks1Preview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview));
  }

  async longPressPrecedingTasks1Preview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview));
  }

  async expectPrecedingTasks1PreviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), expected, timeoutMs);
  }

  async expectPrecedingTasks1PreviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), substring, timeoutMs);
  }

  async expectPrecedingTasks1PreviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), value, timeoutMs);
  }

  async expectPrecedingTasks1PreviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), timeoutMs);
  }

  async expectPrecedingTasks1PreviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview), count, timeoutMs);
  }

  async scrollPrecedingTasks1PreviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.precedingTasks1Preview));
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

  async clickProjectTasksPointsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete));
  }

  async doubleClickProjectTasksPointsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete));
  }

  async longPressProjectTasksPointsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete));
  }

  async expectProjectTasksPointsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), expected, timeoutMs);
  }

  async expectProjectTasksPointsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), substring, timeoutMs);
  }

  async expectProjectTasksPointsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), value, timeoutMs);
  }

  async expectProjectTasksPointsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), timeoutMs);
  }

  async expectProjectTasksPointsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete), count, timeoutMs);
  }

  async scrollProjectTasksPointsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsComplete));
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

  async clickProjectTasksPointsHistory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory));
  }

  async doubleClickProjectTasksPointsHistory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory));
  }

  async longPressProjectTasksPointsHistory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory));
  }

  async expectProjectTasksPointsHistoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), expected, timeoutMs);
  }

  async expectProjectTasksPointsHistoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), substring, timeoutMs);
  }

  async expectProjectTasksPointsHistoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), value, timeoutMs);
  }

  async expectProjectTasksPointsHistoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), timeoutMs);
  }

  async expectProjectTasksPointsHistoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory), count, timeoutMs);
  }

  async scrollProjectTasksPointsHistoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTasksPointsHistory));
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

  async clickProjectTaskHistory1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1));
  }

  async doubleClickProjectTaskHistory1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1));
  }

  async longPressProjectTaskHistory1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1));
  }

  async expectProjectTaskHistory1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), expected, timeoutMs);
  }

  async expectProjectTaskHistory1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), substring, timeoutMs);
  }

  async expectProjectTaskHistory1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), value, timeoutMs);
  }

  async expectProjectTaskHistory1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), timeoutMs);
  }

  async expectProjectTaskHistory1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1), count, timeoutMs);
  }

  async scrollProjectTaskHistory1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskHistory1));
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

  async doubleClickDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.details));
  }

  async longPressDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.details));
  }

  async expectDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.details), expected, timeoutMs);
  }

  async expectDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.details), substring, timeoutMs);
  }

  async expectDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.details), value, timeoutMs);
  }

  async expectDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.details), timeoutMs);
  }

  async expectDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.details), count, timeoutMs);
  }

  async scrollDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.details));
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

  async doubleClickActivity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activity));
  }

  async longPressActivity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activity));
  }

  async expectActivityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.activity), expected, timeoutMs);
  }

  async expectActivityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.activity), substring, timeoutMs);
  }

  async expectActivityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.activity), value, timeoutMs);
  }

  async expectActivityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.activity), timeoutMs);
  }

  async expectActivityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.activity), count, timeoutMs);
  }

  async scrollActivityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.activity));
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

  async doubleClickHealthAndCommuLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink));
  }

  async longPressHealthAndCommuLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink));
  }

  async expectHealthAndCommuLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), expected, timeoutMs);
  }

  async expectHealthAndCommuLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), substring, timeoutMs);
  }

  async expectHealthAndCommuLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), value, timeoutMs);
  }

  async expectHealthAndCommuLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), timeoutMs);
  }

  async expectHealthAndCommuLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink), count, timeoutMs);
  }

  async scrollHealthAndCommuLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.healthAndCommuLink));
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.status));
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.status), substring, timeoutMs);
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.status), count, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.status));
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

  async longPressEditMilestone(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editMilestone));
  }

  async expectEditMilestoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), expected, timeoutMs);
  }

  async expectEditMilestoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), substring, timeoutMs);
  }

  async expectEditMilestoneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), value, timeoutMs);
  }

  async expectEditMilestoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), timeoutMs);
  }

  async expectEditMilestoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editMilestone), count, timeoutMs);
  }

  async scrollEditMilestoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editMilestone));
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

  async clickWbsElementNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber));
  }

  async doubleClickWbsElementNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber));
  }

  async longPressWbsElementNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber));
  }

  async expectWbsElementNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), expected, timeoutMs);
  }

  async expectWbsElementNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), substring, timeoutMs);
  }

  async expectWbsElementNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), value, timeoutMs);
  }

  async expectWbsElementNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), timeoutMs);
  }

  async expectWbsElementNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber), count, timeoutMs);
  }

  async scrollWbsElementNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.wbsElementNumber));
  }

  async longPressHelpWbsElementNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber));
  }

  async expectHelpWbsElementNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), expected, timeoutMs);
  }

  async expectHelpWbsElementNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), substring, timeoutMs);
  }

  async expectHelpWbsElementNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), value, timeoutMs);
  }

  async expectHelpWbsElementNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), timeoutMs);
  }

  async expectHelpWbsElementNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber), count, timeoutMs);
  }

  async scrollHelpWbsElementNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWbsElementNumber));
  }

  async longPressEditWbsElementNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber));
  }

  async expectEditWbsElementNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), expected, timeoutMs);
  }

  async expectEditWbsElementNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), substring, timeoutMs);
  }

  async expectEditWbsElementNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), value, timeoutMs);
  }

  async expectEditWbsElementNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), timeoutMs);
  }

  async expectEditWbsElementNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber), count, timeoutMs);
  }

  async scrollEditWbsElementNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWbsElementNumber));
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

  async longPressEditWorkCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar));
  }

  async expectEditWorkCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), expected, timeoutMs);
  }

  async expectEditWorkCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), substring, timeoutMs);
  }

  async expectEditWorkCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), value, timeoutMs);
  }

  async expectEditWorkCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), timeoutMs);
  }

  async expectEditWorkCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar), count, timeoutMs);
  }

  async scrollEditWorkCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkCalendar));
  }

  async doubleClickAustraliaNswFull(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull));
  }

  async longPressAustraliaNswFull(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull));
  }

  async expectAustraliaNswFullHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), expected, timeoutMs);
  }

  async expectAustraliaNswFullContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), substring, timeoutMs);
  }

  async expectAustraliaNswFullValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), value, timeoutMs);
  }

  async expectAustraliaNswFullEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), timeoutMs);
  }

  async expectAustraliaNswFullCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull), count, timeoutMs);
  }

  async scrollAustraliaNswFullIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.australiaNswFull));
  }

  async clickActualCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost));
  }

  async doubleClickActualCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost));
  }

  async longPressActualCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost));
  }

  async expectActualCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actualCost), expected, timeoutMs);
  }

  async expectActualCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actualCost), substring, timeoutMs);
  }

  async expectActualCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actualCost), value, timeoutMs);
  }

  async expectActualCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actualCost), timeoutMs);
  }

  async expectActualCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actualCost), count, timeoutMs);
  }

  async scrollActualCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actualCost));
  }

  async longPressHelpActualCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost));
  }

  async expectHelpActualCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), expected, timeoutMs);
  }

  async expectHelpActualCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), substring, timeoutMs);
  }

  async expectHelpActualCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), value, timeoutMs);
  }

  async expectHelpActualCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), timeoutMs);
  }

  async expectHelpActualCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost), count, timeoutMs);
  }

  async scrollHelpActualCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActualCost));
  }

  async longPressEditActualCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualCost));
  }

  async expectEditActualCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), expected, timeoutMs);
  }

  async expectEditActualCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), substring, timeoutMs);
  }

  async expectEditActualCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), value, timeoutMs);
  }

  async expectEditActualCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), timeoutMs);
  }

  async expectEditActualCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editActualCost), count, timeoutMs);
  }

  async scrollEditActualCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActualCost));
  }

  async clickEstimatedHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours));
  }

  async doubleClickEstimatedHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours));
  }

  async longPressEstimatedHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours));
  }

  async expectEstimatedHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), expected, timeoutMs);
  }

  async expectEstimatedHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), substring, timeoutMs);
  }

  async expectEstimatedHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), value, timeoutMs);
  }

  async expectEstimatedHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), timeoutMs);
  }

  async expectEstimatedHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours), count, timeoutMs);
  }

  async scrollEstimatedHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedHours));
  }

  async longPressEditEstimatedHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours));
  }

  async expectEditEstimatedHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), expected, timeoutMs);
  }

  async expectEditEstimatedHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), substring, timeoutMs);
  }

  async expectEditEstimatedHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), value, timeoutMs);
  }

  async expectEditEstimatedHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), timeoutMs);
  }

  async expectEditEstimatedHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours), count, timeoutMs);
  }

  async scrollEditEstimatedHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedHours));
  }

  async clickWorkRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining));
  }

  async doubleClickWorkRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining));
  }

  async longPressWorkRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining));
  }

  async expectWorkRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), expected, timeoutMs);
  }

  async expectWorkRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), substring, timeoutMs);
  }

  async expectWorkRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), value, timeoutMs);
  }

  async expectWorkRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), timeoutMs);
  }

  async expectWorkRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.workRemaining), count, timeoutMs);
  }

  async scrollWorkRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.workRemaining));
  }

  async longPressHelpWorkRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining));
  }

  async expectHelpWorkRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), expected, timeoutMs);
  }

  async expectHelpWorkRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), substring, timeoutMs);
  }

  async expectHelpWorkRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), value, timeoutMs);
  }

  async expectHelpWorkRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), timeoutMs);
  }

  async expectHelpWorkRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining), count, timeoutMs);
  }

  async scrollHelpWorkRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpWorkRemaining));
  }

  async longPressEditWorkRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining));
  }

  async expectEditWorkRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), expected, timeoutMs);
  }

  async expectEditWorkRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), substring, timeoutMs);
  }

  async expectEditWorkRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), value, timeoutMs);
  }

  async expectEditWorkRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), timeoutMs);
  }

  async expectEditWorkRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining), count, timeoutMs);
  }

  async scrollEditWorkRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editWorkRemaining));
  }

  async clickProjectedHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours));
  }

  async doubleClickProjectedHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours));
  }

  async longPressProjectedHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours));
  }

  async expectProjectedHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), expected, timeoutMs);
  }

  async expectProjectedHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), substring, timeoutMs);
  }

  async expectProjectedHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), value, timeoutMs);
  }

  async expectProjectedHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), timeoutMs);
  }

  async expectProjectedHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectedHours), count, timeoutMs);
  }

  async scrollProjectedHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectedHours));
  }

  async longPressHelpProjectedHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours));
  }

  async expectHelpProjectedHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), expected, timeoutMs);
  }

  async expectHelpProjectedHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), substring, timeoutMs);
  }

  async expectHelpProjectedHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), value, timeoutMs);
  }

  async expectHelpProjectedHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), timeoutMs);
  }

  async expectHelpProjectedHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours), count, timeoutMs);
  }

  async scrollHelpProjectedHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectedHours));
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

  async longPressHelpCompleted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted));
  }

  async expectHelpCompletedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), expected, timeoutMs);
  }

  async expectHelpCompletedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), substring, timeoutMs);
  }

  async expectHelpCompletedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), value, timeoutMs);
  }

  async expectHelpCompletedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), timeoutMs);
  }

  async expectHelpCompletedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted), count, timeoutMs);
  }

  async scrollHelpCompletedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpCompleted));
  }

  async longPressEditCompleted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editCompleted));
  }

  async expectEditCompletedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), expected, timeoutMs);
  }

  async expectEditCompletedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), substring, timeoutMs);
  }

  async expectEditCompletedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), value, timeoutMs);
  }

  async expectEditCompletedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), timeoutMs);
  }

  async expectEditCompletedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editCompleted), count, timeoutMs);
  }

  async scrollEditCompletedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editCompleted));
  }

  async clickTimecardActualHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours));
  }

  async doubleClickTimecardActualHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours));
  }

  async longPressTimecardActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours));
  }

  async expectTimecardActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), expected, timeoutMs);
  }

  async expectTimecardActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), substring, timeoutMs);
  }

  async expectTimecardActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), value, timeoutMs);
  }

  async expectTimecardActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), timeoutMs);
  }

  async expectTimecardActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours), count, timeoutMs);
  }

  async scrollTimecardActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.timecardActualHours));
  }

  async longPressHelpTimecardActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours));
  }

  async expectHelpTimecardActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), expected, timeoutMs);
  }

  async expectHelpTimecardActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), substring, timeoutMs);
  }

  async expectHelpTimecardActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), value, timeoutMs);
  }

  async expectHelpTimecardActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), timeoutMs);
  }

  async expectHelpTimecardActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours), count, timeoutMs);
  }

  async scrollHelpTimecardActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTimecardActualHours));
  }

  async longPressEditTimecardActualHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours));
  }

  async expectEditTimecardActualHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), expected, timeoutMs);
  }

  async expectEditTimecardActualHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), substring, timeoutMs);
  }

  async expectEditTimecardActualHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), value, timeoutMs);
  }

  async expectEditTimecardActualHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), timeoutMs);
  }

  async expectEditTimecardActualHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours), count, timeoutMs);
  }

  async scrollEditTimecardActualHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTimecardActualHours));
  }

  async clickBlocked(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked));
  }

  async doubleClickBlocked(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked));
  }

  async longPressBlocked(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked));
  }

  async expectBlockedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.blocked), expected, timeoutMs);
  }

  async expectBlockedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.blocked), substring, timeoutMs);
  }

  async expectBlockedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.blocked), value, timeoutMs);
  }

  async expectBlockedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.blocked), timeoutMs);
  }

  async expectBlockedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.blocked), count, timeoutMs);
  }

  async scrollBlockedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.blocked));
  }

  async longPressEditBlocked(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editBlocked));
  }

  async expectEditBlockedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), expected, timeoutMs);
  }

  async expectEditBlockedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), substring, timeoutMs);
  }

  async expectEditBlockedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), value, timeoutMs);
  }

  async expectEditBlockedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), timeoutMs);
  }

  async expectEditBlockedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editBlocked), count, timeoutMs);
  }

  async scrollEditBlockedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editBlocked));
  }

  async clickHoursRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining));
  }

  async doubleClickHoursRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining));
  }

  async longPressHoursRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining));
  }

  async expectHoursRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), expected, timeoutMs);
  }

  async expectHoursRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), substring, timeoutMs);
  }

  async expectHoursRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), value, timeoutMs);
  }

  async expectHoursRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), timeoutMs);
  }

  async expectHoursRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining), count, timeoutMs);
  }

  async scrollHoursRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hoursRemaining));
  }

  async longPressHelpHoursRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining));
  }

  async expectHelpHoursRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), expected, timeoutMs);
  }

  async expectHelpHoursRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), substring, timeoutMs);
  }

  async expectHelpHoursRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), value, timeoutMs);
  }

  async expectHelpHoursRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), timeoutMs);
  }

  async expectHelpHoursRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining), count, timeoutMs);
  }

  async scrollHelpHoursRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHoursRemaining));
  }

  async clickNumberOfAssignments(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments));
  }

  async doubleClickNumberOfAssignments(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments));
  }

  async longPressNumberOfAssignments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments));
  }

  async expectNumberOfAssignmentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), expected, timeoutMs);
  }

  async expectNumberOfAssignmentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), substring, timeoutMs);
  }

  async expectNumberOfAssignmentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), value, timeoutMs);
  }

  async expectNumberOfAssignmentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), timeoutMs);
  }

  async expectNumberOfAssignmentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments), count, timeoutMs);
  }

  async scrollNumberOfAssignmentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.numberOfAssignments));
  }

  async longPressHelpNumberOfAssignments(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments));
  }

  async expectHelpNumberOfAssignmentsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), expected, timeoutMs);
  }

  async expectHelpNumberOfAssignmentsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), substring, timeoutMs);
  }

  async expectHelpNumberOfAssignmentsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), value, timeoutMs);
  }

  async expectHelpNumberOfAssignmentsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), timeoutMs);
  }

  async expectHelpNumberOfAssignmentsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments), count, timeoutMs);
  }

  async scrollHelpNumberOfAssignmentsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpNumberOfAssignments));
  }

  async clickEstimatedTimeToCompletion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion));
  }

  async doubleClickEstimatedTimeToCompletion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion));
  }

  async longPressEstimatedTimeToCompletion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion));
  }

  async expectEstimatedTimeToCompletionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), expected, timeoutMs);
  }

  async expectEstimatedTimeToCompletionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), substring, timeoutMs);
  }

  async expectEstimatedTimeToCompletionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), value, timeoutMs);
  }

  async expectEstimatedTimeToCompletionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), timeoutMs);
  }

  async expectEstimatedTimeToCompletionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion), count, timeoutMs);
  }

  async scrollEstimatedTimeToCompletionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.estimatedTimeToCompletion));
  }

  async longPressHelpEstimatedTimeTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo));
  }

  async expectHelpEstimatedTimeToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), expected, timeoutMs);
  }

  async expectHelpEstimatedTimeToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), substring, timeoutMs);
  }

  async expectHelpEstimatedTimeToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), value, timeoutMs);
  }

  async expectHelpEstimatedTimeToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), timeoutMs);
  }

  async expectHelpEstimatedTimeToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo), count, timeoutMs);
  }

  async scrollHelpEstimatedTimeToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpEstimatedTimeTo));
  }

  async longPressEditEstimatedTimeTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo));
  }

  async expectEditEstimatedTimeToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), expected, timeoutMs);
  }

  async expectEditEstimatedTimeToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), substring, timeoutMs);
  }

  async expectEditEstimatedTimeToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), value, timeoutMs);
  }

  async expectEditEstimatedTimeToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), timeoutMs);
  }

  async expectEditEstimatedTimeToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo), count, timeoutMs);
  }

  async scrollEditEstimatedTimeToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editEstimatedTimeTo));
  }

  async clickSummary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.summary));
  }

  async doubleClickSummary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.summary));
  }

  async longPressSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.summary));
  }

  async expectSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.summary), expected, timeoutMs);
  }

  async expectSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.summary), substring, timeoutMs);
  }

  async expectSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.summary), value, timeoutMs);
  }

  async expectSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.summary), timeoutMs);
  }

  async expectSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.summary), count, timeoutMs);
  }

  async scrollSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.summary));
  }

  async longPressEditSummary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSummary));
  }

  async expectEditSummaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editSummary), expected, timeoutMs);
  }

  async expectEditSummaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editSummary), substring, timeoutMs);
  }

  async expectEditSummaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editSummary), value, timeoutMs);
  }

  async expectEditSummaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editSummary), timeoutMs);
  }

  async expectEditSummaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editSummary), count, timeoutMs);
  }

  async scrollEditSummaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSummary));
  }

  async clickPercentCompleteHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours));
  }

  async doubleClickPercentCompleteHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours));
  }

  async longPressPercentCompleteHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours));
  }

  async expectPercentCompleteHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), expected, timeoutMs);
  }

  async expectPercentCompleteHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), substring, timeoutMs);
  }

  async expectPercentCompleteHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), value, timeoutMs);
  }

  async expectPercentCompleteHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), timeoutMs);
  }

  async expectPercentCompleteHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours), count, timeoutMs);
  }

  async scrollPercentCompleteHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteHours));
  }

  async clickDoNotAutoUpdate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate));
  }

  async doubleClickDoNotAutoUpdate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate));
  }

  async longPressDoNotAutoUpdate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate));
  }

  async expectDoNotAutoUpdateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), expected, timeoutMs);
  }

  async expectDoNotAutoUpdateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), substring, timeoutMs);
  }

  async expectDoNotAutoUpdateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), value, timeoutMs);
  }

  async expectDoNotAutoUpdateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), timeoutMs);
  }

  async expectDoNotAutoUpdateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate), count, timeoutMs);
  }

  async scrollDoNotAutoUpdateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate));
  }

  async longPressEditDoNotAuto(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto));
  }

  async expectEditDoNotAutoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), expected, timeoutMs);
  }

  async expectEditDoNotAutoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), substring, timeoutMs);
  }

  async expectEditDoNotAutoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), value, timeoutMs);
  }

  async expectEditDoNotAutoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), timeoutMs);
  }

  async expectEditDoNotAutoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto), count, timeoutMs);
  }

  async scrollEditDoNotAutoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAuto));
  }

  async clickPercentCompleteTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks));
  }

  async doubleClickPercentCompleteTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks));
  }

  async longPressPercentCompleteTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks));
  }

  async expectPercentCompleteTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), expected, timeoutMs);
  }

  async expectPercentCompleteTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), substring, timeoutMs);
  }

  async expectPercentCompleteTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), value, timeoutMs);
  }

  async expectPercentCompleteTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), timeoutMs);
  }

  async expectPercentCompleteTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks), count, timeoutMs);
  }

  async scrollPercentCompleteTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompleteTasks));
  }

  async longPressEditPercentCompleteTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks));
  }

  async expectEditPercentCompleteTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), expected, timeoutMs);
  }

  async expectEditPercentCompleteTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), substring, timeoutMs);
  }

  async expectEditPercentCompleteTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), value, timeoutMs);
  }

  async expectEditPercentCompleteTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), timeoutMs);
  }

  async expectEditPercentCompleteTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks), count, timeoutMs);
  }

  async scrollEditPercentCompleteTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompleteTasks));
  }

  async clickDoNotAutoUpdate3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3));
  }

  async doubleClickDoNotAutoUpdate3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3));
  }

  async longPressDoNotAutoUpdate3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3));
  }

  async expectDoNotAutoUpdate3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), expected, timeoutMs);
  }

  async expectDoNotAutoUpdate3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), substring, timeoutMs);
  }

  async expectDoNotAutoUpdate3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), value, timeoutMs);
  }

  async expectDoNotAutoUpdate3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), timeoutMs);
  }

  async expectDoNotAutoUpdate3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3), count, timeoutMs);
  }

  async scrollDoNotAutoUpdate3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.doNotAutoUpdate3));
  }

  async longPressHelpDoNotAuto(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto));
  }

  async expectHelpDoNotAutoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), expected, timeoutMs);
  }

  async expectHelpDoNotAutoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), substring, timeoutMs);
  }

  async expectHelpDoNotAutoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), value, timeoutMs);
  }

  async expectHelpDoNotAutoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), timeoutMs);
  }

  async expectHelpDoNotAutoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto), count, timeoutMs);
  }

  async scrollHelpDoNotAutoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDoNotAuto));
  }

  async longPressEditDoNotAutoButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton));
  }

  async expectEditDoNotAutoButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), expected, timeoutMs);
  }

  async expectEditDoNotAutoButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), substring, timeoutMs);
  }

  async expectEditDoNotAutoButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), value, timeoutMs);
  }

  async expectEditDoNotAutoButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), timeoutMs);
  }

  async expectEditDoNotAutoButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton), count, timeoutMs);
  }

  async scrollEditDoNotAutoButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDoNotAutoButton));
  }

  async clickPercentCompletePoints(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints));
  }

  async doubleClickPercentCompletePoints(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints));
  }

  async longPressPercentCompletePoints(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints));
  }

  async expectPercentCompletePointsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), expected, timeoutMs);
  }

  async expectPercentCompletePointsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), substring, timeoutMs);
  }

  async expectPercentCompletePointsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), value, timeoutMs);
  }

  async expectPercentCompletePointsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), timeoutMs);
  }

  async expectPercentCompletePointsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints), count, timeoutMs);
  }

  async scrollPercentCompletePointsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.percentCompletePoints));
  }

  async longPressEditPercentCompletePoints(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints));
  }

  async expectEditPercentCompletePointsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), expected, timeoutMs);
  }

  async expectEditPercentCompletePointsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), substring, timeoutMs);
  }

  async expectEditPercentCompletePointsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), value, timeoutMs);
  }

  async expectEditPercentCompletePointsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), timeoutMs);
  }

  async expectEditPercentCompletePointsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints), count, timeoutMs);
  }

  async scrollEditPercentCompletePointsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPercentCompletePoints));
  }

  async clickActionSyncWithExternal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal));
  }

  async doubleClickActionSyncWithExternal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal));
  }

  async longPressActionSyncWithExternal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal));
  }

  async expectActionSyncWithExternalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), expected, timeoutMs);
  }

  async expectActionSyncWithExternalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), substring, timeoutMs);
  }

  async expectActionSyncWithExternalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), value, timeoutMs);
  }

  async expectActionSyncWithExternalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), timeoutMs);
  }

  async expectActionSyncWithExternalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal), count, timeoutMs);
  }

  async scrollActionSyncWithExternalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.actionSyncWithExternal));
  }

  async longPressHelpActionSyncWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith));
  }

  async expectHelpActionSyncWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), expected, timeoutMs);
  }

  async expectHelpActionSyncWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), substring, timeoutMs);
  }

  async expectHelpActionSyncWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), value, timeoutMs);
  }

  async expectHelpActionSyncWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), timeoutMs);
  }

  async expectHelpActionSyncWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith), count, timeoutMs);
  }

  async scrollHelpActionSyncWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpActionSyncWith));
  }

  async longPressEditActionSyncWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith));
  }

  async expectEditActionSyncWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), expected, timeoutMs);
  }

  async expectEditActionSyncWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), substring, timeoutMs);
  }

  async expectEditActionSyncWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), value, timeoutMs);
  }

  async expectEditActionSyncWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), timeoutMs);
  }

  async expectEditActionSyncWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith), count, timeoutMs);
  }

  async scrollEditActionSyncWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editActionSyncWith));
  }

  async clickPoints(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.points));
  }

  async doubleClickPoints(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.points));
  }

  async longPressPoints(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.points));
  }

  async expectPointsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.points), expected, timeoutMs);
  }

  async expectPointsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.points), substring, timeoutMs);
  }

  async expectPointsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.points), value, timeoutMs);
  }

  async expectPointsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.points), timeoutMs);
  }

  async expectPointsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.points), count, timeoutMs);
  }

  async scrollPointsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.points));
  }

  async longPressEditPoints(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPoints));
  }

  async expectEditPointsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPoints), expected, timeoutMs);
  }

  async expectEditPointsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPoints), substring, timeoutMs);
  }

  async expectEditPointsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPoints), value, timeoutMs);
  }

  async expectEditPointsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPoints), timeoutMs);
  }

  async expectEditPointsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPoints), count, timeoutMs);
  }

  async scrollEditPointsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPoints));
  }

  async clickExcludeFromExternalCalendar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar));
  }

  async doubleClickExcludeFromExternalCalendar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar));
  }

  async longPressExcludeFromExternalCalendar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar));
  }

  async expectExcludeFromExternalCalendarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), expected, timeoutMs);
  }

  async expectExcludeFromExternalCalendarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), substring, timeoutMs);
  }

  async expectExcludeFromExternalCalendarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), value, timeoutMs);
  }

  async expectExcludeFromExternalCalendarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), timeoutMs);
  }

  async expectExcludeFromExternalCalendarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar), count, timeoutMs);
  }

  async scrollExcludeFromExternalCalendarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.excludeFromExternalCalendar));
  }

  async longPressHelpExcludeFromExternal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal));
  }

  async expectHelpExcludeFromExternalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), expected, timeoutMs);
  }

  async expectHelpExcludeFromExternalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), substring, timeoutMs);
  }

  async expectHelpExcludeFromExternalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), value, timeoutMs);
  }

  async expectHelpExcludeFromExternalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), timeoutMs);
  }

  async expectHelpExcludeFromExternalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal), count, timeoutMs);
  }

  async scrollHelpExcludeFromExternalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExcludeFromExternal));
  }

  async longPressEditExcludeFromExternal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal));
  }

  async expectEditExcludeFromExternalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), expected, timeoutMs);
  }

  async expectEditExcludeFromExternalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), substring, timeoutMs);
  }

  async expectEditExcludeFromExternalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), value, timeoutMs);
  }

  async expectEditExcludeFromExternalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), timeoutMs);
  }

  async expectEditExcludeFromExternalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal), count, timeoutMs);
  }

  async scrollEditExcludeFromExternalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExcludeFromExternal));
  }

  async clickPointsComplete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete));
  }

  async doubleClickPointsComplete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete));
  }

  async longPressPointsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete));
  }

  async expectPointsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), expected, timeoutMs);
  }

  async expectPointsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), substring, timeoutMs);
  }

  async expectPointsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), value, timeoutMs);
  }

  async expectPointsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), timeoutMs);
  }

  async expectPointsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete), count, timeoutMs);
  }

  async scrollPointsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsComplete));
  }

  async longPressHelpPointsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete));
  }

  async expectHelpPointsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), expected, timeoutMs);
  }

  async expectHelpPointsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), substring, timeoutMs);
  }

  async expectHelpPointsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), value, timeoutMs);
  }

  async expectHelpPointsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), timeoutMs);
  }

  async expectHelpPointsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete), count, timeoutMs);
  }

  async scrollHelpPointsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpPointsComplete));
  }

  async longPressEditPointsComplete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete));
  }

  async expectEditPointsCompleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), expected, timeoutMs);
  }

  async expectEditPointsCompleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), substring, timeoutMs);
  }

  async expectEditPointsCompleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), value, timeoutMs);
  }

  async expectEditPointsCompleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), timeoutMs);
  }

  async expectEditPointsCompleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete), count, timeoutMs);
  }

  async scrollEditPointsCompleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsComplete));
  }

  async clickTaskPlaybookContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent));
  }

  async doubleClickTaskPlaybookContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent));
  }

  async longPressTaskPlaybookContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent));
  }

  async expectTaskPlaybookContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), expected, timeoutMs);
  }

  async expectTaskPlaybookContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), substring, timeoutMs);
  }

  async expectTaskPlaybookContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), value, timeoutMs);
  }

  async expectTaskPlaybookContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), timeoutMs);
  }

  async expectTaskPlaybookContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent), count, timeoutMs);
  }

  async scrollTaskPlaybookContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskPlaybookContent));
  }

  async longPressEditTaskPlaybookContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent));
  }

  async expectEditTaskPlaybookContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), expected, timeoutMs);
  }

  async expectEditTaskPlaybookContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), substring, timeoutMs);
  }

  async expectEditTaskPlaybookContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), value, timeoutMs);
  }

  async expectEditTaskPlaybookContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), timeoutMs);
  }

  async expectEditTaskPlaybookContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent), count, timeoutMs);
  }

  async scrollEditTaskPlaybookContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskPlaybookContent));
  }

  async clickPointsRemaining(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining));
  }

  async doubleClickPointsRemaining(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining));
  }

  async longPressPointsRemaining(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining));
  }

  async expectPointsRemainingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), expected, timeoutMs);
  }

  async expectPointsRemainingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), substring, timeoutMs);
  }

  async expectPointsRemainingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), value, timeoutMs);
  }

  async expectPointsRemainingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), timeoutMs);
  }

  async expectPointsRemainingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining), count, timeoutMs);
  }

  async scrollPointsRemainingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsRemaining));
  }

  async clickKeyTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType));
  }

  async doubleClickKeyTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType));
  }

  async longPressKeyTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType));
  }

  async expectKeyTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), expected, timeoutMs);
  }

  async expectKeyTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), substring, timeoutMs);
  }

  async expectKeyTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), value, timeoutMs);
  }

  async expectKeyTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), timeoutMs);
  }

  async expectKeyTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType), count, timeoutMs);
  }

  async scrollKeyTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.keyTaskType));
  }

  async longPressEditKeyTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType));
  }

  async expectEditKeyTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), expected, timeoutMs);
  }

  async expectEditKeyTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), substring, timeoutMs);
  }

  async expectEditKeyTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), value, timeoutMs);
  }

  async expectEditKeyTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), timeoutMs);
  }

  async expectEditKeyTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType), count, timeoutMs);
  }

  async scrollEditKeyTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editKeyTaskType));
  }

  async clickPointsBaseline(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline));
  }

  async doubleClickPointsBaseline(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline));
  }

  async longPressPointsBaseline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline));
  }

  async expectPointsBaselineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), expected, timeoutMs);
  }

  async expectPointsBaselineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), substring, timeoutMs);
  }

  async expectPointsBaselineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), value, timeoutMs);
  }

  async expectPointsBaselineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), timeoutMs);
  }

  async expectPointsBaselineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline), count, timeoutMs);
  }

  async scrollPointsBaselineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pointsBaseline));
  }

  async longPressEditPointsBaseline(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline));
  }

  async expectEditPointsBaselineHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), expected, timeoutMs);
  }

  async expectEditPointsBaselineContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), substring, timeoutMs);
  }

  async expectEditPointsBaselineValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), value, timeoutMs);
  }

  async expectEditPointsBaselineEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), timeoutMs);
  }

  async expectEditPointsBaselineCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline), count, timeoutMs);
  }

  async scrollEditPointsBaselineIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPointsBaseline));
  }

  async clickTaskNumber(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber));
  }

  async doubleClickTaskNumber(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber));
  }

  async longPressTaskNumber(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber));
  }

  async expectTaskNumberHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), expected, timeoutMs);
  }

  async expectTaskNumberContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), substring, timeoutMs);
  }

  async expectTaskNumberValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), value, timeoutMs);
  }

  async expectTaskNumberEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), timeoutMs);
  }

  async expectTaskNumberCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskNumber), count, timeoutMs);
  }

  async scrollTaskNumberIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNumber));
  }

  async clickProjectTaskUniqueId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId));
  }

  async doubleClickProjectTaskUniqueId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId));
  }

  async longPressProjectTaskUniqueId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId));
  }

  async expectProjectTaskUniqueIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), expected, timeoutMs);
  }

  async expectProjectTaskUniqueIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), substring, timeoutMs);
  }

  async expectProjectTaskUniqueIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), value, timeoutMs);
  }

  async expectProjectTaskUniqueIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), timeoutMs);
  }

  async expectProjectTaskUniqueIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId), count, timeoutMs);
  }

  async scrollProjectTaskUniqueIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskUniqueId));
  }

  async longPressEditProjectTaskUnique(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique));
  }

  async expectEditProjectTaskUniqueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), expected, timeoutMs);
  }

  async expectEditProjectTaskUniqueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), substring, timeoutMs);
  }

  async expectEditProjectTaskUniqueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), value, timeoutMs);
  }

  async expectEditProjectTaskUniqueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), timeoutMs);
  }

  async expectEditProjectTaskUniqueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique), count, timeoutMs);
  }

  async scrollEditProjectTaskUniqueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskUnique));
  }

  async clickPushReason(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason));
  }

  async doubleClickPushReason(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason));
  }

  async longPressPushReason(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason));
  }

  async expectPushReasonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.pushReason), expected, timeoutMs);
  }

  async expectPushReasonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.pushReason), substring, timeoutMs);
  }

  async expectPushReasonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.pushReason), value, timeoutMs);
  }

  async expectPushReasonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.pushReason), timeoutMs);
  }

  async expectPushReasonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.pushReason), count, timeoutMs);
  }

  async scrollPushReasonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.pushReason));
  }

  async longPressEditPushReason(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPushReason));
  }

  async expectEditPushReasonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), expected, timeoutMs);
  }

  async expectEditPushReasonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), substring, timeoutMs);
  }

  async expectEditPushReasonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), value, timeoutMs);
  }

  async expectEditPushReasonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), timeoutMs);
  }

  async expectEditPushReasonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editPushReason), count, timeoutMs);
  }

  async scrollEditPushReasonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editPushReason));
  }

  async clickAssignedResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources));
  }

  async doubleClickAssignedResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources));
  }

  async longPressAssignedResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources));
  }

  async expectAssignedResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), expected, timeoutMs);
  }

  async expectAssignedResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), substring, timeoutMs);
  }

  async expectAssignedResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), value, timeoutMs);
  }

  async expectAssignedResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), timeoutMs);
  }

  async expectAssignedResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.assignedResources), count, timeoutMs);
  }

  async scrollAssignedResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResources));
  }

  async longPressHelpAssignedResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources));
  }

  async expectHelpAssignedResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), expected, timeoutMs);
  }

  async expectHelpAssignedResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), substring, timeoutMs);
  }

  async expectHelpAssignedResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), value, timeoutMs);
  }

  async expectHelpAssignedResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), timeoutMs);
  }

  async expectHelpAssignedResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources), count, timeoutMs);
  }

  async scrollHelpAssignedResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpAssignedResources));
  }

  async longPressEditAssignedResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources));
  }

  async expectEditAssignedResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), expected, timeoutMs);
  }

  async expectEditAssignedResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), substring, timeoutMs);
  }

  async expectEditAssignedResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), value, timeoutMs);
  }

  async expectEditAssignedResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), timeoutMs);
  }

  async expectEditAssignedResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources), count, timeoutMs);
  }

  async scrollEditAssignedResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResources));
  }

  async clickAssignedResourcesLong(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong));
  }

  async doubleClickAssignedResourcesLong(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong));
  }

  async longPressAssignedResourcesLong(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong));
  }

  async expectAssignedResourcesLongHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), expected, timeoutMs);
  }

  async expectAssignedResourcesLongContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), substring, timeoutMs);
  }

  async expectAssignedResourcesLongValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), value, timeoutMs);
  }

  async expectAssignedResourcesLongEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), timeoutMs);
  }

  async expectAssignedResourcesLongCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong), count, timeoutMs);
  }

  async scrollAssignedResourcesLongIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.assignedResourcesLong));
  }

  async longPressEditAssignedResourcesLong(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong));
  }

  async expectEditAssignedResourcesLongHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), expected, timeoutMs);
  }

  async expectEditAssignedResourcesLongContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), substring, timeoutMs);
  }

  async expectEditAssignedResourcesLongValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), value, timeoutMs);
  }

  async expectEditAssignedResourcesLongEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), timeoutMs);
  }

  async expectEditAssignedResourcesLongCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong), count, timeoutMs);
  }

  async scrollEditAssignedResourcesLongIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editAssignedResourcesLong));
  }

  async longPressDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.description));
  }

  async expectDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.description), expected, timeoutMs);
  }

  async expectDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.description), substring, timeoutMs);
  }

  async expectDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.description), value, timeoutMs);
  }

  async expectDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.description), timeoutMs);
  }

  async expectDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.description), count, timeoutMs);
  }

  async scrollDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.description));
  }

  async longPressEditDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDescription));
  }

  async expectEditDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editDescription), expected, timeoutMs);
  }

  async expectEditDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editDescription), substring, timeoutMs);
  }

  async expectEditDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editDescription), value, timeoutMs);
  }

  async expectEditDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editDescription), timeoutMs);
  }

  async expectEditDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editDescription), count, timeoutMs);
  }

  async scrollEditDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDescription));
  }

  async clickNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes));
  }

  async doubleClickNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes));
  }

  async longPressNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes));
  }

  async expectNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.notes), expected, timeoutMs);
  }

  async expectNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.notes), substring, timeoutMs);
  }

  async expectNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.notes), value, timeoutMs);
  }

  async expectNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.notes), timeoutMs);
  }

  async expectNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.notes), count, timeoutMs);
  }

  async scrollNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.notes));
  }

  async longPressEditNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editNotes));
  }

  async expectEditNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editNotes), expected, timeoutMs);
  }

  async expectEditNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editNotes), substring, timeoutMs);
  }

  async expectEditNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editNotes), value, timeoutMs);
  }

  async expectEditNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editNotes), timeoutMs);
  }

  async expectEditNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editNotes), count, timeoutMs);
  }

  async scrollEditNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editNotes));
  }

  async clickLongDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription));
  }

  async doubleClickLongDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription));
  }

  async longPressLongDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription));
  }

  async expectLongDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.longDescription), expected, timeoutMs);
  }

  async expectLongDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.longDescription), substring, timeoutMs);
  }

  async expectLongDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.longDescription), value, timeoutMs);
  }

  async expectLongDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.longDescription), timeoutMs);
  }

  async expectLongDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.longDescription), count, timeoutMs);
  }

  async scrollLongDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.longDescription));
  }

  async longPressEditLongDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription));
  }

  async expectEditLongDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), expected, timeoutMs);
  }

  async expectEditLongDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), substring, timeoutMs);
  }

  async expectEditLongDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), value, timeoutMs);
  }

  async expectEditLongDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), timeoutMs);
  }

  async expectEditLongDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription), count, timeoutMs);
  }

  async scrollEditLongDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editLongDescription));
  }

  async clickDetailedNotes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes));
  }

  async doubleClickDetailedNotes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes));
  }

  async longPressDetailedNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes));
  }

  async expectDetailedNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), expected, timeoutMs);
  }

  async expectDetailedNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), substring, timeoutMs);
  }

  async expectDetailedNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), value, timeoutMs);
  }

  async expectDetailedNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), timeoutMs);
  }

  async expectDetailedNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes), count, timeoutMs);
  }

  async scrollDetailedNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.detailedNotes));
  }

  async longPressHelpDetailedNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes));
  }

  async expectHelpDetailedNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), expected, timeoutMs);
  }

  async expectHelpDetailedNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), substring, timeoutMs);
  }

  async expectHelpDetailedNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), value, timeoutMs);
  }

  async expectHelpDetailedNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), timeoutMs);
  }

  async expectHelpDetailedNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes), count, timeoutMs);
  }

  async scrollHelpDetailedNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpDetailedNotes));
  }

  async longPressEditDetailedNotes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes));
  }

  async expectEditDetailedNotesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), expected, timeoutMs);
  }

  async expectEditDetailedNotesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), substring, timeoutMs);
  }

  async expectEditDetailedNotesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), value, timeoutMs);
  }

  async expectEditDetailedNotesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), timeoutMs);
  }

  async expectEditDetailedNotesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes), count, timeoutMs);
  }

  async scrollEditDetailedNotesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editDetailedNotes));
  }

  async clickSynchronizeMilestoneAndTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask));
  }

  async doubleClickSynchronizeMilestoneAndTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask));
  }

  async longPressSynchronizeMilestoneAndTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask));
  }

  async expectSynchronizeMilestoneAndTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), expected, timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), substring, timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), value, timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), timeoutMs);
  }

  async expectSynchronizeMilestoneAndTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask), count, timeoutMs);
  }

  async scrollSynchronizeMilestoneAndTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.synchronizeMilestoneAndTask));
  }

  async longPressHelpSynchronizeMilestoneAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd));
  }

  async expectHelpSynchronizeMilestoneAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), expected, timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), substring, timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), value, timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectHelpSynchronizeMilestoneAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd), count, timeoutMs);
  }

  async scrollHelpSynchronizeMilestoneAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpSynchronizeMilestoneAnd));
  }

  async longPressEditSynchronizeMilestoneAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd));
  }

  async expectEditSynchronizeMilestoneAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), expected, timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), substring, timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), value, timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), timeoutMs);
  }

  async expectEditSynchronizeMilestoneAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd), count, timeoutMs);
  }

  async scrollEditSynchronizeMilestoneAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editSynchronizeMilestoneAnd));
  }

  async longPressTaskHierarchy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy));
  }

  async expectTaskHierarchyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), expected, timeoutMs);
  }

  async expectTaskHierarchyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), substring, timeoutMs);
  }

  async expectTaskHierarchyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), value, timeoutMs);
  }

  async expectTaskHierarchyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), timeoutMs);
  }

  async expectTaskHierarchyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy), count, timeoutMs);
  }

  async scrollTaskHierarchyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskHierarchy));
  }

  async clickParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask));
  }

  async doubleClickParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask));
  }

  async longPressParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask));
  }

  async expectParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.parentTask), expected, timeoutMs);
  }

  async expectParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.parentTask), substring, timeoutMs);
  }

  async expectParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.parentTask), value, timeoutMs);
  }

  async expectParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.parentTask), timeoutMs);
  }

  async expectParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.parentTask), count, timeoutMs);
  }

  async scrollParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTask));
  }

  async longPressHelpParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask));
  }

  async expectHelpParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), expected, timeoutMs);
  }

  async expectHelpParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), substring, timeoutMs);
  }

  async expectHelpParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), value, timeoutMs);
  }

  async expectHelpParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), timeoutMs);
  }

  async expectHelpParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask), count, timeoutMs);
  }

  async scrollHelpParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpParentTask));
  }

  async longPressEditParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editParentTask));
  }

  async expectEditParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), expected, timeoutMs);
  }

  async expectEditParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), substring, timeoutMs);
  }

  async expectEditParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), value, timeoutMs);
  }

  async expectEditParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), timeoutMs);
  }

  async expectEditParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editParentTask), count, timeoutMs);
  }

  async scrollEditParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editParentTask));
  }

  async clickTopLevelParentTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask));
  }

  async doubleClickTopLevelParentTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask));
  }

  async longPressTopLevelParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask));
  }

  async expectTopLevelParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), expected, timeoutMs);
  }

  async expectTopLevelParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), substring, timeoutMs);
  }

  async expectTopLevelParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), value, timeoutMs);
  }

  async expectTopLevelParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), timeoutMs);
  }

  async expectTopLevelParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask), count, timeoutMs);
  }

  async scrollTopLevelParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.topLevelParentTask));
  }

  async longPressHelpTopLevelParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask));
  }

  async expectHelpTopLevelParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), expected, timeoutMs);
  }

  async expectHelpTopLevelParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), substring, timeoutMs);
  }

  async expectHelpTopLevelParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), value, timeoutMs);
  }

  async expectHelpTopLevelParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), timeoutMs);
  }

  async expectHelpTopLevelParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask), count, timeoutMs);
  }

  async scrollHelpTopLevelParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTopLevelParentTask));
  }

  async longPressEditTopLevelParentTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask));
  }

  async expectEditTopLevelParentTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), expected, timeoutMs);
  }

  async expectEditTopLevelParentTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), substring, timeoutMs);
  }

  async expectEditTopLevelParentTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), value, timeoutMs);
  }

  async expectEditTopLevelParentTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), timeoutMs);
  }

  async expectEditTopLevelParentTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask), count, timeoutMs);
  }

  async scrollEditTopLevelParentTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTopLevelParentTask));
  }

  async clickParentTaskStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate));
  }

  async doubleClickParentTaskStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate));
  }

  async longPressParentTaskStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate));
  }

  async expectParentTaskStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), expected, timeoutMs);
  }

  async expectParentTaskStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), substring, timeoutMs);
  }

  async expectParentTaskStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), value, timeoutMs);
  }

  async expectParentTaskStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), timeoutMs);
  }

  async expectParentTaskStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate), count, timeoutMs);
  }

  async scrollParentTaskStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate));
  }

  async clickParentTaskEndDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate));
  }

  async doubleClickParentTaskEndDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate));
  }

  async longPressParentTaskEndDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate));
  }

  async expectParentTaskEndDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), expected, timeoutMs);
  }

  async expectParentTaskEndDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), substring, timeoutMs);
  }

  async expectParentTaskEndDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), value, timeoutMs);
  }

  async expectParentTaskEndDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), timeoutMs);
  }

  async expectParentTaskEndDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate), count, timeoutMs);
  }

  async scrollParentTaskEndDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate));
  }

  async clickParentTaskStartDate2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2));
  }

  async doubleClickParentTaskStartDate2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2));
  }

  async longPressParentTaskStartDate2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2));
  }

  async expectParentTaskStartDate2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), expected, timeoutMs);
  }

  async expectParentTaskStartDate2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), substring, timeoutMs);
  }

  async expectParentTaskStartDate2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), value, timeoutMs);
  }

  async expectParentTaskStartDate2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), timeoutMs);
  }

  async expectParentTaskStartDate2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2), count, timeoutMs);
  }

  async scrollParentTaskStartDate2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskStartDate2));
  }

  async clickParentTaskEndDate2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2));
  }

  async doubleClickParentTaskEndDate2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2));
  }

  async longPressParentTaskEndDate2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2));
  }

  async expectParentTaskEndDate2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), expected, timeoutMs);
  }

  async expectParentTaskEndDate2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), substring, timeoutMs);
  }

  async expectParentTaskEndDate2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), value, timeoutMs);
  }

  async expectParentTaskEndDate2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), timeoutMs);
  }

  async expectParentTaskEndDate2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2), count, timeoutMs);
  }

  async scrollParentTaskEndDate2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.parentTaskEndDate2));
  }

  async clickTaskKey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey));
  }

  async doubleClickTaskKey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey));
  }

  async longPressTaskKey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey));
  }

  async expectTaskKeyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskKey), expected, timeoutMs);
  }

  async expectTaskKeyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskKey), substring, timeoutMs);
  }

  async expectTaskKeyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskKey), value, timeoutMs);
  }

  async expectTaskKeyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskKey), timeoutMs);
  }

  async expectTaskKeyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskKey), count, timeoutMs);
  }

  async scrollTaskKeyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKey));
  }

  async longPressEditTaskKey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey));
  }

  async expectEditTaskKeyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), expected, timeoutMs);
  }

  async expectEditTaskKeyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), substring, timeoutMs);
  }

  async expectEditTaskKeyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), value, timeoutMs);
  }

  async expectEditTaskKeyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), timeoutMs);
  }

  async expectEditTaskKeyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey), count, timeoutMs);
  }

  async scrollEditTaskKeyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKey));
  }

  async clickTaskNameChain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain));
  }

  async doubleClickTaskNameChain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain));
  }

  async longPressTaskNameChain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain));
  }

  async expectTaskNameChainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), expected, timeoutMs);
  }

  async expectTaskNameChainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), substring, timeoutMs);
  }

  async expectTaskNameChainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), value, timeoutMs);
  }

  async expectTaskNameChainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), timeoutMs);
  }

  async expectTaskNameChainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain), count, timeoutMs);
  }

  async scrollTaskNameChainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChain));
  }

  async longPressHelpTaskNameChain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain));
  }

  async expectHelpTaskNameChainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), expected, timeoutMs);
  }

  async expectHelpTaskNameChainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), substring, timeoutMs);
  }

  async expectHelpTaskNameChainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), value, timeoutMs);
  }

  async expectHelpTaskNameChainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), timeoutMs);
  }

  async expectHelpTaskNameChainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain), count, timeoutMs);
  }

  async scrollHelpTaskNameChainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChain));
  }

  async longPressEditTaskNameChain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain));
  }

  async expectEditTaskNameChainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), expected, timeoutMs);
  }

  async expectEditTaskNameChainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), substring, timeoutMs);
  }

  async expectEditTaskNameChainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), value, timeoutMs);
  }

  async expectEditTaskNameChainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), timeoutMs);
  }

  async expectEditTaskNameChainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain), count, timeoutMs);
  }

  async scrollEditTaskNameChainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChain));
  }

  async clickHierarchyDepth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth));
  }

  async doubleClickHierarchyDepth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth));
  }

  async longPressHierarchyDepth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth));
  }

  async expectHierarchyDepthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), expected, timeoutMs);
  }

  async expectHierarchyDepthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), substring, timeoutMs);
  }

  async expectHierarchyDepthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), value, timeoutMs);
  }

  async expectHierarchyDepthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), timeoutMs);
  }

  async expectHierarchyDepthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth), count, timeoutMs);
  }

  async scrollHierarchyDepthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.hierarchyDepth));
  }

  async longPressHelpHierarchyDepth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth));
  }

  async expectHelpHierarchyDepthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), expected, timeoutMs);
  }

  async expectHelpHierarchyDepthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), substring, timeoutMs);
  }

  async expectHelpHierarchyDepthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), value, timeoutMs);
  }

  async expectHelpHierarchyDepthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), timeoutMs);
  }

  async expectHelpHierarchyDepthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth), count, timeoutMs);
  }

  async scrollHelpHierarchyDepthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpHierarchyDepth));
  }

  async longPressEditHierarchyDepth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth));
  }

  async expectEditHierarchyDepthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), expected, timeoutMs);
  }

  async expectEditHierarchyDepthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), substring, timeoutMs);
  }

  async expectEditHierarchyDepthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), value, timeoutMs);
  }

  async expectEditHierarchyDepthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), timeoutMs);
  }

  async expectEditHierarchyDepthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth), count, timeoutMs);
  }

  async scrollEditHierarchyDepthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editHierarchyDepth));
  }

  async clickTaskNameChainLong(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong));
  }

  async doubleClickTaskNameChainLong(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong));
  }

  async longPressTaskNameChainLong(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong));
  }

  async expectTaskNameChainLongHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), expected, timeoutMs);
  }

  async expectTaskNameChainLongContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), substring, timeoutMs);
  }

  async expectTaskNameChainLongValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), value, timeoutMs);
  }

  async expectTaskNameChainLongEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), timeoutMs);
  }

  async expectTaskNameChainLongCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong), count, timeoutMs);
  }

  async scrollTaskNameChainLongIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskNameChainLong));
  }

  async longPressHelpTaskNameChainButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton));
  }

  async expectHelpTaskNameChainButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), expected, timeoutMs);
  }

  async expectHelpTaskNameChainButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), substring, timeoutMs);
  }

  async expectHelpTaskNameChainButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), value, timeoutMs);
  }

  async expectHelpTaskNameChainButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), timeoutMs);
  }

  async expectHelpTaskNameChainButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton), count, timeoutMs);
  }

  async scrollHelpTaskNameChainButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpTaskNameChainButton));
  }

  async longPressEditTaskNameChainButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton));
  }

  async expectEditTaskNameChainButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), expected, timeoutMs);
  }

  async expectEditTaskNameChainButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), substring, timeoutMs);
  }

  async expectEditTaskNameChainButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), value, timeoutMs);
  }

  async expectEditTaskNameChainButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), timeoutMs);
  }

  async expectEditTaskNameChainButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton), count, timeoutMs);
  }

  async scrollEditTaskNameChainButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskNameChainButton));
  }

  async clickTaskKeyChain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain));
  }

  async doubleClickTaskKeyChain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain));
  }

  async longPressTaskKeyChain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain));
  }

  async expectTaskKeyChainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), expected, timeoutMs);
  }

  async expectTaskKeyChainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), substring, timeoutMs);
  }

  async expectTaskKeyChainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), value, timeoutMs);
  }

  async expectTaskKeyChainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), timeoutMs);
  }

  async expectTaskKeyChainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain), count, timeoutMs);
  }

  async scrollTaskKeyChainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.taskKeyChain));
  }

  async longPressEditTaskKeyChain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain));
  }

  async expectEditTaskKeyChainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), expected, timeoutMs);
  }

  async expectEditTaskKeyChainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), substring, timeoutMs);
  }

  async expectEditTaskKeyChainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), value, timeoutMs);
  }

  async expectEditTaskKeyChainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), timeoutMs);
  }

  async expectEditTaskKeyChainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain), count, timeoutMs);
  }

  async scrollEditTaskKeyChainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editTaskKeyChain));
  }

  async clickCreatedBy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy));
  }

  async doubleClickCreatedBy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy));
  }

  async longPressCreatedBy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy));
  }

  async expectCreatedByHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.createdBy), expected, timeoutMs);
  }

  async expectCreatedByContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.createdBy), substring, timeoutMs);
  }

  async expectCreatedByValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.createdBy), value, timeoutMs);
  }

  async expectCreatedByEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.createdBy), timeoutMs);
  }

  async expectCreatedByCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.createdBy), count, timeoutMs);
  }

  async scrollCreatedByIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.createdBy));
  }

  async doubleClickStephenDonnelly(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly));
  }

  async longPressStephenDonnelly(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly));
  }

  async expectStephenDonnellyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), expected, timeoutMs);
  }

  async expectStephenDonnellyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), substring, timeoutMs);
  }

  async expectStephenDonnellyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), value, timeoutMs);
  }

  async expectStephenDonnellyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), timeoutMs);
  }

  async expectStephenDonnellyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly), count, timeoutMs);
  }

  async scrollStephenDonnellyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.stephenDonnelly));
  }

  async clickLastModifiedBy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy));
  }

  async doubleClickLastModifiedBy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy));
  }

  async longPressLastModifiedBy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy));
  }

  async expectLastModifiedByHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), expected, timeoutMs);
  }

  async expectLastModifiedByContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), substring, timeoutMs);
  }

  async expectLastModifiedByValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), value, timeoutMs);
  }

  async expectLastModifiedByEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), timeoutMs);
  }

  async expectLastModifiedByCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy), count, timeoutMs);
  }

  async scrollLastModifiedByIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.lastModifiedBy));
  }

  async doubleClickAashishRaghav(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav));
  }

  async longPressAashishRaghav(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav));
  }

  async expectAashishRaghavHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), expected, timeoutMs);
  }

  async expectAashishRaghavContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), substring, timeoutMs);
  }

  async expectAashishRaghavValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), value, timeoutMs);
  }

  async expectAashishRaghavEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), timeoutMs);
  }

  async expectAashishRaghavCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav), count, timeoutMs);
  }

  async scrollAashishRaghavIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.aashishRaghav));
  }

  async clickProjectTaskType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType));
  }

  async doubleClickProjectTaskType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType));
  }

  async longPressProjectTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType));
  }

  async expectProjectTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), expected, timeoutMs);
  }

  async expectProjectTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), substring, timeoutMs);
  }

  async expectProjectTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), value, timeoutMs);
  }

  async expectProjectTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), timeoutMs);
  }

  async expectProjectTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType), count, timeoutMs);
  }

  async scrollProjectTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.projectTaskType));
  }

  async longPressHelpProjectTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType));
  }

  async expectHelpProjectTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), expected, timeoutMs);
  }

  async expectHelpProjectTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), substring, timeoutMs);
  }

  async expectHelpProjectTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), value, timeoutMs);
  }

  async expectHelpProjectTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), timeoutMs);
  }

  async expectHelpProjectTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType), count, timeoutMs);
  }

  async scrollHelpProjectTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpProjectTaskType));
  }

  async longPressEditProjectTaskType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType));
  }

  async expectEditProjectTaskTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), expected, timeoutMs);
  }

  async expectEditProjectTaskTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), substring, timeoutMs);
  }

  async expectEditProjectTaskTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), value, timeoutMs);
  }

  async expectEditProjectTaskTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), timeoutMs);
  }

  async expectEditProjectTaskTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType), count, timeoutMs);
  }

  async scrollEditProjectTaskTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editProjectTaskType));
  }

  async clickExternalTaskId(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId));
  }

  async doubleClickExternalTaskId(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId));
  }

  async longPressExternalTaskId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId));
  }

  async expectExternalTaskIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), expected, timeoutMs);
  }

  async expectExternalTaskIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), substring, timeoutMs);
  }

  async expectExternalTaskIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), value, timeoutMs);
  }

  async expectExternalTaskIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), timeoutMs);
  }

  async expectExternalTaskIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId), count, timeoutMs);
  }

  async scrollExternalTaskIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.externalTaskId));
  }

  async longPressHelpExternalTaskId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId));
  }

  async expectHelpExternalTaskIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), expected, timeoutMs);
  }

  async expectHelpExternalTaskIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), substring, timeoutMs);
  }

  async expectHelpExternalTaskIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), value, timeoutMs);
  }

  async expectHelpExternalTaskIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), timeoutMs);
  }

  async expectHelpExternalTaskIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId), count, timeoutMs);
  }

  async scrollHelpExternalTaskIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpExternalTaskId));
  }

  async longPressEditExternalTaskId(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId));
  }

  async expectEditExternalTaskIdHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), expected, timeoutMs);
  }

  async expectEditExternalTaskIdContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), substring, timeoutMs);
  }

  async expectEditExternalTaskIdValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), value, timeoutMs);
  }

  async expectEditExternalTaskIdEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), timeoutMs);
  }

  async expectEditExternalTaskIdCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId), count, timeoutMs);
  }

  async scrollEditExternalTaskIdIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editExternalTaskId));
  }

  async clickResourceTaskSync(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync));
  }

  async doubleClickResourceTaskSync(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync));
  }

  async longPressResourceTaskSync(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync));
  }

  async expectResourceTaskSyncHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), expected, timeoutMs);
  }

  async expectResourceTaskSyncContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), substring, timeoutMs);
  }

  async expectResourceTaskSyncValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), value, timeoutMs);
  }

  async expectResourceTaskSyncEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), timeoutMs);
  }

  async expectResourceTaskSyncCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync), count, timeoutMs);
  }

  async scrollResourceTaskSyncIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.resourceTaskSync));
  }

  async longPressHelpResourceTaskSync(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync));
  }

  async expectHelpResourceTaskSyncHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), expected, timeoutMs);
  }

  async expectHelpResourceTaskSyncContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), substring, timeoutMs);
  }

  async expectHelpResourceTaskSyncValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), value, timeoutMs);
  }

  async expectHelpResourceTaskSyncEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), timeoutMs);
  }

  async expectHelpResourceTaskSyncCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync), count, timeoutMs);
  }

  async scrollHelpResourceTaskSyncIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.helpResourceTaskSync));
  }

  async longPressEditResourceTaskSync(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync));
  }

  async expectEditResourceTaskSyncHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), expected, timeoutMs);
  }

  async expectEditResourceTaskSyncContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), substring, timeoutMs);
  }

  async expectEditResourceTaskSyncValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), value, timeoutMs);
  }

  async expectEditResourceTaskSyncEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), timeoutMs);
  }

  async expectEditResourceTaskSyncCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync), count, timeoutMs);
  }

  async scrollEditResourceTaskSyncIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, PseProjectTaskCPage.L.editResourceTaskSync));
  }

}
