import { test } from "../fixtures/test-fixtures";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

test.describe("Cart Tests", () => {

    test("Add product and verify it in cart", async ({ cartPage, productPage }) => {

       
        await productPage.addItemToCart(
            "Sauce Labs Backpack"
        );

        await cartPage.openCart();

        await cartPage.verifyProductInCart(
            "Sauce Labs Backpack"
        );
    });

});