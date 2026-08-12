import { Locator, Page } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    protected async click(locator: Locator): Promise<void> {

        await locator.click();

    }

    protected async fill(locator: Locator, value: string): Promise<void> {

        await locator.fill(value);

    }

}