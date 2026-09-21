import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;

    constructor(private page: Page) {
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");
        this.postalCodeInput = page.getByPlaceholder("Zip/Postal Code");
        this.continueButton = page.getByRole("button", {
            name: "Continue"
        });
        this.finishButton = page.getByRole("button", {
            name: "Finish"
        });
    }

    async openCheckout(): Promise<void> {
        await this.page
            .getByRole("button", { name: "checkout" })
            .click();
    }

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout(): Promise<void> {
        await this.continueButton.click();
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }

    async verifyOrderConfirmation(): Promise<void> {
        await expect(
            this.page.getByText("Thank you for your order!")
        ).toBeVisible();
    }

    async verifyCheckoutError(message: string): Promise<void> {
        await expect(
            this.page.getByText(message)
        ).toBeVisible();
    }
}