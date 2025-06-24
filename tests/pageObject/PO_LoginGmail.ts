import { Locator, Page } from "@playwright/test";
import { text } from "node:stream/consumers";

/*Automatizar el inicio de sesión en Gmail para un dispositivo móvil
○ Navegar en la aplicación móvil de Gmail.
○ Validar el mensaje de acceso exitoso.*/

export class PO_LoginGmail{

  private readonly correoelectronico: Locator
  private readonly botonsiguiente: Locator
  private readonly password: Locator
  private readonly botonsiguiente2: Locator
  private readonly botonSaltar: Locator
  
  constructor(page:Page){
    //Localizadores de los objetos
    this.correoelectronico = page.getByTestId('identifierId')
    this.botonsiguiente = page.getByTestId('identifierNext')
    //this.correoelectronico = page.getByRole('textbox', { name: 'Correo electrónico o teléfono' })//*[@id='identifierId']
    //this.botonsiguiente = page.locator('//*[@id="identifierNext"]/div/button')//*[@id='identifierNext']
    this.password = page.getByRole('textbox', { name:'Ingresa tu contraseña'})
    this.botonsiguiente2 = page.locator('//*[@id="passwordNext"]/div/button')
    this.botonSaltar = page.locator('//*[@id="yDmH0d"]/c-wiz[2]/div/div/div/div/div/div[2]/button[1]')


  }

  async loginwithCredentialGmail(username:string, password:string){
    
    await this.correoelectronico.fill(username)
    console.log('Se ingresa usuario');
    await this.botonsiguiente.click()
    await this.password.fill(password)
    console.log('Se ingresa Password');
    await this.botonsiguiente2.click
    this.botonSaltar.click()
    console.log('Se inicia sesion');

  }

}