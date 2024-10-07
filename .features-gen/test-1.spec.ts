import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letstesttogether.com/store/index.php?rt=account');
  await page.getByRole('link', { name: '   Login' }).click();
  await page.getByLabel('Login Name:').click();
  await page.getByLabel('Login Name:').fill('robin.toor');
  await page.getByLabel('Login Name:').press('Tab');
  await page.getByLabel('Password:').fill('tester321');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByRole('heading', { name: 'My Account' }).click();
  await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
  await page.getByRole('link', { name: ' 1 Order history' }).click();
  await expect(page.getByText('Order ID:')).toBeVisible();
  await page.getByText('Order ID:#').click();
  await expect(page.getByText('Order ID:#')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Customer: Robin Toor' })).toBeVisible();
  await expect(page.getByText('Status: Pending')).toBeVisible();
  await page.getByRole('link', { name: ' View' }).click();
  await expect(page.getByRole('heading', { name: ' Order Details' })).toBeVisible();
  await expect(page.getByText('Shipping MethodFlat Shipping')).toBeVisible();
  await expect(page.getByText('Payment MethodCash On Delivery')).toBeVisible();

});