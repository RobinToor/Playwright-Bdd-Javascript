import { expect } from '@playwright/test';
require('dotenv').config;
const loginName = process.env.EMAIL;
const password = process.env.PASSWORD;

  export class LoginPage {

    /**
     * @class LoginPage
     * @param {import('@playwright/test').Page} page
     */  

  constructor(page) {
    this.page = page;
    this.loginName_box = page.getByLabel('Login Name:');
    this.password_box = page.getByLabel('Password:');
    this.submit_btn = page.getByRole('button', { name: ' Login' });
  }

  /**
   * navigate to url
   * @param {string} url 
   */
  async navigateToAccountLogin(url) {
    await this.page.goto(url);
  }

  /**
   * Login to the existing account
   */
  async accountLogin()
  {
    await this.enterEmailAddress(loginName);
    await this.enterPassword(password);
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
