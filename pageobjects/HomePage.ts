import type { Locator, Page } from "@playwright/test";
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
import { webTable, type WebTable } from "../support/web-table";

export class HomePage {
  private static readonly L = {
    sandboxStest: { strategy: 'text' as const, value: 'Sandbox (STEST)', shadowHost: 'devops_center-org-info', actionKind: 'text' as const },
    search: { strategy: 'role' as const, value: 'Search', role: 'button', actionKind: 'button' as const },
    favoritesList: { strategy: 'role' as const, value: 'Favorites list', role: 'button', actionKind: 'button' as const },
    globalActionsLink: { strategy: 'role' as const, value: 'Global Actions', role: 'button', actionKind: 'link' as const },
    salesforceHelpButton: { strategy: 'role' as const, value: 'Salesforce Help', role: 'button', actionKind: 'button' as const },
    setupLink: { strategy: 'role' as const, value: 'Setup', role: 'button', actionKind: 'link' as const },
    notificationsButton: { strategy: 'role' as const, value: 'Notifications', role: 'button', actionKind: 'button' as const },
    viewProfileButton: { strategy: 'role' as const, value: 'View profile', role: 'button', actionKind: 'button' as const },
    psaOperations: { strategy: 'text' as const, value: 'PSA - Operations', shadowHost: 'one-appnav', actionKind: 'text' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accounts: { strategy: 'role' as const, value: 'Accounts', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accountsList: { strategy: 'role' as const, value: 'Accounts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    opportunities: { strategy: 'role' as const, value: 'Opportunities', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunitiesList: { strategy: 'role' as const, value: 'Opportunities List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    reports: { strategy: 'role' as const, value: 'Reports', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    reportsList: { strategy: 'role' as const, value: 'Reports List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    contacts: { strategy: 'role' as const, value: 'Contacts', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    contactsList: { strategy: 'role' as const, value: 'Contacts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    moreShowMoreNavigation: { strategy: 'role' as const, value: 'More Show more navigation items', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    perrySRestaurantsQ453446Link: { strategy: 'text' as const, value: 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation', actionKind: 'link' as const },
    searchInput: { strategy: 'placeholder' as const, value: 'Search...', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    allProjectsList: { strategy: 'role' as const, value: 'All Projects List', role: 'option', shadowHost: 'search_dialog-instant-result-item', actionKind: 'generic' as const },
    suggestionTooltipLabel423: { strategy: 'text' as const, value: 'All', shadowHost: 'search_dialog-instant-result-item', actionKind: 'text' as const },
    showMoreResultsFor: { strategy: 'css' as const, value: '[role="option"]', shadowHost: 'search_dialog-instant-result-item', actionKind: 'generic' as const },
    suggestionTooltipLabel492: { strategy: 'text' as const, value: 'Show more results for "Perry&#39;s Restaurants, -', shadowHost: 'search_dialog-instant-result-item', actionKind: 'text' as const },
  } as const;

  readonly sldsTable1: WebTable; // columns: ["Item Number", "", "Sort Due Date Sorted Ascending Show Due Date Column Actions", "Sort Subject Show Subject Column Actions", "Sort Name Show Name Column Actions", "Sort Related To Show Related To Column Actions", "Sort UKG Activity Type Show UKG Activity Type Column Actions", "Sort Type Detail Show Type Detail Column Actions", "Sort Priority Show Priority Column Actions", "Sort Status Show Status Column Actions", "Sort Last Modified By Alias Show Last Modified By Alias Column Actions", "Action"]

  constructor(private readonly page: Page) {
    this.sldsTable1 = webTable(this.page, '#brandBand_2 table');
  }

  async getInnerTextSandboxStest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async expectSandboxStestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs, soft);
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.search), timeoutMs, soft);
  }

  async clickFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async doubleClickFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async expectFavoritesListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.favoritesList), timeoutMs, soft);
  }

  async clickGlobalActionsLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.globalActionsLink));
  }

  async expectGlobalActionsLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs, soft);
  }

  async clickSalesforceHelpButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.salesforceHelpButton));
  }

  async doubleClickSalesforceHelpButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.salesforceHelpButton));
  }

  async expectSalesforceHelpButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs, soft);
  }

  async clickSetupLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.setupLink));
  }

  async expectSetupLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.setupLink), timeoutMs, soft);
  }

  async clickNotificationsButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.notificationsButton));
  }

  async doubleClickNotificationsButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.notificationsButton));
  }

  async expectNotificationsButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs, soft);
  }

  async clickViewProfileButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewProfileButton));
  }

  async doubleClickViewProfileButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewProfileButton));
  }

  async expectViewProfileButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs, soft);
  }

  async getInnerTextPsaOperations(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.psaOperations));
  }

  async expectPsaOperationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.psaOperations), timeoutMs, soft);
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.home), timeoutMs, soft);
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accounts), timeoutMs, soft);
  }

  async clickAccountsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async expectAccountsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.accountsList), timeoutMs, soft);
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunities), timeoutMs, soft);
  }

  async clickOpportunitiesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async expectOpportunitiesListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs, soft);
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.reports), timeoutMs, soft);
  }

  async clickReportsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async expectReportsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.reportsList), timeoutMs, soft);
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contacts), timeoutMs, soft);
  }

  async clickContactsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async expectContactsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contactsList), timeoutMs, soft);
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs, soft);
  }

  async clickPerrySRestaurantsQ453446Link(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link));
  }

  async expectPerrySRestaurantsQ453446LinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs, soft);
  }

  async fillSearchInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.searchInput), value);
  }

  async clearSearchInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.searchInput));
  }

  async getSearchInputValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.searchInput));
  }

  async expectSearchInputVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.searchInput), timeoutMs, soft);
  }

  async clickAllProjectsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.allProjectsList));
  }

  async expectAllProjectsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs, soft);
  }

  async getInnerTextSuggestionTooltipLabel423(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423));
  }

  async expectSuggestionTooltipLabel423Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs, soft);
  }

  async clickShowMoreResultsFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showMoreResultsFor));
  }

  async expectShowMoreResultsForVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs, soft);
  }

  async getInnerTextSuggestionTooltipLabel492(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492));
  }

  async expectSuggestionTooltipLabel492Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs, soft);
  }

  // ── #brandBand_2 table ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getSldsTable1TableText(row: number, col: number | string): Promise<string> {
    return this.sldsTable1.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getSldsTable1TableColumn(col: number | string): Promise<string[]> {
    return this.sldsTable1.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getSldsTable1TableRowData(row: number): Promise<Record<string, string>> {
    return this.sldsTable1.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findSldsTable1TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.sldsTable1.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findSldsTable1TableRowByText(text: string): Promise<number> {
    return this.sldsTable1.findRowByText(text);
  }

  /** Total number of body rows. */
  async getSldsTable1TableRowCount(): Promise<number> {
    return this.sldsTable1.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickSldsTable1TableLink(row: number, col: number | string): Promise<void> {
    return this.sldsTable1.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getSldsTable1TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.sldsTable1.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkSldsTable1TableRow(row: number): Promise<void> {
    const cb = this.sldsTable1.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckSldsTable1TableRow(row: number): Promise<void> {
    const cb = this.sldsTable1.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isSldsTable1TableRowChecked(row: number): Promise<boolean> {
    return this.sldsTable1.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getSldsTable1TableSwitchState(row: number): Promise<boolean> {
    return this.sldsTable1.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleSldsTable1TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.sldsTable1.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickSldsTable1TableButton(row: number, label?: string): Promise<void> {
    return this.sldsTable1.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickSldsTable1TableMenuOption(label: string): Promise<void> {
    return this.sldsTable1.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortSldsTable1TableBy(col: string): Promise<void> {
    return this.sldsTable1.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getSldsTable1TableInRow(row: number, selector: string): Locator {
    return this.sldsTable1.getInRow(row, selector);
  }


  async clickSandboxStest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async doubleClickSandboxStest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async longPressSandboxStest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async expectSandboxStestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sandboxStest), expected, timeoutMs);
  }

  async expectSandboxStestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sandboxStest), substring, timeoutMs);
  }

  async expectSandboxStestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sandboxStest), value, timeoutMs);
  }

  async expectSandboxStestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs);
  }

  async expectSandboxStestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sandboxStest), count, timeoutMs);
  }

  async scrollSandboxStestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.search), substring, timeoutMs);
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.search), value, timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.search), count, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.search));
  }

  async longPressFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async expectFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.favoritesList), expected, timeoutMs);
  }

  async expectFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.favoritesList), substring, timeoutMs);
  }

  async expectFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.favoritesList), value, timeoutMs);
  }

  async expectFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.favoritesList), count, timeoutMs);
  }

  async scrollFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.favoritesList));
  }

  async doubleClickGlobalActionsLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.globalActionsLink));
  }

  async longPressGlobalActionsLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.globalActionsLink));
  }

  async expectGlobalActionsLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.globalActionsLink), expected, timeoutMs);
  }

  async expectGlobalActionsLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.globalActionsLink), substring, timeoutMs);
  }

  async expectGlobalActionsLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.globalActionsLink), value, timeoutMs);
  }

  async expectGlobalActionsLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.globalActionsLink), timeoutMs);
  }

  async expectGlobalActionsLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.globalActionsLink), count, timeoutMs);
  }

  async scrollGlobalActionsLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.globalActionsLink));
  }

  async longPressSalesforceHelpButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.salesforceHelpButton));
  }

  async expectSalesforceHelpButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.salesforceHelpButton), expected, timeoutMs);
  }

  async expectSalesforceHelpButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.salesforceHelpButton), substring, timeoutMs);
  }

  async expectSalesforceHelpButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.salesforceHelpButton), value, timeoutMs);
  }

  async expectSalesforceHelpButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.salesforceHelpButton), timeoutMs);
  }

  async expectSalesforceHelpButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.salesforceHelpButton), count, timeoutMs);
  }

  async scrollSalesforceHelpButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.salesforceHelpButton));
  }

  async doubleClickSetupLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.setupLink));
  }

  async longPressSetupLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.setupLink));
  }

  async expectSetupLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.setupLink), expected, timeoutMs);
  }

  async expectSetupLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.setupLink), substring, timeoutMs);
  }

  async expectSetupLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.setupLink), value, timeoutMs);
  }

  async expectSetupLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.setupLink), timeoutMs);
  }

  async expectSetupLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.setupLink), count, timeoutMs);
  }

  async scrollSetupLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.setupLink));
  }

  async longPressNotificationsButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.notificationsButton));
  }

  async expectNotificationsButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.notificationsButton), expected, timeoutMs);
  }

  async expectNotificationsButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.notificationsButton), substring, timeoutMs);
  }

  async expectNotificationsButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.notificationsButton), value, timeoutMs);
  }

  async expectNotificationsButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.notificationsButton), timeoutMs);
  }

  async expectNotificationsButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.notificationsButton), count, timeoutMs);
  }

  async scrollNotificationsButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.notificationsButton));
  }

  async longPressViewProfileButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewProfileButton));
  }

  async expectViewProfileButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewProfileButton), expected, timeoutMs);
  }

  async expectViewProfileButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewProfileButton), substring, timeoutMs);
  }

  async expectViewProfileButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewProfileButton), value, timeoutMs);
  }

  async expectViewProfileButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewProfileButton), timeoutMs);
  }

  async expectViewProfileButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewProfileButton), count, timeoutMs);
  }

  async scrollViewProfileButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewProfileButton));
  }

  async clickPsaOperations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.psaOperations));
  }

  async doubleClickPsaOperations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.psaOperations));
  }

  async longPressPsaOperations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.psaOperations));
  }

  async expectPsaOperationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.psaOperations), expected, timeoutMs);
  }

  async expectPsaOperationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.psaOperations), substring, timeoutMs);
  }

  async expectPsaOperationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.psaOperations), value, timeoutMs);
  }

  async expectPsaOperationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.psaOperations), timeoutMs);
  }

  async expectPsaOperationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.psaOperations), count, timeoutMs);
  }

  async scrollPsaOperationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.psaOperations));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.home), substring, timeoutMs);
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.home), count, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.home));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accounts), substring, timeoutMs);
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accounts), count, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accounts));
  }

  async doubleClickAccountsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async longPressAccountsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async expectAccountsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.accountsList), expected, timeoutMs);
  }

  async expectAccountsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.accountsList), substring, timeoutMs);
  }

  async expectAccountsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.accountsList), value, timeoutMs);
  }

  async expectAccountsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.accountsList), timeoutMs);
  }

  async expectAccountsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.accountsList), count, timeoutMs);
  }

  async scrollAccountsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.accountsList));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunities), substring, timeoutMs);
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunities), count, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunities));
  }

  async doubleClickOpportunitiesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async longPressOpportunitiesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async expectOpportunitiesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.opportunitiesList), expected, timeoutMs);
  }

  async expectOpportunitiesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.opportunitiesList), substring, timeoutMs);
  }

  async expectOpportunitiesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.opportunitiesList), value, timeoutMs);
  }

  async expectOpportunitiesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.opportunitiesList), count, timeoutMs);
  }

  async scrollOpportunitiesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.opportunitiesList));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.reports), substring, timeoutMs);
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.reports), count, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.reports));
  }

  async doubleClickReportsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async longPressReportsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async expectReportsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.reportsList), expected, timeoutMs);
  }

  async expectReportsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.reportsList), substring, timeoutMs);
  }

  async expectReportsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.reportsList), value, timeoutMs);
  }

  async expectReportsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.reportsList), timeoutMs);
  }

  async expectReportsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.reportsList), count, timeoutMs);
  }

  async scrollReportsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.reportsList));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contacts), substring, timeoutMs);
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contacts), count, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contacts));
  }

  async doubleClickContactsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async longPressContactsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async expectContactsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contactsList), expected, timeoutMs);
  }

  async expectContactsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contactsList), substring, timeoutMs);
  }

  async expectContactsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contactsList), value, timeoutMs);
  }

  async expectContactsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contactsList), timeoutMs);
  }

  async expectContactsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contactsList), count, timeoutMs);
  }

  async scrollContactsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contactsList));
  }

  async doubleClickMoreShowMoreNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async longPressMoreShowMoreNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.moreShowMoreNavigation), expected, timeoutMs);
  }

  async expectMoreShowMoreNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.moreShowMoreNavigation), substring, timeoutMs);
  }

  async expectMoreShowMoreNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.moreShowMoreNavigation), value, timeoutMs);
  }

  async expectMoreShowMoreNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.moreShowMoreNavigation), count, timeoutMs);
  }

  async scrollMoreShowMoreNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async doubleClickPerrySRestaurantsQ453446Link(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link));
  }

  async longPressPerrySRestaurantsQ453446Link(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link));
  }

  async expectPerrySRestaurantsQ453446LinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), expected, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), substring, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), value, timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), timeoutMs);
  }

  async expectPerrySRestaurantsQ453446LinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link), count, timeoutMs);
  }

  async scrollPerrySRestaurantsQ453446LinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.perrySRestaurantsQ453446Link));
  }

  async typeTextSearchInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.searchInput), value);
  }

  async expectSearchInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.searchInput), expected, timeoutMs);
  }

  async expectSearchInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.searchInput), substring, timeoutMs);
  }

  async expectSearchInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.searchInput), value, timeoutMs);
  }

  async expectSearchInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.searchInput), timeoutMs);
  }

  async expectSearchInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.searchInput), count, timeoutMs);
  }

  async scrollSearchInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.searchInput));
  }

  async doubleClickAllProjectsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.allProjectsList));
  }

  async longPressAllProjectsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.allProjectsList));
  }

  async expectAllProjectsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.allProjectsList), expected, timeoutMs);
  }

  async expectAllProjectsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.allProjectsList), substring, timeoutMs);
  }

  async expectAllProjectsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.allProjectsList), value, timeoutMs);
  }

  async expectAllProjectsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.allProjectsList), timeoutMs);
  }

  async expectAllProjectsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.allProjectsList), count, timeoutMs);
  }

  async scrollAllProjectsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.allProjectsList));
  }

  async clickSuggestionTooltipLabel423(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423));
  }

  async doubleClickSuggestionTooltipLabel423(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423));
  }

  async longPressSuggestionTooltipLabel423(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423));
  }

  async expectSuggestionTooltipLabel423Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), expected, timeoutMs);
  }

  async expectSuggestionTooltipLabel423ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), substring, timeoutMs);
  }

  async expectSuggestionTooltipLabel423Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), value, timeoutMs);
  }

  async expectSuggestionTooltipLabel423Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), timeoutMs);
  }

  async expectSuggestionTooltipLabel423Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.suggestionTooltipLabel423), count, timeoutMs);
  }

  async scrollSuggestionTooltipLabel423IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel423));
  }

  async doubleClickShowMoreResultsFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showMoreResultsFor));
  }

  async longPressShowMoreResultsFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showMoreResultsFor));
  }

  async expectShowMoreResultsForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showMoreResultsFor), expected, timeoutMs);
  }

  async expectShowMoreResultsForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showMoreResultsFor), substring, timeoutMs);
  }

  async expectShowMoreResultsForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showMoreResultsFor), value, timeoutMs);
  }

  async expectShowMoreResultsForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showMoreResultsFor), timeoutMs);
  }

  async expectShowMoreResultsForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showMoreResultsFor), count, timeoutMs);
  }

  async scrollShowMoreResultsForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showMoreResultsFor));
  }

  async clickSuggestionTooltipLabel492(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492));
  }

  async doubleClickSuggestionTooltipLabel492(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492));
  }

  async longPressSuggestionTooltipLabel492(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492));
  }

  async expectSuggestionTooltipLabel492Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), expected, timeoutMs);
  }

  async expectSuggestionTooltipLabel492ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), substring, timeoutMs);
  }

  async expectSuggestionTooltipLabel492Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), value, timeoutMs);
  }

  async expectSuggestionTooltipLabel492Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), timeoutMs);
  }

  async expectSuggestionTooltipLabel492Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.suggestionTooltipLabel492), count, timeoutMs);
  }

  async scrollSuggestionTooltipLabel492IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.suggestionTooltipLabel492));
  }

}
