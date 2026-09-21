import { test } from "../fixtures/test-fixtures";
import {
    invalidLoginData,
    validLoginData
} from "../test-data/loginData";

test.describe("Login Tests", () => {

    test("verify Products page is displayed after successful login", async ({ loggedInPage }) => {
        await loggedInPage.getByText("Products").isVisible();
    });

    test("Successful login with valid credentials", async ({ loginPage }) => {
        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await loginPage.verifyLoginSuccess();
    });

    for (const invalidData of invalidLoginData) {
        test(
            `Failed login with invalid credentials: ${invalidData.username}`,
            async ({ loginPage }) => {
                await loginPage.login(
                    invalidData.username,
                    invalidData.password
                );

                await loginPage.verifyLoginError();
            }
        );
    }
});