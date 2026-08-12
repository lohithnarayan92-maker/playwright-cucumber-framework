import { BrowserContext, Page } from "@playwright/test";

export class PageManager {

    static async createPage(context: BrowserContext): Promise<Page> {
        return await context.newPage();
    }

}