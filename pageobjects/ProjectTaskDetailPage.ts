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

export class ProjectTaskDetailPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    headerTitle: { strategy: 'css', value: 'records-lwc-page-header h1', actionKind: 'generic' as const },
    statusFieldValue: { strategy: 'css', value: '[data-label="Status"] lightning-formatted-text', actionKind: 'generic' as const },
    startButton: { strategy: 'css', value: 'lightning-button[name="Start"]', actionKind: 'button' as const }
  } as const;

  async expectHeaderVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle));
  }

  async expectStatusValueContainsText(text: string): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), text);
  }

  async expectStartButtonVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

  async clickStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

  async waitForStatusToBe(text: string): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), text);
  }

  async clickHeaderTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle));
  }

  async doubleClickHeaderTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle));
  }

  async longPressHeaderTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle));
  }

  async expectHeaderTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), expected, timeoutMs);
  }

  async expectHeaderTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), substring, timeoutMs);
  }

  async expectHeaderTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), value, timeoutMs);
  }

  async expectHeaderTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), timeoutMs);
  }

  async expectHeaderTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle), count, timeoutMs);
  }

  async scrollHeaderTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.headerTitle));
  }

  async clickStatusFieldValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue));
  }

  async doubleClickStatusFieldValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue));
  }

  async longPressStatusFieldValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue));
  }

  async expectStatusFieldValueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), expected, timeoutMs);
  }

  async expectStatusFieldValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), substring, timeoutMs);
  }

  async expectStatusFieldValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), value, timeoutMs);
  }

  async expectStatusFieldValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), timeoutMs);
  }

  async expectStatusFieldValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue), count, timeoutMs);
  }

  async scrollStatusFieldValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.statusFieldValue));
  }

  async clickStartButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

  async doubleClickStartButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

  async longPressStartButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

  async expectStartButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.startButton), expected, timeoutMs);
  }

  async expectStartButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.startButton), substring, timeoutMs);
  }

  async expectStartButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.startButton), value, timeoutMs);
  }

  async expectStartButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.startButton), timeoutMs);
  }

  async expectStartButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.startButton), count, timeoutMs);
  }

  async scrollStartButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.startButton));
  }

}
