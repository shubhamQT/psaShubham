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

export class CommonPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    globalSearchInput: { strategy: 'placeholder', value: 'Search...', actionKind: 'combobox' as const },
    typeaheadListbox: { strategy: 'css', value: 'div[role="listbox"]', actionKind: 'generic' as const }
  } as const;

  async expectGlobalSearchVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.globalSearchInput));
  }

  async fillGlobalSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CommonPage.L.globalSearchInput), value);
  }

  async expectTypeaheadListVisible(): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.typeaheadListbox));
  }

  async clickTypeaheadOptionByText(optionText: string): Promise<void> {
    const opt = webLocator(this.page, { strategy: 'role', role: 'option', value: optionText, actionKind: 'generic' as const });
    await clickWhenVisible(opt);
  }

  async selectGlobalSearchInput(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, CommonPage.L.globalSearchInput), value);
  }

  async expectGlobalSearchInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.globalSearchInput), expected, timeoutMs);
  }

  async expectGlobalSearchInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.globalSearchInput), substring, timeoutMs);
  }

  async expectGlobalSearchInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.globalSearchInput), value, timeoutMs);
  }

  async expectGlobalSearchInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.globalSearchInput), timeoutMs);
  }

  async expectGlobalSearchInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.globalSearchInput), count, timeoutMs);
  }

  async scrollGlobalSearchInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.globalSearchInput));
  }

  async clickTypeaheadListbox(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.typeaheadListbox));
  }

  async doubleClickTypeaheadListbox(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.typeaheadListbox));
  }

  async longPressTypeaheadListbox(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.typeaheadListbox));
  }

  async expectTypeaheadListboxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.typeaheadListbox), expected, timeoutMs);
  }

  async expectTypeaheadListboxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.typeaheadListbox), substring, timeoutMs);
  }

  async expectTypeaheadListboxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.typeaheadListbox), value, timeoutMs);
  }

  async expectTypeaheadListboxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.typeaheadListbox), timeoutMs);
  }

  async expectTypeaheadListboxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.typeaheadListbox), count, timeoutMs);
  }

  async scrollTypeaheadListboxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.typeaheadListbox));
  }

}
