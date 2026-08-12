import { Browser, BrowserContext } from "@playwright/test";

export class ContextManager {

    static async createContext(browser: Browser): Promise<BrowserContext> {
        return await browser.newContext();
    }

}