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
    openMenuItemSubmenu: { strategy: 'role' as const, value: 'Open menu item submenu', role: 'option', actionKind: 'generic' as const },
    option: { strategy: 'css' as const, value: '[role="option"]', actionKind: 'generic' as const },
    skipToNavigation: { strategy: 'role' as const, value: 'Skip to Navigation', role: 'link', actionKind: 'link' as const },
    skipToMainContent: { strategy: 'role' as const, value: 'Skip to Main Content', role: 'link', actionKind: 'link' as const },
    seeWhatSChanging: { strategy: 'role' as const, value: 'See What\'s Changing', role: 'link', actionKind: 'link' as const },
    close: { strategy: 'role' as const, value: 'Close', role: 'link', actionKind: 'link' as const },
    yourOrgNowHas: { strategy: 'text' as const, value: 'Your org now has access to Agentforce Coworker.', actionKind: 'text' as const },
    goToSetup: { strategy: 'role' as const, value: 'Go to Setup', role: 'link', actionKind: 'link' as const },
    togglePanel: { strategy: 'role' as const, value: 'Toggle Panel', role: 'button', shadowHost: 'devops_center-panel-button', actionKind: 'button' as const },
    sandboxStest: { strategy: 'text' as const, value: 'Sandbox (STEST)', shadowHost: 'devops_center-org-info', actionKind: 'text' as const },
    showMenu: { strategy: 'role' as const, value: 'Show menu', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    search: { strategy: 'role' as const, value: 'Search', role: 'button', actionKind: 'button' as const },
    thisItemDoesnTSupportButton: { strategy: 'role' as const, value: 'This item doesn\'t support favorites', role: 'button', actionKind: 'button' as const },
    favoritesList: { strategy: 'role' as const, value: 'Favorites list', role: 'button', actionKind: 'button' as const },
    globalActionsLink: { strategy: 'role' as const, value: 'Global Actions', role: 'button', actionKind: 'link' as const },
    guidanceCenterButton: { strategy: 'role' as const, value: 'Guidance Center', role: 'button', actionKind: 'button' as const },
    salesforceHelpButton: { strategy: 'role' as const, value: 'Salesforce Help', role: 'button', actionKind: 'button' as const },
    setupLink: { strategy: 'role' as const, value: 'Setup', role: 'button', actionKind: 'link' as const },
    notificationsButton: { strategy: 'role' as const, value: 'Notifications', role: 'button', actionKind: 'button' as const },
    viewProfileButton: { strategy: 'role' as const, value: 'View profile', role: 'button', actionKind: 'button' as const },
    appLauncher: { strategy: 'role' as const, value: 'App Launcher', role: 'button', shadowHost: 'one-app-launcher-header', actionKind: 'button' as const },
    psaOperations: { strategy: 'text' as const, value: 'PSA - Operations', shadowHost: 'one-appnav', actionKind: 'text' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accounts: { strategy: 'role' as const, value: 'Accounts', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accountsList: { strategy: 'role' as const, value: 'Accounts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    opportunities: { strategy: 'role' as const, value: 'Opportunities', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunitiesList: { strategy: 'role' as const, value: 'Opportunities List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    projects: { strategy: 'role' as const, value: 'Projects', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    projectsList: { strategy: 'role' as const, value: 'Projects List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    reports: { strategy: 'role' as const, value: 'Reports', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    reportsList: { strategy: 'role' as const, value: 'Reports List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    contacts: { strategy: 'role' as const, value: 'Contacts', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    contactsList: { strategy: 'role' as const, value: 'Contacts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    regions: { strategy: 'role' as const, value: 'Regions', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    regionsList: { strategy: 'role' as const, value: 'Regions List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    practices: { strategy: 'role' as const, value: 'Practices', role: 'link', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    practicesList: { strategy: 'role' as const, value: 'Practices List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    moreShowMoreNavigation: { strategy: 'role' as const, value: 'More Show more navigation items', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    personalizeYourNavBar: { strategy: 'role' as const, value: 'Edit nav items', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    tasks: { strategy: 'text' as const, value: 'Tasks', shadowHost: 'lst-breadcrumbs', actionKind: 'text' as const },
    myOpenTasksEditable: { strategy: 'role' as const, value: '*My Open Tasks Editable', role: 'link', actionKind: 'link' as const },
    newTask: { strategy: 'role' as const, value: 'New Task', role: 'button', actionKind: 'link' as const },
    assignLabel: { strategy: 'role' as const, value: 'Assign Label', role: 'button', actionKind: 'link' as const },
    itemsSorted: { strategy: 'text' as const, value: '0 items • Sorted by Due Date • Filtered by My', actionKind: 'text' as const },
    updated8MinutesAgo: { strategy: 'text' as const, value: 'Updated 8 minutes ago', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    listViewControls: { strategy: 'role' as const, value: 'List View Controls', role: 'button', actionKind: 'button' as const },
    refreshButton: { strategy: 'role' as const, value: 'Refresh', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    inlineEditButton: { strategy: 'role' as const, value: 'Edit List', role: 'button', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    sortDueDate: { strategy: 'role' as const, value: 'Sort Due Date', role: 'button', actionKind: 'link' as const },
    showDueDateColumn: { strategy: 'role' as const, value: 'Show Due Date Column Actions', role: 'button', actionKind: 'button' as const },
    sortSubject: { strategy: 'role' as const, value: 'Sort Subject', role: 'button', actionKind: 'link' as const },
    showSubjectColumnActions: { strategy: 'role' as const, value: 'Show Subject Column Actions', role: 'button', actionKind: 'button' as const },
    sortName: { strategy: 'role' as const, value: 'Sort Name', role: 'button', actionKind: 'link' as const },
    showNameColumnActions: { strategy: 'role' as const, value: 'Show Name Column Actions', role: 'button', actionKind: 'button' as const },
    sortRelatedTo: { strategy: 'role' as const, value: 'Sort Related To', role: 'button', actionKind: 'link' as const },
    showRelatedToColumn: { strategy: 'role' as const, value: 'Show Related To Column Actions', role: 'button', actionKind: 'button' as const },
    sortUkgActivityType: { strategy: 'role' as const, value: 'Sort UKG Activity Type', role: 'button', actionKind: 'link' as const },
    showUkgActivityType: { strategy: 'role' as const, value: 'Show UKG Activity Type Column Actions', role: 'button', actionKind: 'button' as const },
    ukgActivityTypeColumn: { strategy: 'role' as const, value: 'UKG Activity Type column width', role: 'textbox', actionKind: 'generic' as const },
    sortTypeDetail: { strategy: 'role' as const, value: 'Sort Type Detail', role: 'button', actionKind: 'link' as const },
    showTypeDetailColumn: { strategy: 'role' as const, value: 'Show Type Detail Column Actions', role: 'button', actionKind: 'button' as const },
    typeDetailColumnWidth: { strategy: 'role' as const, value: 'Type Detail column width', role: 'textbox', actionKind: 'generic' as const },
    sortPriority: { strategy: 'role' as const, value: 'Sort Priority', role: 'button', actionKind: 'link' as const },
    showPriorityColumnActions: { strategy: 'role' as const, value: 'Show Priority Column Actions', role: 'button', actionKind: 'button' as const },
    priorityColumnWidth: { strategy: 'role' as const, value: 'Priority column width', role: 'textbox', actionKind: 'generic' as const },
    sortStatus: { strategy: 'role' as const, value: 'Sort Status', role: 'button', actionKind: 'link' as const },
    showStatusColumnActions: { strategy: 'role' as const, value: 'Show Status Column Actions', role: 'button', actionKind: 'button' as const },
    statusColumnWidth: { strategy: 'role' as const, value: 'Status column width', role: 'textbox', actionKind: 'generic' as const },
    sortLastModifiedBy: { strategy: 'role' as const, value: 'Sort Last Modified By Alias', role: 'button', actionKind: 'link' as const },
    showLastModifiedBy: { strategy: 'role' as const, value: 'Show Last Modified By Alias Column Actions', role: 'button', actionKind: 'button' as const },
    lastModifiedByAlias: { strategy: 'role' as const, value: 'Last Modified By Alias column width', role: 'textbox', actionKind: 'generic' as const },
    noItemsToDisplay: { strategy: 'text' as const, value: 'No items to display.', actionKind: 'text' as const },
    homeCardHeader4700: { strategy: 'css' as const, value: '#homeCardHeader_470:0', actionKind: 'text' as const },
    ayushPuranik: { strategy: 'role' as const, value: 'Ayush Puranik', role: 'link', actionKind: 'link' as const },
    peterCummings: { strategy: 'role' as const, value: 'Peter Cummings', role: 'link', actionKind: 'link' as const },
    addieGao: { strategy: 'role' as const, value: 'Addie Gao', role: 'link', actionKind: 'link' as const },
    alexanderHough: { strategy: 'role' as const, value: 'Alexander Hough', role: 'link', actionKind: 'link' as const },
    foundRentalReady: { strategy: 'role' as const, value: 'Found Rental - Ready - 225EE', role: 'link', actionKind: 'link' as const },
    viewAllRecentRecords: { strategy: 'role' as const, value: 'View All Recent Records', role: 'button', actionKind: 'link' as const },
    postTab: { strategy: 'role' as const, value: 'Post', role: 'link', actionKind: 'link' as const },
    shareAnUpdate: { strategy: 'role' as const, value: '', role: 'button', actionKind: 'button' as const },
    share: { strategy: 'role' as const, value: '', role: 'button', actionKind: 'button' as const },
    sortBy: { strategy: 'role' as const, value: 'Sort by:', role: 'button', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    filterFeed: { strategy: 'role' as const, value: 'Filter Feed', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    refreshThisFeed: { strategy: 'role' as const, value: 'Refresh this feed', role: 'button', actionKind: 'button' as const },
    skipFeed: { strategy: 'role' as const, value: 'Skip Feed', role: 'link', actionKind: 'link' as const },
    followTheLeadersStart: { strategy: 'text' as const, value: 'Follow the leaders! Start following colleagues,', shadowHost: 'feeds_placeholding-empty-feed', actionKind: 'text' as const },
    followTheLeaders: { strategy: 'text' as const, value: 'Follow the leaders!', shadowHost: 'feeds_placeholding-empty-feed', actionKind: 'text' as const },
    startFollowingColleaguesGroups: { strategy: 'text' as const, value: 'Start following colleagues, groups, and records to', shadowHost: 'feeds_placeholding-empty-feed', actionKind: 'text' as const },
    updated9MinutesAgo: { strategy: 'text' as const, value: 'Updated 9 minutes ago', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    searchInput: { strategy: 'placeholder' as const, value: 'Search...', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    contactsWithLeadSource: { strategy: 'role' as const, value: 'contacts with lead source - original 3rd party', role: 'option', shadowHost: 'search_dialog-instant-result-item', actionKind: 'generic' as const },
  } as const;

  readonly sldsTable1: WebTable; // columns: ["Item Number", "", "Sort Due Date Sorted Ascending Show Due Date Column Actions", "Sort Subject Show Subject Column Actions", "Sort Name Show Name Column Actions", "Sort Related To Show Related To Column Actions", "Sort UKG Activity Type Show UKG Activity Type Column Actions", "Sort Type Detail Show Type Detail Column Actions", "Sort Priority Show Priority Column Actions", "Sort Status Show Status Column Actions", "Sort Last Modified By Alias Show Last Modified By Alias Column Actions", "Action"]

  constructor(private readonly page: Page) {
    this.sldsTable1 = webTable(this.page, '#brandBand_2 table');
  }

  async clickOpenMenuItemSubmenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.openMenuItemSubmenu));
  }

  async expectOpenMenuItemSubmenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs, soft);
  }

  async clickOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.option));
  }

  async expectOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.option), timeoutMs, soft);
  }

  async clickSkipToNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async expectSkipToNavigationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs, soft);
  }

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs, soft);
  }

  async clickSeeWhatSChanging(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.seeWhatSChanging));
  }

  async expectSeeWhatSChangingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs, soft);
  }

  async clickClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.close));
  }

  async expectCloseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.close), timeoutMs, soft);
  }

  async getInnerTextYourOrgNowHas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.yourOrgNowHas));
  }

  async expectYourOrgNowHasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs, soft);
  }

  async clickGoToSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.goToSetup));
  }

  async expectGoToSetupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.goToSetup), timeoutMs, soft);
  }

  async clickTogglePanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async doubleClickTogglePanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async expectTogglePanelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.togglePanel), timeoutMs, soft);
  }

  async getInnerTextSandboxStest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.sandboxStest));
  }

  async expectSandboxStestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sandboxStest), timeoutMs, soft);
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showMenu), timeoutMs, soft);
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

  async clickThisItemDoesnTSupportButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async doubleClickThisItemDoesnTSupportButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs, soft);
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

  async clickGuidanceCenterButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.guidanceCenterButton));
  }

  async doubleClickGuidanceCenterButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.guidanceCenterButton));
  }

  async expectGuidanceCenterButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs, soft);
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

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.appLauncher), timeoutMs, soft);
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

  async clickProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.projects));
  }

  async expectProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.projects), timeoutMs, soft);
  }

  async clickProjectsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.projectsList));
  }

  async expectProjectsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.projectsList), timeoutMs, soft);
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

  async clickRegions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.regions));
  }

  async expectRegionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.regions), timeoutMs, soft);
  }

  async clickRegionsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.regionsList));
  }

  async expectRegionsListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.regionsList), timeoutMs, soft);
  }

  async clickPractices(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.practices));
  }

  async expectPracticesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.practices), timeoutMs, soft);
  }

  async clickPracticesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.practicesList));
  }

  async expectPracticesListVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.practicesList), timeoutMs, soft);
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.moreShowMoreNavigation), timeoutMs, soft);
  }

  async clickPersonalizeYourNavBar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async doubleClickPersonalizeYourNavBar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs, soft);
  }

  async getInnerTextTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.tasks), timeoutMs, soft);
  }

  async clickMyOpenTasksEditable(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.myOpenTasksEditable));
  }

  async expectMyOpenTasksEditableVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs, soft);
  }

  async clickNewTask(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.newTask));
  }

  async expectNewTaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.newTask), timeoutMs, soft);
  }

  async clickAssignLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.assignLabel));
  }

  async expectAssignLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.assignLabel), timeoutMs, soft);
  }

  async getInnerTextItemsSorted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.itemsSorted));
  }

  async expectItemsSortedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs, soft);
  }

  async getInnerTextUpdated8MinutesAgo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo));
  }

  async expectUpdated8MinutesAgoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs, soft);
  }

  async clickListViewControls(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.listViewControls));
  }

  async doubleClickListViewControls(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.listViewControls));
  }

  async expectListViewControlsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.listViewControls), timeoutMs, soft);
  }

  async clickRefreshButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.refreshButton));
  }

  async doubleClickRefreshButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.refreshButton));
  }

  async expectRefreshButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.refreshButton), timeoutMs, soft);
  }

  async clickInlineEditButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.inlineEditButton));
  }

  async doubleClickInlineEditButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.inlineEditButton));
  }

  async expectInlineEditButtonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs, soft);
  }

  async clickSortDueDate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortDueDate));
  }

  async expectSortDueDateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs, soft);
  }

  async clickShowDueDateColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showDueDateColumn));
  }

  async doubleClickShowDueDateColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showDueDateColumn));
  }

  async expectShowDueDateColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs, soft);
  }

  async clickSortSubject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortSubject));
  }

  async expectSortSubjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortSubject), timeoutMs, soft);
  }

  async clickShowSubjectColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showSubjectColumnActions));
  }

  async doubleClickShowSubjectColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showSubjectColumnActions));
  }

  async expectShowSubjectColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs, soft);
  }

  async clickSortName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortName));
  }

  async expectSortNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortName), timeoutMs, soft);
  }

  async clickShowNameColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showNameColumnActions));
  }

  async doubleClickShowNameColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showNameColumnActions));
  }

  async expectShowNameColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs, soft);
  }

  async clickSortRelatedTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortRelatedTo));
  }

  async expectSortRelatedToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs, soft);
  }

  async clickShowRelatedToColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showRelatedToColumn));
  }

  async doubleClickShowRelatedToColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showRelatedToColumn));
  }

  async expectShowRelatedToColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs, soft);
  }

  async clickSortUkgActivityType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortUkgActivityType));
  }

  async expectSortUkgActivityTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs, soft);
  }

  async clickShowUkgActivityType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showUkgActivityType));
  }

  async doubleClickShowUkgActivityType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showUkgActivityType));
  }

  async expectShowUkgActivityTypeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs, soft);
  }

  async clickUkgActivityTypeColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.ukgActivityTypeColumn));
  }

  async expectUkgActivityTypeColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs, soft);
  }

  async clickSortTypeDetail(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortTypeDetail));
  }

  async expectSortTypeDetailVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs, soft);
  }

  async clickShowTypeDetailColumn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showTypeDetailColumn));
  }

  async doubleClickShowTypeDetailColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showTypeDetailColumn));
  }

  async expectShowTypeDetailColumnVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs, soft);
  }

  async clickTypeDetailColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.typeDetailColumnWidth));
  }

  async expectTypeDetailColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs, soft);
  }

  async clickSortPriority(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortPriority));
  }

  async expectSortPriorityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortPriority), timeoutMs, soft);
  }

  async clickShowPriorityColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showPriorityColumnActions));
  }

  async doubleClickShowPriorityColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showPriorityColumnActions));
  }

  async expectShowPriorityColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs, soft);
  }

  async clickPriorityColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.priorityColumnWidth));
  }

  async expectPriorityColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs, soft);
  }

  async clickSortStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortStatus));
  }

  async expectSortStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortStatus), timeoutMs, soft);
  }

  async clickShowStatusColumnActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showStatusColumnActions));
  }

  async doubleClickShowStatusColumnActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs, soft);
  }

  async clickStatusColumnWidth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.statusColumnWidth));
  }

  async expectStatusColumnWidthVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs, soft);
  }

  async clickSortLastModifiedBy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortLastModifiedBy));
  }

  async expectSortLastModifiedByVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs, soft);
  }

  async clickShowLastModifiedBy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.showLastModifiedBy));
  }

  async doubleClickShowLastModifiedBy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.showLastModifiedBy));
  }

  async expectShowLastModifiedByVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs, soft);
  }

  async clickLastModifiedByAlias(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.lastModifiedByAlias));
  }

  async expectLastModifiedByAliasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs, soft);
  }

  async getInnerTextNoItemsToDisplay(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.noItemsToDisplay));
  }

  async expectNoItemsToDisplayVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs, soft);
  }

  async getInnerTextHomeCardHeader4700(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader4700));
  }

  async expectHomeCardHeader4700Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs, soft);
  }

  async clickAyushPuranik(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.ayushPuranik));
  }

  async expectAyushPuranikVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs, soft);
  }

  async clickPeterCummings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.peterCummings));
  }

  async expectPeterCummingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.peterCummings), timeoutMs, soft);
  }

  async clickAddieGao(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.addieGao));
  }

  async expectAddieGaoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.addieGao), timeoutMs, soft);
  }

  async clickAlexanderHough(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.alexanderHough));
  }

  async expectAlexanderHoughVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs, soft);
  }

  async clickFoundRentalReady(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.foundRentalReady));
  }

  async expectFoundRentalReadyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs, soft);
  }

  async clickViewAllRecentRecords(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.viewAllRecentRecords));
  }

  async expectViewAllRecentRecordsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs, soft);
  }

  async clickPostTab(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.postTab));
  }

  async expectPostTabVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.postTab), timeoutMs, soft);
  }

  async clickShareAnUpdate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.shareAnUpdate));
  }

  async doubleClickShareAnUpdate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.shareAnUpdate));
  }

  async expectShareAnUpdateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs, soft);
  }

  async clickShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.share));
  }

  async doubleClickShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.share));
  }

  async expectShareVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.share), timeoutMs, soft);
  }

  async clickSortBy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sortBy));
  }

  async doubleClickSortBy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortBy));
  }

  async expectSortByVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sortBy), timeoutMs, soft);
  }

  async clickFilterFeed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.filterFeed));
  }

  async doubleClickFilterFeed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.filterFeed));
  }

  async expectFilterFeedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.filterFeed), timeoutMs, soft);
  }

  async clickRefreshThisFeed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.refreshThisFeed));
  }

  async doubleClickRefreshThisFeed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.refreshThisFeed));
  }

  async expectRefreshThisFeedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs, soft);
  }

  async clickSkipFeed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.skipFeed));
  }

  async expectSkipFeedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.skipFeed), timeoutMs, soft);
  }

  async getInnerTextFollowTheLeadersStart(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.followTheLeadersStart));
  }

  async expectFollowTheLeadersStartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs, soft);
  }

  async getInnerTextFollowTheLeaders(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.followTheLeaders));
  }

  async expectFollowTheLeadersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs, soft);
  }

  async getInnerTextStartFollowingColleaguesGroups(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups));
  }

  async expectStartFollowingColleaguesGroupsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'Home | Salesforce', timeoutMs);
  }

  async getInnerTextUpdated9MinutesAgo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo));
  }

  async expectUpdated9MinutesAgoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs, soft);
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

  async clickContactsWithLeadSource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.contactsWithLeadSource));
  }

  async expectContactsWithLeadSourceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs, soft);
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


  async doubleClickOpenMenuItemSubmenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.openMenuItemSubmenu));
  }

  async longPressOpenMenuItemSubmenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.openMenuItemSubmenu));
  }

  async expectOpenMenuItemSubmenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.openMenuItemSubmenu), expected, timeoutMs);
  }

  async expectOpenMenuItemSubmenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.openMenuItemSubmenu), substring, timeoutMs);
  }

  async expectOpenMenuItemSubmenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.openMenuItemSubmenu), value, timeoutMs);
  }

  async expectOpenMenuItemSubmenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.openMenuItemSubmenu), timeoutMs);
  }

  async expectOpenMenuItemSubmenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.openMenuItemSubmenu), count, timeoutMs);
  }

  async scrollOpenMenuItemSubmenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.openMenuItemSubmenu));
  }

  async doubleClickOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.option));
  }

  async longPressOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.option));
  }

  async expectOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.option), expected, timeoutMs);
  }

  async expectOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.option), substring, timeoutMs);
  }

  async expectOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.option), value, timeoutMs);
  }

  async expectOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.option), timeoutMs);
  }

  async expectOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.option), count, timeoutMs);
  }

  async scrollOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.option));
  }

  async doubleClickSkipToNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async longPressSkipToNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async expectSkipToNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.skipToNavigation), expected, timeoutMs);
  }

  async expectSkipToNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.skipToNavigation), substring, timeoutMs);
  }

  async expectSkipToNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.skipToNavigation), value, timeoutMs);
  }

  async expectSkipToNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.skipToNavigation), count, timeoutMs);
  }

  async scrollSkipToNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.skipToNavigation));
  }

  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.skipToMainContent), substring, timeoutMs);
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.skipToMainContent), count, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.skipToMainContent));
  }

  async doubleClickSeeWhatSChanging(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.seeWhatSChanging));
  }

  async longPressSeeWhatSChanging(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.seeWhatSChanging));
  }

  async expectSeeWhatSChangingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.seeWhatSChanging), expected, timeoutMs);
  }

  async expectSeeWhatSChangingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.seeWhatSChanging), substring, timeoutMs);
  }

  async expectSeeWhatSChangingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.seeWhatSChanging), value, timeoutMs);
  }

  async expectSeeWhatSChangingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.seeWhatSChanging), timeoutMs);
  }

  async expectSeeWhatSChangingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.seeWhatSChanging), count, timeoutMs);
  }

  async scrollSeeWhatSChangingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.seeWhatSChanging));
  }

  async doubleClickClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.close));
  }

  async longPressClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.close));
  }

  async expectCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.close), expected, timeoutMs);
  }

  async expectCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.close), substring, timeoutMs);
  }

  async expectCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.close), value, timeoutMs);
  }

  async expectCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.close), timeoutMs);
  }

  async expectCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.close), count, timeoutMs);
  }

  async scrollCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.close));
  }

  async clickYourOrgNowHas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.yourOrgNowHas));
  }

  async doubleClickYourOrgNowHas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.yourOrgNowHas));
  }

  async longPressYourOrgNowHas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.yourOrgNowHas));
  }

  async expectYourOrgNowHasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.yourOrgNowHas), expected, timeoutMs);
  }

  async expectYourOrgNowHasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.yourOrgNowHas), substring, timeoutMs);
  }

  async expectYourOrgNowHasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.yourOrgNowHas), value, timeoutMs);
  }

  async expectYourOrgNowHasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.yourOrgNowHas), timeoutMs);
  }

  async expectYourOrgNowHasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.yourOrgNowHas), count, timeoutMs);
  }

  async scrollYourOrgNowHasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.yourOrgNowHas));
  }

  async doubleClickGoToSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.goToSetup));
  }

  async longPressGoToSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.goToSetup));
  }

  async expectGoToSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.goToSetup), expected, timeoutMs);
  }

  async expectGoToSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.goToSetup), substring, timeoutMs);
  }

  async expectGoToSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.goToSetup), value, timeoutMs);
  }

  async expectGoToSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.goToSetup), timeoutMs);
  }

  async expectGoToSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.goToSetup), count, timeoutMs);
  }

  async scrollGoToSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.goToSetup));
  }

  async longPressTogglePanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
  }

  async expectTogglePanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.togglePanel), expected, timeoutMs);
  }

  async expectTogglePanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.togglePanel), substring, timeoutMs);
  }

  async expectTogglePanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.togglePanel), value, timeoutMs);
  }

  async expectTogglePanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.togglePanel), count, timeoutMs);
  }

  async scrollTogglePanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.togglePanel));
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

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showMenu));
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showMenu), substring, timeoutMs);
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showMenu), count, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showMenu));
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

  async longPressThisItemDoesnTSupportButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
  }

  async expectThisItemDoesnTSupportButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), expected, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), substring, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), value, timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), timeoutMs);
  }

  async expectThisItemDoesnTSupportButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton), count, timeoutMs);
  }

  async scrollThisItemDoesnTSupportButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.thisItemDoesnTSupportButton));
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

  async longPressGuidanceCenterButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.guidanceCenterButton));
  }

  async expectGuidanceCenterButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.guidanceCenterButton), expected, timeoutMs);
  }

  async expectGuidanceCenterButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.guidanceCenterButton), substring, timeoutMs);
  }

  async expectGuidanceCenterButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.guidanceCenterButton), value, timeoutMs);
  }

  async expectGuidanceCenterButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.guidanceCenterButton), timeoutMs);
  }

  async expectGuidanceCenterButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.guidanceCenterButton), count, timeoutMs);
  }

  async scrollGuidanceCenterButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.guidanceCenterButton));
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

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.appLauncher), substring, timeoutMs);
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.appLauncher), count, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.appLauncher));
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

  async doubleClickProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.projects));
  }

  async longPressProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.projects));
  }

  async expectProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.projects), expected, timeoutMs);
  }

  async expectProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.projects), substring, timeoutMs);
  }

  async expectProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.projects), value, timeoutMs);
  }

  async expectProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.projects), timeoutMs);
  }

  async expectProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.projects), count, timeoutMs);
  }

  async scrollProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.projects));
  }

  async doubleClickProjectsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.projectsList));
  }

  async longPressProjectsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.projectsList));
  }

  async expectProjectsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.projectsList), expected, timeoutMs);
  }

  async expectProjectsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.projectsList), substring, timeoutMs);
  }

  async expectProjectsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.projectsList), value, timeoutMs);
  }

  async expectProjectsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.projectsList), timeoutMs);
  }

  async expectProjectsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.projectsList), count, timeoutMs);
  }

  async scrollProjectsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.projectsList));
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

  async doubleClickRegions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.regions));
  }

  async longPressRegions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.regions));
  }

  async expectRegionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.regions), expected, timeoutMs);
  }

  async expectRegionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.regions), substring, timeoutMs);
  }

  async expectRegionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.regions), value, timeoutMs);
  }

  async expectRegionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.regions), timeoutMs);
  }

  async expectRegionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.regions), count, timeoutMs);
  }

  async scrollRegionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.regions));
  }

  async doubleClickRegionsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.regionsList));
  }

  async longPressRegionsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.regionsList));
  }

  async expectRegionsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.regionsList), expected, timeoutMs);
  }

  async expectRegionsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.regionsList), substring, timeoutMs);
  }

  async expectRegionsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.regionsList), value, timeoutMs);
  }

  async expectRegionsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.regionsList), timeoutMs);
  }

  async expectRegionsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.regionsList), count, timeoutMs);
  }

  async scrollRegionsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.regionsList));
  }

  async doubleClickPractices(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.practices));
  }

  async longPressPractices(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.practices));
  }

  async expectPracticesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.practices), expected, timeoutMs);
  }

  async expectPracticesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.practices), substring, timeoutMs);
  }

  async expectPracticesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.practices), value, timeoutMs);
  }

  async expectPracticesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.practices), timeoutMs);
  }

  async expectPracticesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.practices), count, timeoutMs);
  }

  async scrollPracticesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.practices));
  }

  async doubleClickPracticesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.practicesList));
  }

  async longPressPracticesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.practicesList));
  }

  async expectPracticesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.practicesList), expected, timeoutMs);
  }

  async expectPracticesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.practicesList), substring, timeoutMs);
  }

  async expectPracticesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.practicesList), value, timeoutMs);
  }

  async expectPracticesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.practicesList), timeoutMs);
  }

  async expectPracticesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.practicesList), count, timeoutMs);
  }

  async scrollPracticesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.practicesList));
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

  async longPressPersonalizeYourNavBar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.personalizeYourNavBar), expected, timeoutMs);
  }

  async expectPersonalizeYourNavBarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.personalizeYourNavBar), substring, timeoutMs);
  }

  async expectPersonalizeYourNavBarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.personalizeYourNavBar), value, timeoutMs);
  }

  async expectPersonalizeYourNavBarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.personalizeYourNavBar), count, timeoutMs);
  }

  async scrollPersonalizeYourNavBarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.personalizeYourNavBar));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.tasks), substring, timeoutMs);
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.tasks), count, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.tasks));
  }

  async doubleClickMyOpenTasksEditable(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.myOpenTasksEditable));
  }

  async longPressMyOpenTasksEditable(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.myOpenTasksEditable));
  }

  async expectMyOpenTasksEditableHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.myOpenTasksEditable), expected, timeoutMs);
  }

  async expectMyOpenTasksEditableContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.myOpenTasksEditable), substring, timeoutMs);
  }

  async expectMyOpenTasksEditableValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.myOpenTasksEditable), value, timeoutMs);
  }

  async expectMyOpenTasksEditableEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.myOpenTasksEditable), timeoutMs);
  }

  async expectMyOpenTasksEditableCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.myOpenTasksEditable), count, timeoutMs);
  }

  async scrollMyOpenTasksEditableIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.myOpenTasksEditable));
  }

  async doubleClickNewTask(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.newTask));
  }

  async longPressNewTask(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.newTask));
  }

  async expectNewTaskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.newTask), expected, timeoutMs);
  }

  async expectNewTaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.newTask), substring, timeoutMs);
  }

  async expectNewTaskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.newTask), value, timeoutMs);
  }

  async expectNewTaskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.newTask), timeoutMs);
  }

  async expectNewTaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.newTask), count, timeoutMs);
  }

  async scrollNewTaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.newTask));
  }

  async doubleClickAssignLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.assignLabel));
  }

  async longPressAssignLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.assignLabel));
  }

  async expectAssignLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.assignLabel), expected, timeoutMs);
  }

  async expectAssignLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.assignLabel), substring, timeoutMs);
  }

  async expectAssignLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.assignLabel), value, timeoutMs);
  }

  async expectAssignLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.assignLabel), count, timeoutMs);
  }

  async scrollAssignLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.assignLabel));
  }

  async clickItemsSorted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.itemsSorted));
  }

  async doubleClickItemsSorted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.itemsSorted));
  }

  async longPressItemsSorted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.itemsSorted));
  }

  async expectItemsSortedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.itemsSorted), expected, timeoutMs);
  }

  async expectItemsSortedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.itemsSorted), substring, timeoutMs);
  }

  async expectItemsSortedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.itemsSorted), value, timeoutMs);
  }

  async expectItemsSortedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.itemsSorted), timeoutMs);
  }

  async expectItemsSortedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.itemsSorted), count, timeoutMs);
  }

  async scrollItemsSortedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.itemsSorted));
  }

  async clickUpdated8MinutesAgo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo));
  }

  async doubleClickUpdated8MinutesAgo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo));
  }

  async longPressUpdated8MinutesAgo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo));
  }

  async expectUpdated8MinutesAgoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.updated8MinutesAgo), expected, timeoutMs);
  }

  async expectUpdated8MinutesAgoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.updated8MinutesAgo), substring, timeoutMs);
  }

  async expectUpdated8MinutesAgoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.updated8MinutesAgo), value, timeoutMs);
  }

  async expectUpdated8MinutesAgoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.updated8MinutesAgo), timeoutMs);
  }

  async expectUpdated8MinutesAgoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.updated8MinutesAgo), count, timeoutMs);
  }

  async scrollUpdated8MinutesAgoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.updated8MinutesAgo));
  }

  async longPressListViewControls(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.listViewControls));
  }

  async expectListViewControlsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.listViewControls), expected, timeoutMs);
  }

  async expectListViewControlsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.listViewControls), substring, timeoutMs);
  }

  async expectListViewControlsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.listViewControls), value, timeoutMs);
  }

  async expectListViewControlsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.listViewControls), count, timeoutMs);
  }

  async scrollListViewControlsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.listViewControls));
  }

  async longPressRefreshButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.refreshButton));
  }

  async expectRefreshButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.refreshButton), expected, timeoutMs);
  }

  async expectRefreshButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.refreshButton), substring, timeoutMs);
  }

  async expectRefreshButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.refreshButton), value, timeoutMs);
  }

  async expectRefreshButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.refreshButton), count, timeoutMs);
  }

  async scrollRefreshButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.refreshButton));
  }

  async longPressInlineEditButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.inlineEditButton));
  }

  async expectInlineEditButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.inlineEditButton), expected, timeoutMs);
  }

  async expectInlineEditButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.inlineEditButton), substring, timeoutMs);
  }

  async expectInlineEditButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.inlineEditButton), value, timeoutMs);
  }

  async expectInlineEditButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.inlineEditButton), count, timeoutMs);
  }

  async scrollInlineEditButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.inlineEditButton));
  }

  async doubleClickSortDueDate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortDueDate));
  }

  async longPressSortDueDate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortDueDate));
  }

  async expectSortDueDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortDueDate), expected, timeoutMs);
  }

  async expectSortDueDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortDueDate), substring, timeoutMs);
  }

  async expectSortDueDateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortDueDate), value, timeoutMs);
  }

  async expectSortDueDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortDueDate), timeoutMs);
  }

  async expectSortDueDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortDueDate), count, timeoutMs);
  }

  async scrollSortDueDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortDueDate));
  }

  async longPressShowDueDateColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showDueDateColumn));
  }

  async expectShowDueDateColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showDueDateColumn), expected, timeoutMs);
  }

  async expectShowDueDateColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showDueDateColumn), substring, timeoutMs);
  }

  async expectShowDueDateColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showDueDateColumn), value, timeoutMs);
  }

  async expectShowDueDateColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showDueDateColumn), timeoutMs);
  }

  async expectShowDueDateColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showDueDateColumn), count, timeoutMs);
  }

  async scrollShowDueDateColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showDueDateColumn));
  }

  async doubleClickSortSubject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortSubject));
  }

  async longPressSortSubject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortSubject));
  }

  async expectSortSubjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortSubject), expected, timeoutMs);
  }

  async expectSortSubjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortSubject), substring, timeoutMs);
  }

  async expectSortSubjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortSubject), value, timeoutMs);
  }

  async expectSortSubjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortSubject), timeoutMs);
  }

  async expectSortSubjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortSubject), count, timeoutMs);
  }

  async scrollSortSubjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortSubject));
  }

  async longPressShowSubjectColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showSubjectColumnActions));
  }

  async expectShowSubjectColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showSubjectColumnActions), expected, timeoutMs);
  }

  async expectShowSubjectColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showSubjectColumnActions), substring, timeoutMs);
  }

  async expectShowSubjectColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showSubjectColumnActions), value, timeoutMs);
  }

  async expectShowSubjectColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showSubjectColumnActions), timeoutMs);
  }

  async expectShowSubjectColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showSubjectColumnActions), count, timeoutMs);
  }

  async scrollShowSubjectColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showSubjectColumnActions));
  }

  async doubleClickSortName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortName));
  }

  async longPressSortName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortName));
  }

  async expectSortNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortName), expected, timeoutMs);
  }

  async expectSortNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortName), substring, timeoutMs);
  }

  async expectSortNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortName), value, timeoutMs);
  }

  async expectSortNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortName), timeoutMs);
  }

  async expectSortNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortName), count, timeoutMs);
  }

  async scrollSortNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortName));
  }

  async longPressShowNameColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showNameColumnActions));
  }

  async expectShowNameColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showNameColumnActions), expected, timeoutMs);
  }

  async expectShowNameColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showNameColumnActions), substring, timeoutMs);
  }

  async expectShowNameColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showNameColumnActions), value, timeoutMs);
  }

  async expectShowNameColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showNameColumnActions), timeoutMs);
  }

  async expectShowNameColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showNameColumnActions), count, timeoutMs);
  }

  async scrollShowNameColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showNameColumnActions));
  }

  async doubleClickSortRelatedTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortRelatedTo));
  }

  async longPressSortRelatedTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortRelatedTo));
  }

  async expectSortRelatedToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortRelatedTo), expected, timeoutMs);
  }

  async expectSortRelatedToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortRelatedTo), substring, timeoutMs);
  }

  async expectSortRelatedToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortRelatedTo), value, timeoutMs);
  }

  async expectSortRelatedToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortRelatedTo), timeoutMs);
  }

  async expectSortRelatedToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortRelatedTo), count, timeoutMs);
  }

  async scrollSortRelatedToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortRelatedTo));
  }

  async longPressShowRelatedToColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showRelatedToColumn));
  }

  async expectShowRelatedToColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showRelatedToColumn), expected, timeoutMs);
  }

  async expectShowRelatedToColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showRelatedToColumn), substring, timeoutMs);
  }

  async expectShowRelatedToColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showRelatedToColumn), value, timeoutMs);
  }

  async expectShowRelatedToColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showRelatedToColumn), timeoutMs);
  }

  async expectShowRelatedToColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showRelatedToColumn), count, timeoutMs);
  }

  async scrollShowRelatedToColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showRelatedToColumn));
  }

  async doubleClickSortUkgActivityType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortUkgActivityType));
  }

  async longPressSortUkgActivityType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortUkgActivityType));
  }

  async expectSortUkgActivityTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortUkgActivityType), expected, timeoutMs);
  }

  async expectSortUkgActivityTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortUkgActivityType), substring, timeoutMs);
  }

  async expectSortUkgActivityTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortUkgActivityType), value, timeoutMs);
  }

  async expectSortUkgActivityTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortUkgActivityType), timeoutMs);
  }

  async expectSortUkgActivityTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortUkgActivityType), count, timeoutMs);
  }

  async scrollSortUkgActivityTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortUkgActivityType));
  }

  async longPressShowUkgActivityType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showUkgActivityType));
  }

  async expectShowUkgActivityTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showUkgActivityType), expected, timeoutMs);
  }

  async expectShowUkgActivityTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showUkgActivityType), substring, timeoutMs);
  }

  async expectShowUkgActivityTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showUkgActivityType), value, timeoutMs);
  }

  async expectShowUkgActivityTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showUkgActivityType), timeoutMs);
  }

  async expectShowUkgActivityTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showUkgActivityType), count, timeoutMs);
  }

  async scrollShowUkgActivityTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showUkgActivityType));
  }

  async doubleClickUkgActivityTypeColumn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.ukgActivityTypeColumn));
  }

  async longPressUkgActivityTypeColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.ukgActivityTypeColumn));
  }

  async expectUkgActivityTypeColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), expected, timeoutMs);
  }

  async expectUkgActivityTypeColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), substring, timeoutMs);
  }

  async expectUkgActivityTypeColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), value, timeoutMs);
  }

  async expectUkgActivityTypeColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), timeoutMs);
  }

  async expectUkgActivityTypeColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.ukgActivityTypeColumn), count, timeoutMs);
  }

  async scrollUkgActivityTypeColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.ukgActivityTypeColumn));
  }

  async doubleClickSortTypeDetail(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortTypeDetail));
  }

  async longPressSortTypeDetail(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortTypeDetail));
  }

  async expectSortTypeDetailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortTypeDetail), expected, timeoutMs);
  }

  async expectSortTypeDetailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortTypeDetail), substring, timeoutMs);
  }

  async expectSortTypeDetailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortTypeDetail), value, timeoutMs);
  }

  async expectSortTypeDetailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortTypeDetail), timeoutMs);
  }

  async expectSortTypeDetailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortTypeDetail), count, timeoutMs);
  }

  async scrollSortTypeDetailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortTypeDetail));
  }

  async longPressShowTypeDetailColumn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showTypeDetailColumn));
  }

  async expectShowTypeDetailColumnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showTypeDetailColumn), expected, timeoutMs);
  }

  async expectShowTypeDetailColumnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showTypeDetailColumn), substring, timeoutMs);
  }

  async expectShowTypeDetailColumnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showTypeDetailColumn), value, timeoutMs);
  }

  async expectShowTypeDetailColumnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showTypeDetailColumn), timeoutMs);
  }

  async expectShowTypeDetailColumnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showTypeDetailColumn), count, timeoutMs);
  }

  async scrollShowTypeDetailColumnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showTypeDetailColumn));
  }

  async doubleClickTypeDetailColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.typeDetailColumnWidth));
  }

  async longPressTypeDetailColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.typeDetailColumnWidth));
  }

  async expectTypeDetailColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.typeDetailColumnWidth), expected, timeoutMs);
  }

  async expectTypeDetailColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.typeDetailColumnWidth), substring, timeoutMs);
  }

  async expectTypeDetailColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.typeDetailColumnWidth), value, timeoutMs);
  }

  async expectTypeDetailColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.typeDetailColumnWidth), timeoutMs);
  }

  async expectTypeDetailColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.typeDetailColumnWidth), count, timeoutMs);
  }

  async scrollTypeDetailColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.typeDetailColumnWidth));
  }

  async doubleClickSortPriority(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortPriority));
  }

  async longPressSortPriority(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortPriority));
  }

  async expectSortPriorityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortPriority), expected, timeoutMs);
  }

  async expectSortPriorityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortPriority), substring, timeoutMs);
  }

  async expectSortPriorityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortPriority), value, timeoutMs);
  }

  async expectSortPriorityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortPriority), timeoutMs);
  }

  async expectSortPriorityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortPriority), count, timeoutMs);
  }

  async scrollSortPriorityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortPriority));
  }

  async longPressShowPriorityColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showPriorityColumnActions));
  }

  async expectShowPriorityColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showPriorityColumnActions), expected, timeoutMs);
  }

  async expectShowPriorityColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showPriorityColumnActions), substring, timeoutMs);
  }

  async expectShowPriorityColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showPriorityColumnActions), value, timeoutMs);
  }

  async expectShowPriorityColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showPriorityColumnActions), timeoutMs);
  }

  async expectShowPriorityColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showPriorityColumnActions), count, timeoutMs);
  }

  async scrollShowPriorityColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showPriorityColumnActions));
  }

  async doubleClickPriorityColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.priorityColumnWidth));
  }

  async longPressPriorityColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.priorityColumnWidth));
  }

  async expectPriorityColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.priorityColumnWidth), expected, timeoutMs);
  }

  async expectPriorityColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.priorityColumnWidth), substring, timeoutMs);
  }

  async expectPriorityColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.priorityColumnWidth), value, timeoutMs);
  }

  async expectPriorityColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.priorityColumnWidth), timeoutMs);
  }

  async expectPriorityColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.priorityColumnWidth), count, timeoutMs);
  }

  async scrollPriorityColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.priorityColumnWidth));
  }

  async doubleClickSortStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortStatus));
  }

  async longPressSortStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortStatus));
  }

  async expectSortStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortStatus), expected, timeoutMs);
  }

  async expectSortStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortStatus), substring, timeoutMs);
  }

  async expectSortStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortStatus), value, timeoutMs);
  }

  async expectSortStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortStatus), timeoutMs);
  }

  async expectSortStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortStatus), count, timeoutMs);
  }

  async scrollSortStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortStatus));
  }

  async longPressShowStatusColumnActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showStatusColumnActions));
  }

  async expectShowStatusColumnActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showStatusColumnActions), expected, timeoutMs);
  }

  async expectShowStatusColumnActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showStatusColumnActions), substring, timeoutMs);
  }

  async expectShowStatusColumnActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showStatusColumnActions), value, timeoutMs);
  }

  async expectShowStatusColumnActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showStatusColumnActions), timeoutMs);
  }

  async expectShowStatusColumnActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showStatusColumnActions), count, timeoutMs);
  }

  async scrollShowStatusColumnActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showStatusColumnActions));
  }

  async doubleClickStatusColumnWidth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.statusColumnWidth));
  }

  async longPressStatusColumnWidth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.statusColumnWidth));
  }

  async expectStatusColumnWidthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.statusColumnWidth), expected, timeoutMs);
  }

  async expectStatusColumnWidthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.statusColumnWidth), substring, timeoutMs);
  }

  async expectStatusColumnWidthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.statusColumnWidth), value, timeoutMs);
  }

  async expectStatusColumnWidthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.statusColumnWidth), timeoutMs);
  }

  async expectStatusColumnWidthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.statusColumnWidth), count, timeoutMs);
  }

  async scrollStatusColumnWidthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.statusColumnWidth));
  }

  async doubleClickSortLastModifiedBy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sortLastModifiedBy));
  }

  async longPressSortLastModifiedBy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortLastModifiedBy));
  }

  async expectSortLastModifiedByHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortLastModifiedBy), expected, timeoutMs);
  }

  async expectSortLastModifiedByContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortLastModifiedBy), substring, timeoutMs);
  }

  async expectSortLastModifiedByValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortLastModifiedBy), value, timeoutMs);
  }

  async expectSortLastModifiedByEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortLastModifiedBy), timeoutMs);
  }

  async expectSortLastModifiedByCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortLastModifiedBy), count, timeoutMs);
  }

  async scrollSortLastModifiedByIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortLastModifiedBy));
  }

  async longPressShowLastModifiedBy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.showLastModifiedBy));
  }

  async expectShowLastModifiedByHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.showLastModifiedBy), expected, timeoutMs);
  }

  async expectShowLastModifiedByContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.showLastModifiedBy), substring, timeoutMs);
  }

  async expectShowLastModifiedByValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.showLastModifiedBy), value, timeoutMs);
  }

  async expectShowLastModifiedByEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.showLastModifiedBy), timeoutMs);
  }

  async expectShowLastModifiedByCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.showLastModifiedBy), count, timeoutMs);
  }

  async scrollShowLastModifiedByIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.showLastModifiedBy));
  }

  async doubleClickLastModifiedByAlias(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.lastModifiedByAlias));
  }

  async longPressLastModifiedByAlias(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.lastModifiedByAlias));
  }

  async expectLastModifiedByAliasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.lastModifiedByAlias), expected, timeoutMs);
  }

  async expectLastModifiedByAliasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.lastModifiedByAlias), substring, timeoutMs);
  }

  async expectLastModifiedByAliasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.lastModifiedByAlias), value, timeoutMs);
  }

  async expectLastModifiedByAliasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.lastModifiedByAlias), timeoutMs);
  }

  async expectLastModifiedByAliasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.lastModifiedByAlias), count, timeoutMs);
  }

  async scrollLastModifiedByAliasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.lastModifiedByAlias));
  }

  async clickNoItemsToDisplay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.noItemsToDisplay));
  }

  async doubleClickNoItemsToDisplay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.noItemsToDisplay));
  }

  async longPressNoItemsToDisplay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.noItemsToDisplay));
  }

  async expectNoItemsToDisplayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.noItemsToDisplay), expected, timeoutMs);
  }

  async expectNoItemsToDisplayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.noItemsToDisplay), substring, timeoutMs);
  }

  async expectNoItemsToDisplayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.noItemsToDisplay), value, timeoutMs);
  }

  async expectNoItemsToDisplayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.noItemsToDisplay), timeoutMs);
  }

  async expectNoItemsToDisplayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.noItemsToDisplay), count, timeoutMs);
  }

  async scrollNoItemsToDisplayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.noItemsToDisplay));
  }

  async clickHomeCardHeader4700(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader4700));
  }

  async doubleClickHomeCardHeader4700(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader4700));
  }

  async longPressHomeCardHeader4700(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader4700));
  }

  async expectHomeCardHeader4700Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.homeCardHeader4700), expected, timeoutMs);
  }

  async expectHomeCardHeader4700ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.homeCardHeader4700), substring, timeoutMs);
  }

  async expectHomeCardHeader4700Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.homeCardHeader4700), value, timeoutMs);
  }

  async expectHomeCardHeader4700Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.homeCardHeader4700), timeoutMs);
  }

  async expectHomeCardHeader4700Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.homeCardHeader4700), count, timeoutMs);
  }

  async scrollHomeCardHeader4700IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.homeCardHeader4700));
  }

  async doubleClickAyushPuranik(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.ayushPuranik));
  }

  async longPressAyushPuranik(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.ayushPuranik));
  }

  async expectAyushPuranikHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.ayushPuranik), expected, timeoutMs);
  }

  async expectAyushPuranikContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.ayushPuranik), substring, timeoutMs);
  }

  async expectAyushPuranikValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.ayushPuranik), value, timeoutMs);
  }

  async expectAyushPuranikEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.ayushPuranik), timeoutMs);
  }

  async expectAyushPuranikCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.ayushPuranik), count, timeoutMs);
  }

  async scrollAyushPuranikIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.ayushPuranik));
  }

  async doubleClickPeterCummings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.peterCummings));
  }

  async longPressPeterCummings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.peterCummings));
  }

  async expectPeterCummingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.peterCummings), expected, timeoutMs);
  }

  async expectPeterCummingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.peterCummings), substring, timeoutMs);
  }

  async expectPeterCummingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.peterCummings), value, timeoutMs);
  }

  async expectPeterCummingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.peterCummings), timeoutMs);
  }

  async expectPeterCummingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.peterCummings), count, timeoutMs);
  }

  async scrollPeterCummingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.peterCummings));
  }

  async doubleClickAddieGao(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.addieGao));
  }

  async longPressAddieGao(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.addieGao));
  }

  async expectAddieGaoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.addieGao), expected, timeoutMs);
  }

  async expectAddieGaoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.addieGao), substring, timeoutMs);
  }

  async expectAddieGaoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.addieGao), value, timeoutMs);
  }

  async expectAddieGaoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.addieGao), timeoutMs);
  }

  async expectAddieGaoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.addieGao), count, timeoutMs);
  }

  async scrollAddieGaoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.addieGao));
  }

  async doubleClickAlexanderHough(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.alexanderHough));
  }

  async longPressAlexanderHough(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.alexanderHough));
  }

  async expectAlexanderHoughHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.alexanderHough), expected, timeoutMs);
  }

  async expectAlexanderHoughContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.alexanderHough), substring, timeoutMs);
  }

  async expectAlexanderHoughValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.alexanderHough), value, timeoutMs);
  }

  async expectAlexanderHoughEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.alexanderHough), timeoutMs);
  }

  async expectAlexanderHoughCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.alexanderHough), count, timeoutMs);
  }

  async scrollAlexanderHoughIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.alexanderHough));
  }

  async doubleClickFoundRentalReady(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.foundRentalReady));
  }

  async longPressFoundRentalReady(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.foundRentalReady));
  }

  async expectFoundRentalReadyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.foundRentalReady), expected, timeoutMs);
  }

  async expectFoundRentalReadyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.foundRentalReady), substring, timeoutMs);
  }

  async expectFoundRentalReadyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.foundRentalReady), value, timeoutMs);
  }

  async expectFoundRentalReadyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.foundRentalReady), timeoutMs);
  }

  async expectFoundRentalReadyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.foundRentalReady), count, timeoutMs);
  }

  async scrollFoundRentalReadyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.foundRentalReady));
  }

  async doubleClickViewAllRecentRecords(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.viewAllRecentRecords));
  }

  async longPressViewAllRecentRecords(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.viewAllRecentRecords));
  }

  async expectViewAllRecentRecordsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.viewAllRecentRecords), expected, timeoutMs);
  }

  async expectViewAllRecentRecordsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.viewAllRecentRecords), substring, timeoutMs);
  }

  async expectViewAllRecentRecordsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.viewAllRecentRecords), value, timeoutMs);
  }

  async expectViewAllRecentRecordsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.viewAllRecentRecords), timeoutMs);
  }

  async expectViewAllRecentRecordsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.viewAllRecentRecords), count, timeoutMs);
  }

  async scrollViewAllRecentRecordsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.viewAllRecentRecords));
  }

  async doubleClickPostTab(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.postTab));
  }

  async longPressPostTab(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.postTab));
  }

  async expectPostTabHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.postTab), expected, timeoutMs);
  }

  async expectPostTabContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.postTab), substring, timeoutMs);
  }

  async expectPostTabValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.postTab), value, timeoutMs);
  }

  async expectPostTabEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.postTab), timeoutMs);
  }

  async expectPostTabCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.postTab), count, timeoutMs);
  }

  async scrollPostTabIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.postTab));
  }

  async longPressShareAnUpdate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.shareAnUpdate));
  }

  async expectShareAnUpdateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.shareAnUpdate), expected, timeoutMs);
  }

  async expectShareAnUpdateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.shareAnUpdate), substring, timeoutMs);
  }

  async expectShareAnUpdateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.shareAnUpdate), value, timeoutMs);
  }

  async expectShareAnUpdateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.shareAnUpdate), timeoutMs);
  }

  async expectShareAnUpdateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.shareAnUpdate), count, timeoutMs);
  }

  async scrollShareAnUpdateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.shareAnUpdate));
  }

  async longPressShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.share));
  }

  async expectShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.share), expected, timeoutMs);
  }

  async expectShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.share), substring, timeoutMs);
  }

  async expectShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.share), value, timeoutMs);
  }

  async expectShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.share), timeoutMs);
  }

  async expectShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.share), count, timeoutMs);
  }

  async scrollShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.share));
  }

  async longPressSortBy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sortBy));
  }

  async expectSortByHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sortBy), expected, timeoutMs);
  }

  async expectSortByContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sortBy), substring, timeoutMs);
  }

  async expectSortByValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sortBy), value, timeoutMs);
  }

  async expectSortByEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sortBy), timeoutMs);
  }

  async expectSortByCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sortBy), count, timeoutMs);
  }

  async scrollSortByIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sortBy));
  }

  async longPressFilterFeed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.filterFeed));
  }

  async expectFilterFeedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.filterFeed), expected, timeoutMs);
  }

  async expectFilterFeedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.filterFeed), substring, timeoutMs);
  }

  async expectFilterFeedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.filterFeed), value, timeoutMs);
  }

  async expectFilterFeedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.filterFeed), timeoutMs);
  }

  async expectFilterFeedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.filterFeed), count, timeoutMs);
  }

  async scrollFilterFeedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.filterFeed));
  }

  async longPressRefreshThisFeed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.refreshThisFeed));
  }

  async expectRefreshThisFeedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.refreshThisFeed), expected, timeoutMs);
  }

  async expectRefreshThisFeedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.refreshThisFeed), substring, timeoutMs);
  }

  async expectRefreshThisFeedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.refreshThisFeed), value, timeoutMs);
  }

  async expectRefreshThisFeedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.refreshThisFeed), timeoutMs);
  }

  async expectRefreshThisFeedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.refreshThisFeed), count, timeoutMs);
  }

  async scrollRefreshThisFeedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.refreshThisFeed));
  }

  async doubleClickSkipFeed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.skipFeed));
  }

  async longPressSkipFeed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.skipFeed));
  }

  async expectSkipFeedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.skipFeed), expected, timeoutMs);
  }

  async expectSkipFeedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.skipFeed), substring, timeoutMs);
  }

  async expectSkipFeedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.skipFeed), value, timeoutMs);
  }

  async expectSkipFeedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.skipFeed), timeoutMs);
  }

  async expectSkipFeedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.skipFeed), count, timeoutMs);
  }

  async scrollSkipFeedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.skipFeed));
  }

  async clickFollowTheLeadersStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.followTheLeadersStart));
  }

  async doubleClickFollowTheLeadersStart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.followTheLeadersStart));
  }

  async longPressFollowTheLeadersStart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.followTheLeadersStart));
  }

  async expectFollowTheLeadersStartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.followTheLeadersStart), expected, timeoutMs);
  }

  async expectFollowTheLeadersStartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.followTheLeadersStart), substring, timeoutMs);
  }

  async expectFollowTheLeadersStartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.followTheLeadersStart), value, timeoutMs);
  }

  async expectFollowTheLeadersStartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.followTheLeadersStart), timeoutMs);
  }

  async expectFollowTheLeadersStartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.followTheLeadersStart), count, timeoutMs);
  }

  async scrollFollowTheLeadersStartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.followTheLeadersStart));
  }

  async clickFollowTheLeaders(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.followTheLeaders));
  }

  async doubleClickFollowTheLeaders(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.followTheLeaders));
  }

  async longPressFollowTheLeaders(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.followTheLeaders));
  }

  async expectFollowTheLeadersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.followTheLeaders), expected, timeoutMs);
  }

  async expectFollowTheLeadersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.followTheLeaders), substring, timeoutMs);
  }

  async expectFollowTheLeadersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.followTheLeaders), value, timeoutMs);
  }

  async expectFollowTheLeadersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.followTheLeaders), timeoutMs);
  }

  async expectFollowTheLeadersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.followTheLeaders), count, timeoutMs);
  }

  async scrollFollowTheLeadersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.followTheLeaders));
  }

  async clickStartFollowingColleaguesGroups(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups));
  }

  async doubleClickStartFollowingColleaguesGroups(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups));
  }

  async longPressStartFollowingColleaguesGroups(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups));
  }

  async expectStartFollowingColleaguesGroupsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), expected, timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), substring, timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), value, timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), timeoutMs);
  }

  async expectStartFollowingColleaguesGroupsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups), count, timeoutMs);
  }

  async scrollStartFollowingColleaguesGroupsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.startFollowingColleaguesGroups));
  }

  async clickUpdated9MinutesAgo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo));
  }

  async doubleClickUpdated9MinutesAgo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo));
  }

  async longPressUpdated9MinutesAgo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo));
  }

  async expectUpdated9MinutesAgoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.updated9MinutesAgo), expected, timeoutMs);
  }

  async expectUpdated9MinutesAgoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.updated9MinutesAgo), substring, timeoutMs);
  }

  async expectUpdated9MinutesAgoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.updated9MinutesAgo), value, timeoutMs);
  }

  async expectUpdated9MinutesAgoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.updated9MinutesAgo), timeoutMs);
  }

  async expectUpdated9MinutesAgoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.updated9MinutesAgo), count, timeoutMs);
  }

  async scrollUpdated9MinutesAgoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.updated9MinutesAgo));
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

  async doubleClickContactsWithLeadSource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.contactsWithLeadSource));
  }

  async longPressContactsWithLeadSource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.contactsWithLeadSource));
  }

  async expectContactsWithLeadSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.contactsWithLeadSource), expected, timeoutMs);
  }

  async expectContactsWithLeadSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.contactsWithLeadSource), substring, timeoutMs);
  }

  async expectContactsWithLeadSourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.contactsWithLeadSource), value, timeoutMs);
  }

  async expectContactsWithLeadSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.contactsWithLeadSource), timeoutMs);
  }

  async expectContactsWithLeadSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.contactsWithLeadSource), count, timeoutMs);
  }

  async scrollContactsWithLeadSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.contactsWithLeadSource));
  }

}
