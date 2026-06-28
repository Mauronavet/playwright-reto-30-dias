import { JobMenu } from "./JobMenu"
import {Page} from '@playwright/test'
import { UserManagementMenu } from "./userManagementMenu"
import { Organization } from "./Organization"
import { Qualifications } from "./Qualifications"


export class TopBarMenu{

    readonly page:Page
    readonly userManagement : UserManagementMenu
    readonly job: JobMenu
    readonly organization: Organization
    readonly qualifications : Qualifications
    
   

    constructor(page: Page){
        this.page = page
        this.userManagement = new UserManagementMenu(page)
        this.job = new JobMenu(page)
        this.organization = new Organization(page)
        this.qualifications = new Qualifications(page)


    }







}