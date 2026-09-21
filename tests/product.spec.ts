import { test } from "../fixtures/test-fixtures";
import { ProductPage } from "../pages/ProductPage";
import { products } from "../test-data/productData";

test.describe("Product Tests", () => {

    test("Verify product is displayed", async ({ productPage }) => {

        await productPage.verifyProductDisplayed(
            products.backpack
        );
    });

    for (const product of Object.values(products)) {

        test(`Add ${product} to cart`, async ({ productPage }) => {

            await productPage.addItemToCart(product);
        });
    }
});