import type { Locator, Page } from '@playwright/test';
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

export class ProjectDetailPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    headerTitle: { strategy: 'css', value: 'records-lwc-page-header h1', actionKind: 'generic' as const },
    projectTasksRelatedLink: { strategy: 'role', role: 'link', value: 'Project Tasks', actionKind: 'link' as const }
  } as const;

  async expectHeaderVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle));
  }

  async expectHeaderContainsText(text: string): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectDetailPage.L.headerTitle), text);
  }

  async expectProjectTasksRelatedLinkVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink));
  }

  async clickProjectTasksRelatedLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink));
  }

  async clickHeaderTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle));
  }

  async doubleClickHeaderTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle));
  }

  async longPressHeaderTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle));
  }

  async expectHeaderTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectDetailPage.L.headerTitle), expected, timeoutMs);
  }

  async expectHeaderTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectDetailPage.L.headerTitle), substring, timeoutMs);
  }

  async expectHeaderTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectDetailPage.L.headerTitle), value, timeoutMs);
  }

  async expectHeaderTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectDetailPage.L.headerTitle), count, timeoutMs);
  }

  async scrollHeaderTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectDetailPage.L.headerTitle));
  }

  async doubleClickProjectTasksRelatedLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink));
  }

  async longPressProjectTasksRelatedLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink));
  }

  async expectProjectTasksRelatedLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), expected, timeoutMs);
  }

  async expectProjectTasksRelatedLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), substring, timeoutMs);
  }

  async expectProjectTasksRelatedLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), value, timeoutMs);
  }

  async expectProjectTasksRelatedLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), timeoutMs);
  }

  async expectProjectTasksRelatedLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink), count, timeoutMs);
  }

  async scrollProjectTasksRelatedLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectDetailPage.L.projectTasksRelatedLink));
  }

}
