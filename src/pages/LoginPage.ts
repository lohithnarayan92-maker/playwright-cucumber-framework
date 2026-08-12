import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get usernameTextbox() {
        return this.page.locator("input[name='username']");
    }

    private get passwordTextbox() {
        return this.page.locator("input[name='password']");
    }

    private get loginButton() {
        return this.page.locator("button[type='submit']");
    }

    private async enterUsername(username: string): Promise<void> {
    await this.fill(this.usernameTextbox, username);
}

private async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordTextbox, password);
}

private async clickLogin(): Promise<void> {

    await this.click(this.loginButton);

    await this.page.waitForURL("**/web/index.php/dashboard/index", {
        waitUntil: "domcontentloaded"
    });
}

    async login(username: string, password: string): Promise<void> {
        // await this.enterUsername(username);
        // await this.enterPassword(password);
        // await this.clickLogin();
        console.log("Entering username");

    await this.enterUsername(username);

    console.log("Entering password");

    await this.enterPassword(password);

    console.log("Clicking Login");

    await this.clickLogin();

    console.log("Login Completed");
    }
}