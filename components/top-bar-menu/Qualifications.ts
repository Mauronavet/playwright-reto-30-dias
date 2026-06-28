import {Locator, Page} from '@playwright/test'

export class Qualifications{

    readonly page: Page
    readonly qualifications : Locator
     readonly skillsOption : Locator
    readonly educationOption : Locator

constructor(page: Page){

    this.page = page
    this.qualifications = page.getByRole('navigation', { name: 'Topbar menu' }).getByText('Qualifications')
    this.skillsOption = page.getByRole('menuitem', { name: 'Skills' })
    this.educationOption = page.getByRole('menuitem', { name: 'Education' })
 
 

}

async clickOnQualification(){
    await this.qualifications.click()
}

async clickOnSkillsOption(){
    await this.clickOnQualification()
    await this.skillsOption.click()
}

async clickOnEducationOption(){
         await this.clickOnQualification()
    await this.educationOption.click()
}
}