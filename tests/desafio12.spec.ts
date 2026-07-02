import { expect, test } from '@playwright/test'
import {LoginPage} from "../pageobjects/loginPage"
import { SideMenuOption, SidePanel } from '../components/top-bar-menu/SidePanel'
import { TopBarMenu } from '../components/top-bar-menu/TopBarMenu'

test('Filter by user admin', async ({page}) => {

    
    const loginPage = new LoginPage(page)
    await loginPage.loginAsAdmin()
    const sidePanel = new SidePanel(page)
    await sidePanel.clickOnOption(SideMenuOption.ADMIN)

    const allBodyRows = page.getByRole('table').getByRole('rowgroup').nth(1).getByRole('row')

    //Filas que contienen el role admin
    const currentAdminRows = allBodyRows.filter({
        has: page.getByRole('cell').nth(2).getByText('Admin')
    })

    const expectedAdminCount = await currentAdminRows.count()
    console.log('Admin users before filtering: ', expectedAdminCount)


    // Aplicar filtro
    await page.locator("//label[contains(.,'User Role')]/parent::div/following-sibling::div").click()
    await page.getByRole('listbox').getByRole('option', {name: 'Admin'}).click()
    await page.getByRole('button', {name: 'Search'}).click()

    const adminRowsAfterFiltering = allBodyRows.filter({
        has: page.getByRole('cell').nth(2).getByText('Admin')
    })
    const adminCount = await adminRowsAfterFiltering.count()
    console.log('Admin users after filtering: ', adminCount)

    await expect(expectedAdminCount).toEqual(adminCount)

    }) 
    
