import { test, expect } from '@playwright/test'

test('Check left menu options', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/')
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

  page.getByRole('link', { name: 'Admin' }).click()

  await page.getByRole('navigation', { name: 'Topbar menu' }).getByText('Job').click()

  const jobOptions = page.getByRole('menu').getByRole('menuitem')

  const expectedPages = [
    {
        menu : 'Job Titles',
        url: '/web/index.php/admin/viewJobTitleList'
    },
    {
        menu : 'Pay Grades',
        url: '/web/index.php/admin/viewPayGrades'
    },
    {
        menu : 'Employment Status',
        url: '/web/index.php/admin/employmentStatus'
    }
  ]

  for(let expectedPage of expectedPages){
    const menuOption = jobOptions.filter({hasText: expectedPage.menu})
    await menuOption.click()
    await expect(page).toHaveURL(new RegExp(expectedPage.url))
    await page.getByRole('navigation', { name: 'Topbar menu' }).getByText('Job').click()
  }

  
})