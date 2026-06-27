import { JobMenu } from "./JobMenu"
import {Page} from '@playwright/test'
import { UserManagementMenu } from "./userManagementMenu"


export class TopBarMenu{

    readonly page:Page
    readonly userManagement : UserManagementMenu
    readonly job: JobMenu
   

    constructor(page: Page){
        this.page = page
        this.userManagement = new UserManagementMenu(page)
        this.job = new JobMenu(page)



    }







}