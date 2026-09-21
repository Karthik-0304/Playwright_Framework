import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    private readonly cartLink: Locator;

    constructor(private page: Page) {
        this.cartLink = page.locator(
            '[data-test="shopping-cart-link"]'
        );
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }

    async verifyProductInCart(productName: string): Promise<void> {
        const product = this.page.getByText(
            productName,
            { exact: true }
        );

        await expect(product).toBeVisible();
    }
}