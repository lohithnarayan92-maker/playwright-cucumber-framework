import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { getEnv } from "../utils/envUtil";

dotenv.config();

const environment = getEnv("ENVIRONMENT");

const configPath = path.resolve(
    process.cwd(),
    "src",
    "config",
    `${environment}.json`
);

if (!fs.existsSync(configPath)) {
    throw new Error(
        `❌ Configuration file not found for environment: ${environment}`
    );
}

const environmentConfig = JSON.parse(
    fs.readFileSync(configPath, "utf-8")
);

if (!environmentConfig.baseUrl) {
    throw new Error(
        `❌ Invalid configuration for environment '${environment}': baseUrl is required`
    );
}

if (!environmentConfig.browser) {
    throw new Error(
        `❌ Invalid configuration for environment '${environment}': browser is required`
    );
}

if (typeof environmentConfig.headless !== "boolean") {
    throw new Error(
        `❌ Invalid configuration for environment '${environment}': headless must be a boolean`
    );
}

if (
    typeof environmentConfig.timeout !== "number" ||
    environmentConfig.timeout <= 0
) {
    throw new Error(
        `❌ Invalid configuration for environment '${environment}': timeout must be a positive number`
    );
}


export const Config = {
    baseUrl: environmentConfig.baseUrl,
    browser: environmentConfig.browser,
    headless: environmentConfig.headless,
    timeout: environmentConfig.timeout
};