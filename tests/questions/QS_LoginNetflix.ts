import { expect, Locator, Page } from "@playwright/test";

/* 1. Automatizar el inicio de sesión en Netflix desde la página web
○ Navegar por la plataforma.
○ Maximizar la pantalla.
○ Capturar e imprimir los títulos de tres películas de suspenso. */

export class assertLoginNetflix {

  private readonly loginButtonHome: Locator
  private readonly linkButton: Locator
  private readonly linkCategory: Locator
  private readonly buttonGender: Locator
  private readonly linkSubGender: Locator
  private readonly nameMovie1: Locator
  private readonly nameMovie2: Locator
  private readonly nameMovie3: Locator
  
  constructor(page:Page){
    //Localizadores de los objetos
     this.loginButtonHome = page.getByRole('button', { name: 'Iniciar sesión' })
     this.linkButton = page.getByRole('link', { name: 'Boris' })
     this.linkCategory = page.getByRole('link', { name: 'Películas' })
     this.buttonGender = page.getByRole('button', { name: 'Géneros' })
     this.linkSubGender = page.getByRole('link', { name: 'Acción' })
     this.nameMovie1 = page.locator('//*[@id="title-card-1-0"]/div[1]/a')
     this.nameMovie2 = page.locator('//*[@id="title-card-1-1"]/div[1]/a')
     this.nameMovie3 = page.locator('//*[@id="title-card-1-2"]/div[1]/a')

  }

  
  async assertLoginSuccesfull(){

    await expect (this.loginButtonHome).toBeVisible//Espera Explicita
    console.log('Se valida boton de inicio de sesion');
    await this.loginButtonHome.click();
    console.log('Se inicia sesion desde el Home');

  }

  async assertNavigateProfile(){

    await expect (this.linkButton).toBeVisible//Espera Explicita
    console.log('Se valida disponibilidad del perfil');
    await this.linkButton.click();
    console.log('Se ingresa con el perfil');
    await this.linkCategory.click()
    console.log('Se ingresa Categoria Peliculas');
    await this.buttonGender.click()
    console.log('Se ingresa Genero');
    await this.linkSubGender.click()
    console.log('Se ingresa SubGenero Accion');

  }

  async assertListMovies(){

   const movie1 = await this.nameMovie1.getAttribute('aria-label');
   console.log('Las pelicula de accion numero 1 es:',movie1);
   const movie2 = await this.nameMovie2.getAttribute('aria-label');
   console.log('Las pelicula de accion numero 2 es:',movie2);
   const movie3 = await this.nameMovie3.getAttribute('aria-label');
   console.log('Las pelicula de accion numero 3 es:',movie3);

  }
 
}