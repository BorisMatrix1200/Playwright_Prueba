import { Locator, Page } from "@playwright/test";

/* 1. Automatizar el inicio de sesión en Netflix desde la página web
○ Navegar por la plataforma.
○ Maximizar la pantalla.
○ Capturar e imprimir los títulos de tres películas de suspenso. */

export class PO_LoginNetflix{

  private readonly usernameTextBox: Locator
  private readonly passwordTextBox: Locator
  private readonly loginButtonHome: Locator
  private readonly loginButton: Locator
  
  
  constructor(page:Page){
    //Localizadores de los objetos
    this.loginButtonHome = page.getByRole('button', { name: 'Iniciar sesión' })
    this.usernameTextBox = page.getByRole('textbox', { name: 'Email o número de celular' })
    this.passwordTextBox = page.getByRole('textbox', { name: 'Contraseña' })
    this.loginButton = page.getByRole('button', { name: 'Iniciar sesión' })

  }

  async loginwithCredentialNetflix(username:string, password:string){
    
    await this.usernameTextBox.click();
    await this.usernameTextBox.fill(username)
    console.log('Se ingresa usuario');
    await this.passwordTextBox.click();
    await this.passwordTextBox.fill(password)
    console.log('Se ingresa Password');
    this.loginButton.click()
    console.log('Se inicia sesion');

  }

}