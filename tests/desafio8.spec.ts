import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"
import { SideMenuOption, SidePanel } from '../components/SidePanel'

test('Login to hrm', async ({ page }) => {

const loginPage = new LoginPage(page)
await loginPage.doLogin("Admin", "admin123")

const sidePanel = new SidePanel(page)
await sidePanel.clickOnOption(SideMenuOption.ADMIN)

await sidePanel.searchMenu(SideMenuOption.BUZZ)

const leftMenuItem = page.getByLabel('Sidepanel').getByRole('listitem')

await expect(leftMenuItem).toHaveText([SideMenuOption.BUZZ])

})