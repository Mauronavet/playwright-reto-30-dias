import { expect, test } from '@playwright/test'

test('Login to hrm', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'Password' }).fill('admin456')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByText('Invalid credentials')).toBeVisible()

})