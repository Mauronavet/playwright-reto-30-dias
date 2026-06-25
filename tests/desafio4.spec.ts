import { test, expect } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"

test('Check left menu options', async ({ page }) => {
    test.setTimeout(60000)
   const loginPage = new LoginPage(page)
    await loginPage.doLogin("Admin", "admin123")

  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

  const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
  const currentMenuItemsCount = await leftMenuItems.count()
  
  for (let i = 0; i < currentMenuItemsCount; i++) {

    const menuItem = await leftMenuItems.nth(i)
    const menuText = await menuItem.innerText()
    console.log('Current menu item', menuText);

    if(menuText === 'Maintenance'){
        await menuItem.click();
        await page.waitForTimeout(2000);
        await page.goBack();
      }
        else{
           await menuItem.click(); 
        }


  }

  
})