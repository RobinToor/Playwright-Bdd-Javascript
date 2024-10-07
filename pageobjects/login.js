import { expect } from '@playwright/test';

export class login {

  /**
   * @param {import('@playwright/test').Page} page
   */

   /** @type {import('playwright').Page} */
  
  constructor(page) {
    this.page = page;
    this.loginName_box = page.getByLabel('Login Name:');
    this.password.box = page.getByLabel('Password:');
    this.submit_btn = page.getByRole('button', { name: ' Login' });
  }

  async navigateToAccountLogin(url) {
    await this.page.goto(url);
  }

  async accountLogin()
  {
    await this.enterEmailAddress();
    await this.enterPassword();
    await this.clickOnSubmit();
  }

  async enterEmailAddress(loginName) {
    await this.loginName_box.fill(loginName);
  }

  async enterPassword(password) {
    await this.password_box.fill(password);
  }

  async clickOnSubmit() {
    await this.submit_btn.click();
  }

  async verifyUserLandOnAccountPage(logged_url) {
    await expect(this.page).toHaveURL(new RegExp(logged_url));
  }

  async verifyUserIsNotAbleToLogin(login_url){
    await expect(this.page).toHaveURL(new RegExp(login_url));
  }
};
