import { test } from "../fixtures/test-fixtures";
import { data,errorMessage } from "../test-data/checkoutData";
import { products } from "../test-data/productData";

test.describe("Checkout Tests", () => {

    test("Complete checkout successfully", async ({ productPage, cartPage, checkoutPage }) => {

        await productPage.addItemToCart(
            products.backpack
        );

        await cartPage.openCart();

        await cartPage.verifyProductInCart(
            products.backpack
        );

        await checkoutPage.openCheckout();

        await checkoutPage.fillCheckoutInformation(
            data.firstName,
            data.lastName,
            data.postalCode
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishCheckout();

        await checkoutPage.verifyOrderConfirmation();
    });


    test("Checkout with missing first name", async ({ cartPage, checkoutPage, productPage }) => {

        await productPage.addItemToCart(
            products.backpack
        );

        await cartPage.openCart();

        await checkoutPage.openCheckout();

        await checkoutPage.fillCheckoutInformation(
            "",
            data.lastName,
            data.postalCode
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.verifyCheckoutError(
            errorMessage.firstNameIsNull
        );
    });

});