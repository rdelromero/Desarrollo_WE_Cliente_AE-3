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
InputTextNombreDesarrollador2ConMayusculasYTildes: string ='';
tablaDesarrolladorVisible: boolean | null = null;
mostrarTablaDesarrollador() : void{
  const desarrollador = this.funcionesService.devuelveDesarrolladorPorNombre(this.InputTextNombreDesarrollador2);
    if (desarrollador) {
      this.InputTextNombreDesarrollador2ConMayusculasYTildes = desarrollador.nombreDesarrollador;
      this.tablaDesarrolladorVisible = true;

    }
    else {
      this.tablaDesarrolladorVisible = false;
    }
}

  /*---------------------------Plataformas-------------------------------------------*/
  InputTextNombrePlataforma2: string =''
  InputTextNombrePlataforma2ConMayusculasYTildes: string ='';
  tablaPlataformaVisible: boolean | null = null;
  mostrarTablaPlataforma() : void{
    const plataforma = this.funcionesService.devuelvePlataformaPorNombre(this.InputTextNombrePlataforma2);
      if (plataforma) {
        this.InputTextNombrePlataforma2ConMayusculasYTildes = plataforma.nombrePlataforma;
        this.tablaPlataformaVisible = true;
      }
      else {
        this.tablaPlataformaVisible = false;
      }
  }

  /*----------------------------------------Videojuegos----------------------------------------*/
  InputTextTitulo2: string =''
  inputTextTitulo2ConMayusculasYTildes: string ='';
  inputTextDesarrollador2ConMayusculasYTildes: string | undefined = undefined;
  tablaVideojuegoVisible: boolean | null = null;
  mostrarTablaVideojuego()  {
    for (const videojuego of this.listaVideojuegos) {
      if (this.InputTextTitulo2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == videojuego.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || (videojuego.desarrollador && this.InputTextTitulo2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == videojuego.desarrollador.nombreDesarrollador.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        this.inputTextTitulo2ConMayusculasYTildes = videojuego.titulo;
        console.log(this.inputTextTitulo2ConMayusculasYTildes);
        this.inputTextDesarrollador2ConMayusculasYTildes = videojuego.desarrollador?.nombreDesarrollador;
        this.tablaVideojuegoVisible = true;
        return;
      }
    }
    this.tablaVideojuegoVisible = false;
  }

}
