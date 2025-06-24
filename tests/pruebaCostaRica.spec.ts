import { test, expect, chromium } from '@playwright/test';
import { assertLoginNetflix } from './questions/QS_LoginNetflix';
import { PO_LoginPagePart2Excercise2 } from './pageObject/PO_LoginPagePart2Excercise2';
import { QS_LoginPagePart2Excercise2 } from './questions/QS_LoginPagePart2Excercise2';
import { PO_LoginNetflix } from './pageObject/PO_LoginNetflix';
import { _android as android } from '@playwright/test';
import { PO_LoginGmail } from './pageObject/PO_LoginGmail';
import { QS_LoginGmail } from './questions/QS_LoginGmail';



/*Ejercicio #1: Implementación de Framework BDD
Utiliza cualquier framework de BDD para automatizar un escenario de inicio de sesión
en una URL de tu elección.*/

test('esenario inicio de sesion parte 2 ejercicio 1', async ({ page }, testInfo) => {

  console.log('El test está corriendo');
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  const loginpage = new PO_LoginPagePart2Excercise2(page)
  const qs_login_secces = new QS_LoginPagePart2Excercise2(page)

  await loginpage.loginwithCredential('student','Password123')
  await testInfo.attach('Se ingresa usuario y contraseña',
    {
      body: await page.screenshot(),
      contentType: 'Se ingresa usuario y contraseña.png'
    })

  await qs_login_secces.assertLoginSuccesfull()

  await testInfo.attach('LoginSuccesfull',
    {
      body: await page.screenshot(),
      contentType: 'screenshotLoginSuccesfull.png'
    })
    
  await loginpage.closeSesion()

  await testInfo.attach('LogOut.png',
    {
      body: await page.screenshot(),
      contentType: 'screenshotLogOut.png'
    })

  //await page.pause() // Espera Implicita

  console.log('Finaliza el test');
  
});


/* 1. Automatizar el inicio de sesión en Netflix desde la página web
○ Navegar por la plataforma.
○ Maximizar la pantalla.
○ Capturar e imprimir los títulos de tres películas de suspenso. */

test('esenario inicio de sesión en Netflix', async ({ page }, testInfoII) => {
  
  console.log('El test está corriendo para Netflix');
  await page.goto('https://www.netflix.com/co/');

  const loginpage = new PO_LoginNetflix(page)
  const qs_login_secces_netflix = new assertLoginNetflix(page)

  await qs_login_secces_netflix.assertLoginSuccesfull()
  //Se debe ingresar el usuario y la contraseña
  await loginpage.loginwithCredentialNetflix('Ingresar usuario','ingresar contraseña')

  await testInfoII.attach('LoginSuccesfull',
    {
      body: await page.screenshot(),
      contentType: 'screenshotLoginSuccesfull.png'
    })

  await qs_login_secces_netflix.assertNavigateProfile()

   await testInfoII.attach('NavigateProfile',
    {
      body: await page.screenshot(),
      contentType: 'navigateProfileSuccesfull.png'
    })

  await qs_login_secces_netflix.assertListMovies()

  await testInfoII.attach('List Movies',
    {
      body: await page.screenshot(),
      contentType: 'Lista de peliculas.png'
    })

  //await page.pause() // Espera Implicita
  console.log('Finaliza el test');
  
});


/*Automatizar el inicio de sesión en Gmail para un dispositivo móvil
○ Navegar en la aplicación móvil de Gmail.
○ Validar el mensaje de acceso exitoso.*/

test('esenario inicio de sesión en Gmail',async ({ page }, testInfoII) => {

  const loginpageGmail = new PO_LoginGmail(page)
  const qs_login_Gmail = new QS_LoginGmail(page)

  console.log('El test está corriendo para Gmail en mobil Android');
  const [device] = await android.devices();
  console.log(`Model: ${device.model()}`);
  console.log(`Serial: ${device.serial()}`);
    
    //SDe carga navegador
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser()
    console.log('Se abre el navegador');
    
    // Se ingresa a la URL
    const gmailPage = await context.newPage();
    await gmailPage.goto('https://accounts.google.com/')
    test.setTimeout(30_000);
    console.log('Se ingresa la URL');

    await testInfoII.attach('Se ingresa a la URL', {
    body: await page.screenshot(),
    contentType: 'Ingreso a la URL/png'
    });
    
    //Se debe ingresar el usuario y la contraseña
    await loginpageGmail.loginwithCredentialGmail('Se ingresa el email','se ingresa la contraseña')
    console.log('Se hace login');
    await qs_login_Gmail.assertLoginSuccesfullGmail()
    console.log('Se valida el mensaje de inicio exitoso');

    await testInfoII.attach('Mensaje de inicio de sesion exitosa',
    {
      body: await page.screenshot(),
      contentType: 'Mensaje de inicio de sesion exitosa.png'
    })
    
    console.log('Finaliza el test');

});

