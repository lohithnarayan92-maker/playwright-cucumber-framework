import { Before, After, setWorldConstructor } from "@cucumber/cucumber";
import { BrowserManager } from "../support/BrowserManager";
import { CustomWorld } from "../support/CustomWorld";
import { Config } from "../config/config";
import { setDefaultTimeout } from "@cucumber/cucumber";


setWorldConstructor(CustomWorld);
setDefaultTimeout(Config.timeout);

Before({ timeout: Config.timeout }, async function (this: CustomWorld) {

    console.log("1. Before Hook Started");

    this.browser = await BrowserManager.launchBrowser();

this.session = await BrowserManager.createUserSession(this.browser);

    console.log("Base URL =", Config.baseUrl);
    // await this.page.goto(Config.baseUrl, {
    // waitUntil: "domcontentloaded"
    await this.session.page.goto(Config.baseUrl, {
    waitUntil: "domcontentloaded"
});

console.log("5. URL Loaded");
});

After(async function (this: CustomWorld) {

    console.log("After Hook Executed");
//before introducing the sessions , this was closing for the page, context and browser directly from the world object

    // await BrowserManager.closePage(this.page); 
    // await BrowserManager.closeContext(this.context);
    // await BrowserManager.closeBrowser(this.browser);
    
//After introducing the sessions ,the page, context and browser are closed from the session object of the world object
    await BrowserManager.closePage(this.session.page);

await BrowserManager.closeContext(this.session.context);

await BrowserManager.closeBrowser(this.browser);

});