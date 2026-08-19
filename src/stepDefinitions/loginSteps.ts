import { LoginPage } from "../pages/LoginPage";
import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { expect } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage";
import { UserDataProvider } from "../testData/UserDataProvider";

Given("the user launches the application", async function (this: CustomWorld) {

    console.log("Launching application...");

});

When("the user logs in with valid credentials", async function (this: CustomWorld) {

    const user = UserDataProvider.getUser("admin");

    const loginPage = new LoginPage(this.session.page);

    await loginPage.login(
        user.username,
        process.env.TEST_PASSWORD!
    );

});

Then("the user should be navigated to the home page", async function (this: CustomWorld) {

    const dashboardPage = new DashboardPage(this.session.page);

    await dashboardPage.verifyDashboardIsDisplayed();

});