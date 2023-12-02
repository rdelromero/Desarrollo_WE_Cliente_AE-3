import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; //Necesario para establecer comunicación two ways binding entre .html y .ts

import { ContactaConNosotrosComponent } from './contacta-con-nosotros/contacta-con-nosotros.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { BaseDeDatosComponent } from './base-de-datos/base-de-datos.component';
import { BaseDeDatosBusquedasComponent } from './base-de-datos-busquedas/base-de-datos-busquedas.component';
import { BaseDeDatosModificacionComponent } from './base-de-datos-modificacion/base-de-datos-modificacion.component';
import { PaginaDatosVideojuegoComponent } from './pagina-datos-videojuego/pagina-datos-videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ContactaConNosotrosComponent,
    QuienesSomosComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    BaseDeDatosComponent,
    BaseDeDatosBusquedasComponent,
    BaseDeDatosModificacionComponent,
    PaginaDatosVideojuegoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Necesario para establecer comunicación two ways entre .html y .ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
