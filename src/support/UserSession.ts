import { BrowserContext,Page } from "@playwright/test";
export class UserSession {

    constructor(
        public context: BrowserContext,
        public page: Page,
    
    ) { }
}