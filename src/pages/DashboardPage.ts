import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get dashboardHeading() {
        return this.page.locator("h6");
    }

    async verifyDashboardIsDisplayed(): Promise<void> {

        await expect(this.dashboardHeading).toHaveText("Dashboard");

    }
}