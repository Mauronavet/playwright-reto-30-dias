import { Locator, Page } from '@playwright/test'
import { Environment } from '../config/Environment'

export class LoginPage {

    readonly page : Page
    readonly usernameInput : Locator
    readonly passwordInput : Locator
    readonly loginBttn : Locator


    constructor(page : Page){

        this.page = page
        this.usernameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginBttn = page.getByRole('button', { name: 'Login' })
    }

    async doLogin(username:string,password:string){

  await this.page.goto('/web/index.php/auth/login')
  await this.usernameInput.fill(username)
  await this.passwordInput.fill(password)
  await this.loginBttn.click()


    }
    async loginAsAdmin(){
        await this.doLogin(Environment.ADMIN_USERNAME, Environment.ADMIN_PASSWORD)
    }

     async loginAsEmployee(){
        await this.doLogin(Environment.EMPLOYEE_USERNAME, Environment.EMPLOYEE_PASSWORD)
    }
}