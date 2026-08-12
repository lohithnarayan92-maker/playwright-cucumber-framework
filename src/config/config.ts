import dotenv from "dotenv";
import { getEnv } from "../utils/envUtil";

dotenv.config();

export const Config = {
    baseUrl: getEnv("BASE_URL"),
    browser: getEnv("BROWSER"),
    headless: getEnv("HEADLESS") === "true",
    timeout: Number(getEnv("TIMEOUT"))
};