import {Locator, Page} from '@playwright/test'

export class Organization{

    readonly page: Page
    readonly organization : Locator
     readonly generalInformationOption : Locator
    readonly locationsOption : Locator

constructor(page: Page){

    this.page = page
    this.organization = page.getByRole('navigation', { name: 'Topbar menu' }).getByText('Organization')
    this.generalInformationOption = page.getByRole('menuitem', { name: 'General Information' })
    this.locationsOption = page.getByRole('menuitem', { name: 'Location' })
 
 

}

async clickOnOrganization(){
    await this.organization.click()
}

async clickOnGeneralInformationOption(){
    await this.clickOnOrganization()
    await this.generalInformationOption.click()
}

async clickOnLocations(){
        await this.clickOnOrganization()
    await this.locationsOption.click()
}
}