import { expect, Locator, Page } from "@playwright/test";

/*Ejercicio #1: Implementación de Framework BDD
Utiliza cualquier framework de BDD para automatizar un escenario de inicio de sesión
en una URL de tu elección.*/

export class QS_LoginPagePart2Excercise2 {

  private readonly loginSuccesfull: Locator
  
  constructor(page:Page){
    //Localizadores de los objetos
    this.loginSuccesfull = page.locator('//*[@id="loop-container"]/div/article/div[1]/h1')
  }

  
  async assertLoginSuccesfull(){

    await expect (this.loginSuccesfull).toBeVisible()//Espera Explicita
    console.log('Se valida mensaje de inicio de sesion exitoso');


  }

}