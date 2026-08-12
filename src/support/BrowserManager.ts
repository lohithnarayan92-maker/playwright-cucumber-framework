import { UserSession } from "./UserSession";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { getEnv } from "../utils/envUtil";


export class BrowserManager {

    static async launchBrowser(): Promise<Browser> {

        const headless = getEnv("HEADLESS") === "true";

        const browser = await chromium.launch({
            headless: headless
        });

        return browser;
    }

    static async createContext(browser: Browser): Promise<BrowserContext> {

        const context = await browser.newContext();

        return context;
    }

    static async createPage(context: BrowserContext): Promise<Page> {

        const page = await context.newPage();

        return page;
    }

    static async closePage(page: Page): Promise<void> {

    await page.close();

}
static async closeContext(context: BrowserContext): Promise<void> {

    await context.close();

}

    static async closeBrowser(browser: Browser): Promise<void> {

        await browser.close();

    }

    static async createUserSession(browser: Browser): Promise<UserSession> {

        const context = await BrowserManager.createContext(browser);
        const page= await BrowserManager.createPage(context);
        return new UserSession(context,page);
    }
}