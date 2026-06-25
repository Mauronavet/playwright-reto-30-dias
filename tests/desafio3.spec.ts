import { test, expect } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"

test('Check left menu options', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.doLogin("Admin", "admin123")

  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

  const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
  const currentMenuItemsCount = await leftMenuItems.count()
  console.log('Current menu items count', currentMenuItemsCount)

  const currentMenuItems: string[] = []

  for (let i = 0; i < currentMenuItemsCount; i++) {

  const menuText = await leftMenuItems.nth(i).innerText()
  currentMenuItems.push(menuText)
  }

  console.log(currentMenuItems)

  const expectedMenuItems = [
    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz'
  ];

expect(currentMenuItems).toEqual(expectedMenuItems)
expect(currentMenuItems[0]).toEqual('Admin')

})