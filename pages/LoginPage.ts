import {Page , Locator, expect} from '@playwright/test';

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    
    constructor(private page: Page) {
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByRole("button", { name: "Login" });
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess(): Promise<void> {
        await expect(this.page).toHaveURL(/inventory/);
    }

    async verifyLoginError(): Promise<void> {
    await expect(this.page.locator("[data-test='error']"))
        .toBeVisible();
}

}

