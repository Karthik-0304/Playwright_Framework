import { Page, Locator, expect } from "@playwright/test";

export class ProductPage {
    private readonly productCards: Locator;

    constructor(private page: Page) {
        this.productCards = page.locator(".inventory_item");
    }

    async addItemToCart(productName: string): Promise<void> {
        const product = this.productCards.filter({
            hasText: productName
        });

        await product
            .getByRole("button", { name: "Add to cart" })
            .click();
    }

    async verifyProductDisplayed(productName: string): Promise<void> {
        const product = this.productCards.filter({
            hasText: productName
        });

        await expect(product).toBeVisible();
    }
}