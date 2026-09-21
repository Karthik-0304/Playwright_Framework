import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "node:path";

const ci = Boolean(
    (globalThis as { process?: { env?: { CI?: string } } }).process?.env?.CI
);

const environment = process.env.ENV || "qa";

dotenv.config(
    { path: `.env.${environment}` }
);

export default defineConfig({
    testDir: "./tests",

    fullyParallel: true,

    forbidOnly: ci,

    retries: ci ? 2 : 0,

    workers: ci ? 1 : undefined,

    reporter: [
        ["list"],
        ["html", { open: "never" }]
    ],

    use: {
        baseURL: process.env.BASE_URL,

        screenshot: "only-on-failure",

        trace: "on-first-retry",

        video: "retain-on-failure",

        headless: true
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        }
    ]
});