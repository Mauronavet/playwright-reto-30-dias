import { test, expect } from '@playwright/test'

test('Check left menu options', async ({ page }) => {
    test.setTimeout(60000)
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

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