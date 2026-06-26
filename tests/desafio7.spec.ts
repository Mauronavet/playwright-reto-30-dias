import { test, expect } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"

test('Select specific user for edition', async ({ page }) => {

  const loginPage = new LoginPage(page)
    await loginPage.doLogin("Admin", "admin123")

  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

  await page.getByRole('link', { name: 'Admin' }).click()

  await page.getByRole('navigation', { name: 'Topbar menu' }).getByText('User Management').click()
  await page.getByRole('menuitem', { name: 'Users' }).click()

  const rows = page.getByRole('table').getByRole('row');
  await rows.first().waitFor({ state: 'visible' });
  const rowCount = await rows.count();

  const randomIndex = Math.floor(Math.random() * rowCount);
  
  const userForEdition = await rows.nth(randomIndex).getByRole('cell').nth(1).innerText();
  const pencilToEdit = page
    .getByRole('table')
    .getByRole('row')
    .filter({ hasText: userForEdition })
    .locator('button')
    .filter({ has: page.locator('i.bi-pencil-fill') })

await pencilToEdit.click()

const currentUsername = await page.locator("//label[contains(., 'Username')]/parent::div/following-sibling::div/input")
  .inputValue()

expect(page.locator("//label[contains(., 'Username')]/parent::div/following-sibling::div/input"))
  .toHaveValue(currentUsername)
})