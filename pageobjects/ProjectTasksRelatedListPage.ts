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

export class ProjectTasksRelatedListPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    relatedListRegion: { strategy: 'css', value: 'article[aria-label="Project Tasks"]', actionKind: 'generic' as const }
  } as const;

  async expectRelatedListVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion));
  }

  async expectContainsStatusText(statusText: string): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), statusText);
  }

  async clickTaskNameInRowByStatus(statusText: string): Promise<void> {
    const linkInPlannedRow = webLocator(this.page, { strategy: 'css', value: `article[aria-label="Project Tasks"] tr:has(:text("${statusText}")) a`, actionKind: 'link' as const });
    await clickWhenVisible(linkInPlannedRow);
  }

  async clickRelatedListRegion(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion));
  }

  async doubleClickRelatedListRegion(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion));
  }

  async longPressRelatedListRegion(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion));
  }

  async expectRelatedListRegionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), expected, timeoutMs);
  }

  async expectRelatedListRegionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), substring, timeoutMs);
  }

  async expectRelatedListRegionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), value, timeoutMs);
  }

  async expectRelatedListRegionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), timeoutMs);
  }

  async expectRelatedListRegionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion), count, timeoutMs);
  }

  async scrollRelatedListRegionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTasksRelatedListPage.L.relatedListRegion));
  }

}
