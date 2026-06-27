import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"
import { SideMenuOption, SidePanel } from '../components/top-bar-menu/SidePanel'

test('Login to hrm', async ({ page }) => {

const loginPage = new LoginPage(page)
await loginPage.loginAsAdmin()

const sidePanel = new SidePanel(page)
await sidePanel.clickOnOption(SideMenuOption.ADMIN)

await expect (sidePanel.menuOption(SideMenuOption.ADMIN)).toBeVisible()

//await expect(page.getByText('Invalid credentials')).toBeVisible()

})