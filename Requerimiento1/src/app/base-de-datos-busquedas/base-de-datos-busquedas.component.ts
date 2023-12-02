import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/funciones.service';

@Component({
  selector: 'app-base-de-datos-busquedas',
  templateUrl: './base-de-datos-busquedas.component.html',
  styleUrls: ['./base-de-datos-busquedas.component.css']
})
export class BaseDeDatosBusquedasComponent implements OnInit {

  constructor(private funcionesService: FuncionesService) { }
  
  ngOnInit(): void {
  }

  listaDesarrolladores = this.funcionesService.listaDesarrolladores;
  listaPlataformas = this.funcionesService.listaPlataformas;
  listaVideojuegos = this.funcionesService.listaVideojuegos;

/*---------------------------Desarrolladores-------------------------------------------*/
InputTextNombreDesarrollador2: string =''
InputTextNombreDesarrollador2_1: string ='';
tablaDesarrolladorVisible: boolean | null = null;
mostrarTablaDesarrollador() : void{
  this.InputTextNombreDesarrollador2_1 = this.InputTextNombreDesarrollador2;
  const Desarrollador = this.funcionesService.devuelveDesarrolladorPorNombre(this.InputTextNombreDesarrollador2_1);
    if (Desarrollador) {
      this.tablaDesarrolladorVisible = true;
    }
    else {
      this.tablaDesarrolladorVisible = false;
    }
}

  /*---------------------------Plataformas-------------------------------------------*/
  InputTextNombrePlataforma2: string =''
  InputTextNombrePlataforma2_1: string ='';
  tablaPlataformaVisible: boolean | null = null;
  mostrarTablaPlataforma() : void{
    this.InputTextNombrePlataforma2_1 = this.InputTextNombrePlataforma2;
    const plataforma = this.funcionesService.devuelvePlataformaPorNombre(this.InputTextNombrePlataforma2_1);
      if (plataforma) {
        this.tablaPlataformaVisible = true;
      }
      else {
        this.tablaPlataformaVisible = false;
      }
  }

  /*----------------------------------------Videojuegos----------------------------------------*/
  InputTextTitulo2: string =''
  InputTextTitulo2_1: string ='';
  tablaVideojuegoVisible: boolean | null = null;
  mostrarTablaVideojuego()  {
    this.InputTextTitulo2_1 = this.InputTextTitulo2;
    for (const videojuego of this.listaVideojuegos) {
      if (this.InputTextTitulo2_1.toLocaleLowerCase() == videojuego.titulo.toLowerCase() || (videojuego.desarrollador && this.InputTextTitulo2_1.toLowerCase() == videojuego.desarrollador.nombreDesarrollador.toLowerCase())) {
        this.tablaVideojuegoVisible = true;
        return;
      }
    }
    this.tablaVideojuegoVisible = false;
  }

}
