import { Locator, Page } from "@playwright/test";

/*Ejercicio #1: Implementación de Framework BDD
Utiliza cualquier framework de BDD para automatizar un escenario de inicio de sesión
en una URL de tu elección.*/

export class PO_LoginPagePart2Excercise2 {

  private readonly usernameTextBox: Locator
  private readonly passwordTextBox: Locator
  private readonly loginButton: Locator
  private readonly logoutButton: Locator
  
  constructor(page:Page){
    //Localizadores de los objetos
    this.usernameTextBox = page.getByRole('textbox', { name: 'Username' })
    this.passwordTextBox = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Submit' })
    this.logoutButton = page.getByRole('link', { name: 'Log out' })
  }

  async loginwithCredential(username:string, password:string){

    await this.usernameTextBox.fill(username)
    console.log('Se ingresa usuario');
    await this.passwordTextBox.fill(password)
    console.log('Se ingresa Password');
    this.loginButton.click()
    console.log('Se inicia sesion');

  }

  async closeSesion(){

    this.logoutButton.click()
    console.log('Se cierra la sesion');

  }

}