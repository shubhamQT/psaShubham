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

export class SearchResultPage {
  private static readonly L = {
    search360HealthAnd: { strategy: 'role' as const, value: 'Search: 360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation', role: 'button', actionKind: 'button' as const },
    thisItemDoesnTSupport: { strategy: 'role' as const, value: 'This item doesn\'t support favorites Favorites list', role: 'option', actionKind: 'generic' as const },
    post: { strategy: 'text' as const, value: 'Post', actionKind: 'generic' as const },
    searchResults: { strategy: 'text' as const, value: 'Search Results', actionKind: 'text' as const },
    assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81: { strategy: 'css' as const, value: '#assistive-text-id-a2bc68f3-9b2f-41a3-703f-67cab5539f81', actionKind: 'text' as const },
    topResults: { strategy: 'role' as const, value: 'Top Results', role: 'option', actionKind: 'generic' as const },
    projects1: { strategy: 'role' as const, value: 'Projects 1', role: 'option', actionKind: 'generic' as const },
    chatterHelp: { strategy: 'role' as const, value: 'Chatter Help', role: 'option', actionKind: 'generic' as const },
    help: { strategy: 'role' as const, value: 'Help', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    opportunities0: { strategy: 'role' as const, value: 'Opportunities 0', role: 'option', actionKind: 'generic' as const },
    accounts0: { strategy: 'role' as const, value: 'Accounts 0', role: 'option', actionKind: 'generic' as const },
    contacts0: { strategy: 'role' as const, value: 'Contacts 0', role: 'option', actionKind: 'generic' as const },
    people0: { strategy: 'role' as const, value: 'People 0', role: 'option', actionKind: 'generic' as const },
    quotes0: { strategy: 'role' as const, value: 'Quotes 0', role: 'option', actionKind: 'generic' as const },
    reports0: { strategy: 'role' as const, value: 'Reports 0', role: 'option', actionKind: 'generic' as const },
    projects0: { strategy: 'role' as const, value: 'Projects 0', role: 'option', actionKind: 'generic' as const },
    showMoreSearchableObjects: { strategy: 'role' as const, value: 'Show More', role: 'button', actionKind: 'button' as const },
    topResultsResults: { strategy: 'text' as const, value: 'Top Results Results', actionKind: 'text' as const },
    result: { strategy: 'text' as const, value: '1 Result', actionKind: 'text' as const },
    sortProjectName: { strategy: 'role' as const, value: 'Sort Project Name', role: 'button', actionKind: 'link' as const },
    showProjectNameColumn: { strategy: 'role' as const, value: 'Show Project Name Column Actions', role: 'button', actionKind: 'button' as const },
    projectNameColumnWidth: { strategy: 'role' as const, value: 'Project Name column width', role: 'textbox', actionKind: 'generic' as const },
    sortProjectManager: { strategy: 'role' as const, value: 'Sort Project Manager', role: 'button', actionKind: 'link' as const },
    showProjectManagerColumn: { strategy: 'role' as const, value: 'Show Project Manager Column Actions', role: 'button', actionKind: 'button' as const },
    projectManagerColumnWidth: { strategy: 'role' as const, value: 'Project Manager column width', role: 'textbox', actionKind: 'generic' as const },
    sortAccount: { strategy: 'role' as const, value: 'Sort Account', role: 'button', actionKind: 'link' as const },
    showAccountColumnActions: { strategy: 'role' as const, value: 'Show Account Column Actions', role: 'button', actionKind: 'button' as const },
    accountColumnWidth: { strategy: 'role' as const, value: 'Account column width', role: 'textbox', actionKind: 'generic' as const },
    sortOpportunity: { strategy: 'role' as const, value: 'Sort Opportunity', role: 'button', actionKind: 'link' as const },
    showOpportunityColumnActions: { strategy: 'role' as const, value: 'Show Opportunity Column Actions', role: 'button', actionKind: 'button' as const },
    opportunityColumnWidth: { strategy: 'role' as const, value: 'Opportunity column width', role: 'textbox', actionKind: 'generic' as const },
    sortRegion: { strategy: 'role' as const, value: 'Sort Region', role: 'button', actionKind: 'link' as const },
    showRegionColumnActions: { strategy: 'role' as const, value: 'Show Region Column Actions', role: 'button', actionKind: 'button' as const },
    regionColumnWidth: { strategy: 'role' as const, value: 'Region column width', role: 'textbox', actionKind: 'generic' as const },
    sortPractice: { strategy: 'role' as const, value: 'Sort Practice', role: 'button', actionKind: 'link' as const },
    showPracticeColumnActions: { strategy: 'role' as const, value: 'Show Practice Column Actions', role: 'button', actionKind: 'button' as const },
    practiceColumnWidth: { strategy: 'role' as const, value: 'Practice column width', role: 'textbox', actionKind: 'generic' as const },
    sortGroup: { strategy: 'role' as const, value: 'Sort Group', role: 'button', actionKind: 'link' as const },
    showGroupColumnActions: { strategy: 'role' as const, value: 'Show Group Column Actions', role: 'button', actionKind: 'button' as const },
    groupColumnWidth: { strategy: 'role' as const, value: 'Group column width', role: 'textbox', actionKind: 'generic' as const },
    sortStartDate: { strategy: 'role' as const, value: 'Sort Start Date', role: 'button', actionKind: 'link' as const },
    showStartDateColumn: { strategy: 'role' as const, value: 'Show Start Date Column Actions', role: 'button', actionKind: 'button' as const },
    startDateColumnWidth: { strategy: 'role' as const, value: 'Start Date column width', role: 'textbox', actionKind: 'generic' as const },
    sortActive: { strategy: 'role' as const, value: 'Sort Active', role: 'button', actionKind: 'link' as const },
    showActiveColumnActions: { strategy: 'role' as const, value: 'Show Active Column Actions', role: 'button', actionKind: 'button' as const },
    activeColumnWidth: { strategy: 'role' as const, value: 'Active column width', role: 'textbox', actionKind: 'generic' as const },
    sortBillable: { strategy: 'role' as const, value: 'Sort Billable', role: 'button', actionKind: 'link' as const },
    showBillableColumnActions: { strategy: 'role' as const, value: 'Show Billable Column Actions', role: 'button', actionKind: 'button' as const },
    billableColumnWidth: { strategy: 'role' as const, value: 'Billable column width', role: 'textbox', actionKind: 'generic' as const },
    donTSeeYourResult: { strategy: 'text' as const, value: 'Don’t see your result?', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
    weSearchedTheObjects: { strategy: 'text' as const, value: 'We searched the objects you use most, but we', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
    knowWhichObjectYouRe: { strategy: 'text' as const, value: 'Know which object you’re looking for? Select it in', shadowHost: 'search_results-search-more-box', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSearch360HealthAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async doubleClickSearch360HealthAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async expectSearch360HealthAndVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs, soft);
  }

  async clickThisItemDoesnTSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs, soft);
  }

  async clickPost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.post));
  }

  async expectPostVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.post), timeoutMs, soft);
  }

  async getInnerTextSearchResults(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async expectSearchResultsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs, soft);
  }

  async getInnerTextAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81));
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs, soft);
  }

  async clickTopResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async expectTopResultsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs, soft);
  }

  async clickProjects1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async expectProjects1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs, soft);
  }

  async clickChatterHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async expectChatterHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs, soft);
  }

  async clickHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async doubleClickHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async expectHelpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.help), timeoutMs, soft);
  }

  async clickOpportunities0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async expectOpportunities0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs, soft);
  }

  async clickAccounts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async expectAccounts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs, soft);
  }

  async clickContacts0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async expectContacts0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs, soft);
  }

  async clickPeople0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async expectPeople0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.people0), timeoutMs, soft);
  }

  async clickQuotes0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async expectQuotes0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs, soft);
  }

  async clickReports0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async expectReports0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs, soft);
  }

  async clickProjects0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projects0));
  }

  async expectProjects0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs, soft);
  }

  async clickShowMoreSearchableObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async doubleClickShowMoreSearchableObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async expectShowMoreSearchableObjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs, soft);
  }

  async getInnerTextTopResultsResults(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async expectTopResultsResultsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs, soft);
  }

  async getInnerTextResult(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async expectResultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.result), timeoutMs, soft);
  }

  async clickSortProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async expectSortProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs, soft);
  }

  async clickShowProjectNameColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async doubleClickShowProjectNameColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs, soft);
  }

  async clickProjectNameColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth));
  }

  async expectProjectNameColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs, soft);
  }

  async clickSortProjectManager(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async expectSortProjectManagerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs, soft);
  }

  async clickShowProjectManagerColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async doubleClickShowProjectManagerColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs, soft);
  }

  async clickProjectManagerColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth));
  }

  async expectProjectManagerColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs, soft);
  }

  async clickSortAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async expectSortAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs, soft);
  }

  async clickShowAccountColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async doubleClickShowAccountColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs, soft);
  }

  async clickAccountColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.accountColumnWidth));
  }

  async expectAccountColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs, soft);
  }

  async clickSortOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async expectSortOpportunityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs, soft);
  }

  async clickShowOpportunityColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async doubleClickShowOpportunityColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs, soft);
  }

  async clickOpportunityColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth));
  }

  async expectOpportunityColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs, soft);
  }

  async clickSortRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async expectSortRegionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs, soft);
  }

  async clickShowRegionColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async doubleClickShowRegionColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs, soft);
  }

  async clickRegionColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.regionColumnWidth));
  }

  async expectRegionColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs, soft);
  }

  async clickSortPractice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async expectSortPracticeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs, soft);
  }

  async clickShowPracticeColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async doubleClickShowPracticeColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs, soft);
  }

  async clickPracticeColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.practiceColumnWidth));
  }

  async expectPracticeColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs, soft);
  }

  async clickSortGroup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async expectSortGroupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs, soft);
  }

  async clickShowGroupColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async doubleClickShowGroupColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs, soft);
  }

  async clickGroupColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.groupColumnWidth));
  }

  async expectGroupColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs, soft);
  }

  async clickSortStartDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async expectSortStartDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs, soft);
  }

  async clickShowStartDateColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async doubleClickShowStartDateColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs, soft);
  }

  async clickStartDateColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.startDateColumnWidth));
  }

  async expectStartDateColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs, soft);
  }

  async clickSortActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async expectSortActiveVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs, soft);
  }

  async clickShowActiveColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async doubleClickShowActiveColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs, soft);
  }

  async clickActiveColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.activeColumnWidth));
  }

  async expectActiveColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs, soft);
  }

  async clickSortBillable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async expectSortBillableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs, soft);
  }

  async clickShowBillableColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async doubleClickShowBillableColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs, soft);
  }

  async clickBillableColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.billableColumnWidth));
  }

  async expectBillableColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs, soft);
  }

  async getInnerTextDonTSeeYourResult(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async expectDonTSeeYourResultVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs, soft);
  }

  async getInnerTextWeSearchedTheObjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async expectWeSearchedTheObjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs, soft);
  }

  async getInnerTextKnowWhichObjectYouRe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async expectKnowWhichObjectYouReVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs, soft);
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
    await expectPageTitle(this.page, '360 HEALTH AND COMMU - Q-383470 - Ready Fixed Fee Implementation - Search | Salesforce', timeoutMs);
  }


  async longPressSearch360HealthAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async expectSearch360HealthAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.search360HealthAnd), expected, timeoutMs);
  }

  async expectSearch360HealthAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.search360HealthAnd), substring, timeoutMs);
  }

  async expectSearch360HealthAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.search360HealthAnd), value, timeoutMs);
  }

  async expectSearch360HealthAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.search360HealthAnd), timeoutMs);
  }

  async expectSearch360HealthAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.search360HealthAnd), count, timeoutMs);
  }

  async scrollSearch360HealthAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.search360HealthAnd));
  }

  async doubleClickThisItemDoesnTSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport));
  }

  async longPressThisItemDoesnTSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport));
  }

  async expectThisItemDoesnTSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), substring, timeoutMs);
  }

  async expectThisItemDoesnTSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), timeoutMs);
  }

  async expectThisItemDoesnTSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport), count, timeoutMs);
  }

  async scrollThisItemDoesnTSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.thisItemDoesnTSupport));
  }

  async doubleClickPost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.post));
  }

  async longPressPost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.post));
  }

  async expectPostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.post), expected, timeoutMs);
  }

  async expectPostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.post), substring, timeoutMs);
  }

  async expectPostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.post), value, timeoutMs);
  }

  async expectPostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.post), timeoutMs);
  }

  async expectPostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.post), count, timeoutMs);
  }

  async scrollPostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.post));
  }

  async clickSearchResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async doubleClickSearchResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async longPressSearchResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async expectSearchResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.searchResults), expected, timeoutMs);
  }

  async expectSearchResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.searchResults), substring, timeoutMs);
  }

  async expectSearchResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.searchResults), value, timeoutMs);
  }

  async expectSearchResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.searchResults), timeoutMs);
  }

  async expectSearchResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.searchResults), count, timeoutMs);
  }

  async scrollSearchResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.searchResults));
  }

  async clickAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81));
  }

  async doubleClickAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81));
  }

  async longPressAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81));
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), expected, timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), substring, timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), value, timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), timeoutMs);
  }

  async expectAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81), count, timeoutMs);
  }

  async scrollAssistiveTextIdA2bc68f39b2f41a3703f67cab5539f81IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.assistiveTextIdA2bc68f39b2f41a3703f67cab5539f81));
  }

  async doubleClickTopResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async longPressTopResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async expectTopResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.topResults), expected, timeoutMs);
  }

  async expectTopResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.topResults), substring, timeoutMs);
  }

  async expectTopResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.topResults), value, timeoutMs);
  }

  async expectTopResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.topResults), timeoutMs);
  }

  async expectTopResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.topResults), count, timeoutMs);
  }

  async scrollTopResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.topResults));
  }

  async doubleClickProjects1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async longPressProjects1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async expectProjects1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projects1), expected, timeoutMs);
  }

  async expectProjects1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projects1), substring, timeoutMs);
  }

  async expectProjects1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projects1), value, timeoutMs);
  }

  async expectProjects1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projects1), timeoutMs);
  }

  async expectProjects1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projects1), count, timeoutMs);
  }

  async scrollProjects1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projects1));
  }

  async doubleClickChatterHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async longPressChatterHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async expectChatterHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.chatterHelp), expected, timeoutMs);
  }

  async expectChatterHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.chatterHelp), substring, timeoutMs);
  }

  async expectChatterHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.chatterHelp), value, timeoutMs);
  }

  async expectChatterHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.chatterHelp), timeoutMs);
  }

  async expectChatterHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.chatterHelp), count, timeoutMs);
  }

  async scrollChatterHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.chatterHelp));
  }

  async longPressHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async expectHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.help), expected, timeoutMs);
  }

  async expectHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.help), substring, timeoutMs);
  }

  async expectHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.help), value, timeoutMs);
  }

  async expectHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.help), timeoutMs);
  }

  async expectHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.help), count, timeoutMs);
  }

  async scrollHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.help));
  }

  async doubleClickOpportunities0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async longPressOpportunities0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async expectOpportunities0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.opportunities0), expected, timeoutMs);
  }

  async expectOpportunities0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.opportunities0), substring, timeoutMs);
  }

  async expectOpportunities0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.opportunities0), value, timeoutMs);
  }

  async expectOpportunities0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.opportunities0), timeoutMs);
  }

  async expectOpportunities0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.opportunities0), count, timeoutMs);
  }

  async scrollOpportunities0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.opportunities0));
  }

  async doubleClickAccounts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async longPressAccounts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async expectAccounts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.accounts0), expected, timeoutMs);
  }

  async expectAccounts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.accounts0), substring, timeoutMs);
  }

  async expectAccounts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.accounts0), value, timeoutMs);
  }

  async expectAccounts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.accounts0), timeoutMs);
  }

  async expectAccounts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.accounts0), count, timeoutMs);
  }

  async scrollAccounts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.accounts0));
  }

  async doubleClickContacts0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async longPressContacts0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async expectContacts0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.contacts0), expected, timeoutMs);
  }

  async expectContacts0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.contacts0), substring, timeoutMs);
  }

  async expectContacts0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.contacts0), value, timeoutMs);
  }

  async expectContacts0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.contacts0), timeoutMs);
  }

  async expectContacts0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.contacts0), count, timeoutMs);
  }

  async scrollContacts0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.contacts0));
  }

  async doubleClickPeople0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async longPressPeople0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async expectPeople0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.people0), expected, timeoutMs);
  }

  async expectPeople0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.people0), substring, timeoutMs);
  }

  async expectPeople0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.people0), value, timeoutMs);
  }

  async expectPeople0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.people0), timeoutMs);
  }

  async expectPeople0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.people0), count, timeoutMs);
  }

  async scrollPeople0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.people0));
  }

  async doubleClickQuotes0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async longPressQuotes0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async expectQuotes0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.quotes0), expected, timeoutMs);
  }

  async expectQuotes0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.quotes0), substring, timeoutMs);
  }

  async expectQuotes0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.quotes0), value, timeoutMs);
  }

  async expectQuotes0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.quotes0), timeoutMs);
  }

  async expectQuotes0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.quotes0), count, timeoutMs);
  }

  async scrollQuotes0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.quotes0));
  }

  async doubleClickReports0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async longPressReports0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async expectReports0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.reports0), expected, timeoutMs);
  }

  async expectReports0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.reports0), substring, timeoutMs);
  }

  async expectReports0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.reports0), value, timeoutMs);
  }

  async expectReports0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.reports0), timeoutMs);
  }

  async expectReports0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.reports0), count, timeoutMs);
  }

  async scrollReports0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.reports0));
  }

  async doubleClickProjects0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projects0));
  }

  async longPressProjects0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projects0));
  }

  async expectProjects0Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projects0), expected, timeoutMs);
  }

  async expectProjects0ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projects0), substring, timeoutMs);
  }

  async expectProjects0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projects0), value, timeoutMs);
  }

  async expectProjects0Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projects0), timeoutMs);
  }

  async expectProjects0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projects0), count, timeoutMs);
  }

  async scrollProjects0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projects0));
  }

  async longPressShowMoreSearchableObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async expectShowMoreSearchableObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), expected, timeoutMs);
  }

  async expectShowMoreSearchableObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), substring, timeoutMs);
  }

  async expectShowMoreSearchableObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), value, timeoutMs);
  }

  async expectShowMoreSearchableObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), timeoutMs);
  }

  async expectShowMoreSearchableObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects), count, timeoutMs);
  }

  async scrollShowMoreSearchableObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showMoreSearchableObjects));
  }

  async clickTopResultsResults(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async doubleClickTopResultsResults(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async longPressTopResultsResults(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async expectTopResultsResultsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.topResultsResults), expected, timeoutMs);
  }

  async expectTopResultsResultsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.topResultsResults), substring, timeoutMs);
  }

  async expectTopResultsResultsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.topResultsResults), value, timeoutMs);
  }

  async expectTopResultsResultsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.topResultsResults), timeoutMs);
  }

  async expectTopResultsResultsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.topResultsResults), count, timeoutMs);
  }

  async scrollTopResultsResultsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.topResultsResults));
  }

  async clickResult(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async doubleClickResult(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async longPressResult(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async expectResultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.result), expected, timeoutMs);
  }

  async expectResultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.result), substring, timeoutMs);
  }

  async expectResultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.result), value, timeoutMs);
  }

  async expectResultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.result), timeoutMs);
  }

  async expectResultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.result), count, timeoutMs);
  }

  async scrollResultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.result));
  }

  async doubleClickSortProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async longPressSortProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async expectSortProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortProjectName), expected, timeoutMs);
  }

  async expectSortProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortProjectName), substring, timeoutMs);
  }

  async expectSortProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortProjectName), value, timeoutMs);
  }

  async expectSortProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortProjectName), timeoutMs);
  }

  async expectSortProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortProjectName), count, timeoutMs);
  }

  async scrollSortProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectName));
  }

  async longPressShowProjectNameColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async expectShowProjectNameColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), expected, timeoutMs);
  }

  async expectShowProjectNameColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), substring, timeoutMs);
  }

  async expectShowProjectNameColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), value, timeoutMs);
  }

  async expectShowProjectNameColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), timeoutMs);
  }

  async expectShowProjectNameColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showProjectNameColumn), count, timeoutMs);
  }

  async scrollShowProjectNameColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectNameColumn));
  }

  async doubleClickProjectNameColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth));
  }

  async longPressProjectNameColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth));
  }

  async expectProjectNameColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), expected, timeoutMs);
  }

  async expectProjectNameColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), substring, timeoutMs);
  }

  async expectProjectNameColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), value, timeoutMs);
  }

  async expectProjectNameColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), timeoutMs);
  }

  async expectProjectNameColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth), count, timeoutMs);
  }

  async scrollProjectNameColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projectNameColumnWidth));
  }

  async doubleClickSortProjectManager(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async longPressSortProjectManager(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async expectSortProjectManagerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortProjectManager), expected, timeoutMs);
  }

  async expectSortProjectManagerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortProjectManager), substring, timeoutMs);
  }

  async expectSortProjectManagerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortProjectManager), value, timeoutMs);
  }

  async expectSortProjectManagerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortProjectManager), timeoutMs);
  }

  async expectSortProjectManagerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortProjectManager), count, timeoutMs);
  }

  async scrollSortProjectManagerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortProjectManager));
  }

  async longPressShowProjectManagerColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async expectShowProjectManagerColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), expected, timeoutMs);
  }

  async expectShowProjectManagerColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), substring, timeoutMs);
  }

  async expectShowProjectManagerColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), value, timeoutMs);
  }

  async expectShowProjectManagerColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), timeoutMs);
  }

  async expectShowProjectManagerColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn), count, timeoutMs);
  }

  async scrollShowProjectManagerColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showProjectManagerColumn));
  }

  async doubleClickProjectManagerColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth));
  }

  async longPressProjectManagerColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth));
  }

  async expectProjectManagerColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), expected, timeoutMs);
  }

  async expectProjectManagerColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), substring, timeoutMs);
  }

  async expectProjectManagerColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), value, timeoutMs);
  }

  async expectProjectManagerColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), timeoutMs);
  }

  async expectProjectManagerColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth), count, timeoutMs);
  }

  async scrollProjectManagerColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.projectManagerColumnWidth));
  }

  async doubleClickSortAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async longPressSortAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async expectSortAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortAccount), expected, timeoutMs);
  }

  async expectSortAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortAccount), substring, timeoutMs);
  }

  async expectSortAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortAccount), value, timeoutMs);
  }

  async expectSortAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortAccount), timeoutMs);
  }

  async expectSortAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortAccount), count, timeoutMs);
  }

  async scrollSortAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortAccount));
  }

  async longPressShowAccountColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async expectShowAccountColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), expected, timeoutMs);
  }

  async expectShowAccountColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), substring, timeoutMs);
  }

  async expectShowAccountColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), value, timeoutMs);
  }

  async expectShowAccountColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), timeoutMs);
  }

  async expectShowAccountColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showAccountColumnActions), count, timeoutMs);
  }

  async scrollShowAccountColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showAccountColumnActions));
  }

  async doubleClickAccountColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.accountColumnWidth));
  }

  async longPressAccountColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.accountColumnWidth));
  }

  async expectAccountColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.accountColumnWidth), expected, timeoutMs);
  }

  async expectAccountColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.accountColumnWidth), substring, timeoutMs);
  }

  async expectAccountColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.accountColumnWidth), value, timeoutMs);
  }

  async expectAccountColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.accountColumnWidth), timeoutMs);
  }

  async expectAccountColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.accountColumnWidth), count, timeoutMs);
  }

  async scrollAccountColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.accountColumnWidth));
  }

  async doubleClickSortOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async longPressSortOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async expectSortOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortOpportunity), expected, timeoutMs);
  }

  async expectSortOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortOpportunity), substring, timeoutMs);
  }

  async expectSortOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortOpportunity), value, timeoutMs);
  }

  async expectSortOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortOpportunity), timeoutMs);
  }

  async expectSortOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortOpportunity), count, timeoutMs);
  }

  async scrollSortOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortOpportunity));
  }

  async longPressShowOpportunityColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async expectShowOpportunityColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), expected, timeoutMs);
  }

  async expectShowOpportunityColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), substring, timeoutMs);
  }

  async expectShowOpportunityColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), value, timeoutMs);
  }

  async expectShowOpportunityColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), timeoutMs);
  }

  async expectShowOpportunityColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions), count, timeoutMs);
  }

  async scrollShowOpportunityColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showOpportunityColumnActions));
  }

  async doubleClickOpportunityColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth));
  }

  async longPressOpportunityColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth));
  }

  async expectOpportunityColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), expected, timeoutMs);
  }

  async expectOpportunityColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), substring, timeoutMs);
  }

  async expectOpportunityColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), value, timeoutMs);
  }

  async expectOpportunityColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), timeoutMs);
  }

  async expectOpportunityColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth), count, timeoutMs);
  }

  async scrollOpportunityColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.opportunityColumnWidth));
  }

  async doubleClickSortRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async longPressSortRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async expectSortRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortRegion), expected, timeoutMs);
  }

  async expectSortRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortRegion), substring, timeoutMs);
  }

  async expectSortRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortRegion), value, timeoutMs);
  }

  async expectSortRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortRegion), timeoutMs);
  }

  async expectSortRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortRegion), count, timeoutMs);
  }

  async scrollSortRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortRegion));
  }

  async longPressShowRegionColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async expectShowRegionColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), expected, timeoutMs);
  }

  async expectShowRegionColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), substring, timeoutMs);
  }

  async expectShowRegionColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), value, timeoutMs);
  }

  async expectShowRegionColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), timeoutMs);
  }

  async expectShowRegionColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showRegionColumnActions), count, timeoutMs);
  }

  async scrollShowRegionColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showRegionColumnActions));
  }

  async doubleClickRegionColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.regionColumnWidth));
  }

  async longPressRegionColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.regionColumnWidth));
  }

  async expectRegionColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.regionColumnWidth), expected, timeoutMs);
  }

  async expectRegionColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.regionColumnWidth), substring, timeoutMs);
  }

  async expectRegionColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.regionColumnWidth), value, timeoutMs);
  }

  async expectRegionColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.regionColumnWidth), timeoutMs);
  }

  async expectRegionColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.regionColumnWidth), count, timeoutMs);
  }

  async scrollRegionColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.regionColumnWidth));
  }

  async doubleClickSortPractice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async longPressSortPractice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async expectSortPracticeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortPractice), expected, timeoutMs);
  }

  async expectSortPracticeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortPractice), substring, timeoutMs);
  }

  async expectSortPracticeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortPractice), value, timeoutMs);
  }

  async expectSortPracticeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortPractice), timeoutMs);
  }

  async expectSortPracticeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortPractice), count, timeoutMs);
  }

  async scrollSortPracticeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortPractice));
  }

  async longPressShowPracticeColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async expectShowPracticeColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), expected, timeoutMs);
  }

  async expectShowPracticeColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), substring, timeoutMs);
  }

  async expectShowPracticeColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), value, timeoutMs);
  }

  async expectShowPracticeColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), timeoutMs);
  }

  async expectShowPracticeColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions), count, timeoutMs);
  }

  async scrollShowPracticeColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showPracticeColumnActions));
  }

  async doubleClickPracticeColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.practiceColumnWidth));
  }

  async longPressPracticeColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.practiceColumnWidth));
  }

  async expectPracticeColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), expected, timeoutMs);
  }

  async expectPracticeColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), substring, timeoutMs);
  }

  async expectPracticeColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), value, timeoutMs);
  }

  async expectPracticeColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), timeoutMs);
  }

  async expectPracticeColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.practiceColumnWidth), count, timeoutMs);
  }

  async scrollPracticeColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.practiceColumnWidth));
  }

  async doubleClickSortGroup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async longPressSortGroup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async expectSortGroupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortGroup), expected, timeoutMs);
  }

  async expectSortGroupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortGroup), substring, timeoutMs);
  }

  async expectSortGroupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortGroup), value, timeoutMs);
  }

  async expectSortGroupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortGroup), timeoutMs);
  }

  async expectSortGroupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortGroup), count, timeoutMs);
  }

  async scrollSortGroupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortGroup));
  }

  async longPressShowGroupColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async expectShowGroupColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), expected, timeoutMs);
  }

  async expectShowGroupColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), substring, timeoutMs);
  }

  async expectShowGroupColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), value, timeoutMs);
  }

  async expectShowGroupColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), timeoutMs);
  }

  async expectShowGroupColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showGroupColumnActions), count, timeoutMs);
  }

  async scrollShowGroupColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showGroupColumnActions));
  }

  async doubleClickGroupColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.groupColumnWidth));
  }

  async longPressGroupColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.groupColumnWidth));
  }

  async expectGroupColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.groupColumnWidth), expected, timeoutMs);
  }

  async expectGroupColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.groupColumnWidth), substring, timeoutMs);
  }

  async expectGroupColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.groupColumnWidth), value, timeoutMs);
  }

  async expectGroupColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.groupColumnWidth), timeoutMs);
  }

  async expectGroupColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.groupColumnWidth), count, timeoutMs);
  }

  async scrollGroupColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.groupColumnWidth));
  }

  async doubleClickSortStartDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async longPressSortStartDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async expectSortStartDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortStartDate), expected, timeoutMs);
  }

  async expectSortStartDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortStartDate), substring, timeoutMs);
  }

  async expectSortStartDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortStartDate), value, timeoutMs);
  }

  async expectSortStartDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortStartDate), timeoutMs);
  }

  async expectSortStartDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortStartDate), count, timeoutMs);
  }

  async scrollSortStartDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortStartDate));
  }

  async longPressShowStartDateColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async expectShowStartDateColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showStartDateColumn), expected, timeoutMs);
  }

  async expectShowStartDateColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showStartDateColumn), substring, timeoutMs);
  }

  async expectShowStartDateColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showStartDateColumn), value, timeoutMs);
  }

  async expectShowStartDateColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showStartDateColumn), timeoutMs);
  }

  async expectShowStartDateColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showStartDateColumn), count, timeoutMs);
  }

  async scrollShowStartDateColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showStartDateColumn));
  }

  async doubleClickStartDateColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.startDateColumnWidth));
  }

  async longPressStartDateColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.startDateColumnWidth));
  }

  async expectStartDateColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), expected, timeoutMs);
  }

  async expectStartDateColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), substring, timeoutMs);
  }

  async expectStartDateColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), value, timeoutMs);
  }

  async expectStartDateColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), timeoutMs);
  }

  async expectStartDateColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.startDateColumnWidth), count, timeoutMs);
  }

  async scrollStartDateColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.startDateColumnWidth));
  }

  async doubleClickSortActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async longPressSortActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async expectSortActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortActive), expected, timeoutMs);
  }

  async expectSortActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortActive), substring, timeoutMs);
  }

  async expectSortActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortActive), value, timeoutMs);
  }

  async expectSortActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortActive), timeoutMs);
  }

  async expectSortActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortActive), count, timeoutMs);
  }

  async scrollSortActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortActive));
  }

  async longPressShowActiveColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async expectShowActiveColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), expected, timeoutMs);
  }

  async expectShowActiveColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), substring, timeoutMs);
  }

  async expectShowActiveColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), value, timeoutMs);
  }

  async expectShowActiveColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), timeoutMs);
  }

  async expectShowActiveColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showActiveColumnActions), count, timeoutMs);
  }

  async scrollShowActiveColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showActiveColumnActions));
  }

  async doubleClickActiveColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.activeColumnWidth));
  }

  async longPressActiveColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.activeColumnWidth));
  }

  async expectActiveColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.activeColumnWidth), expected, timeoutMs);
  }

  async expectActiveColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.activeColumnWidth), substring, timeoutMs);
  }

  async expectActiveColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.activeColumnWidth), value, timeoutMs);
  }

  async expectActiveColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.activeColumnWidth), timeoutMs);
  }

  async expectActiveColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.activeColumnWidth), count, timeoutMs);
  }

  async scrollActiveColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.activeColumnWidth));
  }

  async doubleClickSortBillable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async longPressSortBillable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async expectSortBillableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.sortBillable), expected, timeoutMs);
  }

  async expectSortBillableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.sortBillable), substring, timeoutMs);
  }

  async expectSortBillableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.sortBillable), value, timeoutMs);
  }

  async expectSortBillableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.sortBillable), timeoutMs);
  }

  async expectSortBillableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.sortBillable), count, timeoutMs);
  }

  async scrollSortBillableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.sortBillable));
  }

  async longPressShowBillableColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async expectShowBillableColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), expected, timeoutMs);
  }

  async expectShowBillableColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), substring, timeoutMs);
  }

  async expectShowBillableColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), value, timeoutMs);
  }

  async expectShowBillableColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), timeoutMs);
  }

  async expectShowBillableColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.showBillableColumnActions), count, timeoutMs);
  }

  async scrollShowBillableColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.showBillableColumnActions));
  }

  async doubleClickBillableColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.billableColumnWidth));
  }

  async longPressBillableColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.billableColumnWidth));
  }

  async expectBillableColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.billableColumnWidth), expected, timeoutMs);
  }

  async expectBillableColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.billableColumnWidth), substring, timeoutMs);
  }

  async expectBillableColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.billableColumnWidth), value, timeoutMs);
  }

  async expectBillableColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.billableColumnWidth), timeoutMs);
  }

  async expectBillableColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.billableColumnWidth), count, timeoutMs);
  }

  async scrollBillableColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.billableColumnWidth));
  }

  async clickDonTSeeYourResult(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async doubleClickDonTSeeYourResult(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async longPressDonTSeeYourResult(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async expectDonTSeeYourResultHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), expected, timeoutMs);
  }

  async expectDonTSeeYourResultContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), substring, timeoutMs);
  }

  async expectDonTSeeYourResultValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), value, timeoutMs);
  }

  async expectDonTSeeYourResultEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), timeoutMs);
  }

  async expectDonTSeeYourResultCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.donTSeeYourResult), count, timeoutMs);
  }

  async scrollDonTSeeYourResultIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.donTSeeYourResult));
  }

  async clickWeSearchedTheObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async doubleClickWeSearchedTheObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async longPressWeSearchedTheObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async expectWeSearchedTheObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), expected, timeoutMs);
  }

  async expectWeSearchedTheObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), substring, timeoutMs);
  }

  async expectWeSearchedTheObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), value, timeoutMs);
  }

  async expectWeSearchedTheObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), timeoutMs);
  }

  async expectWeSearchedTheObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects), count, timeoutMs);
  }

  async scrollWeSearchedTheObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.weSearchedTheObjects));
  }

  async clickKnowWhichObjectYouRe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async doubleClickKnowWhichObjectYouRe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async longPressKnowWhichObjectYouRe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

  async expectKnowWhichObjectYouReHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), expected, timeoutMs);
  }

  async expectKnowWhichObjectYouReContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), substring, timeoutMs);
  }

  async expectKnowWhichObjectYouReValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), value, timeoutMs);
  }

  async expectKnowWhichObjectYouReEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), timeoutMs);
  }

  async expectKnowWhichObjectYouReCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe), count, timeoutMs);
  }

  async scrollKnowWhichObjectYouReIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SearchResultPage.L.knowWhichObjectYouRe));
  }

}
