import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"
import { SideMenuOption, SidePanel } from '../components/top-bar-menu/SidePanel'
import { TopBarMenu } from '../components/top-bar-menu/TopBarMenu'

test('testing topbar menu', async ({page}) => {

    const loginPage = new LoginPage(page)
    await loginPage.loginAsAdmin()

    const sidePanel = new SidePanel(page)
    await sidePanel.clickOnOption(SideMenuOption.ADMIN)

    const topBarMenu = new TopBarMenu(page)
    await topBarMenu.job.clickOnJobTitles()
    await topBarMenu.job.clickOnPayGrades()

    await topBarMenu.userManagement.clickOnUsers()

})