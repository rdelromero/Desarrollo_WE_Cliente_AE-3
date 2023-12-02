import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortadaComponent } from './portada/portada.component'; //Necesario
import { BaseDeDatosComponent } from './base-de-datos/base-de-datos.component'; //Necesario
import { BaseDeDatosBusquedasComponent } from './base-de-datos-busquedas/base-de-datos-busquedas.component'; //Necesario
import { BaseDeDatosModificacionComponent } from './base-de-datos-modificacion/base-de-datos-modificacion.component'; //Necesario
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component'; //Necesario
import { ContactaConNosotrosComponent } from './contacta-con-nosotros/contacta-con-nosotros.component'; //Necesario
//import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component'; //Necesario
import { PaginaDatosVideojuegoComponent } from './pagina-datos-videojuego/pagina-datos-videojuego.component'; //Necesario

const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : PortadaComponent
  },
  { path: 'portada', component: PortadaComponent },
  { path: 'base-de-datos', component: BaseDeDatosComponent },
  { path: 'base-de-datos-busquedas', component: BaseDeDatosBusquedasComponent },
  { path: 'base-de-datos-modificacion', component: BaseDeDatosModificacionComponent },
  //{ path: 'resultados-busqueda', component: ResultadosBusquedaComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contacta-con-nosotros', component: ContactaConNosotrosComponent },
  { path: 'pagina-datos-videojuego', component: PaginaDatosVideojuegoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
