import { World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import {UserSession} from "./UserSession";

export class CustomWorld extends World {

    browser!: Browser;

    session!: UserSession;

}