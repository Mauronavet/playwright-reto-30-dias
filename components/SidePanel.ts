import { Locator, Page } from '@playwright/test'

export enum SideMenuOption {
    ADMIN = 'Admin',
    PIM = 'PIM',
    LEAVE = 'Leave',
    TIME = 'Time',
    RECRUITMENT = 'Recruitment',
    MY_INFO = 'My Info',
    PERFORMANCE = 'Performance',
    DASHBOARD = 'Dashboard',
    DIRECTORY = 'Directory',
    MAINTENANCE = 'Maintenance',
    CLAIM = 'Claim',
    BUZZ = 'Buzz'
}

export class SidePanel {

    readonly page : Page
    readonly searchBttn : Locator
   

    constructor(page : Page){

        this.page = page
        this.searchBttn = page.getByRole('textbox', { name: 'Search' })
    }

        private menuOption(option: SideMenuOption):Locator{
        return this.page.getByRole('link', {name: option})
    }

    async clickOnOption(option: SideMenuOption){
        await this.menuOption(option).click()
    }

    async searchMenu(option: SideMenuOption){
        await this.searchBttn.fill(option)
    }
   
}


