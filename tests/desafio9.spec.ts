import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"
import { SideMenuOption, SidePanel } from '../components/top-bar-menu/SidePanel'

test('Login to hrm', async ({ page }) => {

const loginPage = new LoginPage(page)
await loginPage.loginAsEmployee()

const sidePanel = new SidePanel(page)
await expect (sidePanel.menuOption(SideMenuOption.ADMIN)).toBeHidden();


})