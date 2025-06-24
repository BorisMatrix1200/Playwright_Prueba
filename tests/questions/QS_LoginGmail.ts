import { expect, Locator, Page } from "@playwright/test";

/* 1. Automatizar el inicio de sesión en Netflix desde la página web
○ Navegar por la plataforma.
○ Maximizar la pantalla.
○ Capturar e imprimir los títulos de tres películas de suspenso. */

export class QS_LoginGmail {

  private readonly msgWellcome: Locator
  
  
  constructor(page:Page){
    //Localizadores de los objetos
     this.msgWellcome = page.getByRole('link', { name: 'H1' })
    
  }

  
  async assertLoginSuccesfullGmail(){

    await expect (this.msgWellcome).toBeVisible//Espera Explicita
    console.log('Se valida boton de inicio de sesion', this.msgWellcome);
 

  }

  
 
}