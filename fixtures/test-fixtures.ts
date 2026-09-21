import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { validLoginData } from "../test-data/loginData";

type MyFixtures = {
    loginPage: LoginPage;
    loggedInPage: Page;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await use(loginPage);
    },

    loggedInPage: async ({ loginPage, page }, use) => {

        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await use(page);
    },

    productPage: async ({ loggedInPage }, use) => {

        const productPage = new ProductPage(loggedInPage);

        await use(productPage);
    },

    cartPage: async ({ loggedInPage }, use) => {

        const cartPage = new CartPage(loggedInPage);

        await use(cartPage);
    },

    checkoutPage: async ({ loggedInPage }, use) => {

        const checkoutPage = new CheckoutPage(loggedInPage);

        await use(checkoutPage);
    }
});