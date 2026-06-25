import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"

test('Login to hrm', async ({ page }) => {

const loginPage = new LoginPage(page)
  await loginPage.doLogin("Admin", "admin123")

  await expect(page.getByText('Invalid credentials')).toBeVisible()

})