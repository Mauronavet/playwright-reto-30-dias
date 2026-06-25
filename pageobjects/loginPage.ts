import { Locator, Page } from '@playwright/test'

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
  await this.usernameInput.fill('Admin')
  await this.passwordInput.fill('admin123')
  await this.loginBttn.click()


    }
}