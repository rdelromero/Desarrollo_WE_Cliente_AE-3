import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/funciones.service';
import { StockSinUndefined } from 'src/app/claseStockSinUndefined';

@Component({
  selector: 'app-base-de-datos-modificacion',
  templateUrl: './base-de-datos-modificacion.component.html',
  styleUrls: ['./base-de-datos-modificacion.component.css']
})
export class BaseDeDatosModificacionComponent implements OnInit {

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
  }

  listaDesarrolladores = this.funcionesService.listaDesarrolladores;
  listaPlataformas = this.funcionesService.listaPlataformas;
  listaVideojuegos = this.funcionesService.listaVideojuegos;
  listaStocksSinUndefined = this.funcionesService.listaStocksSinUndefined;
  
  bloquearEntradaPorTeclado(event: any) {
    event.preventDefault();
  }

  /*---------------------------Desarrolladores-------------------------------------------*/
  InputTextDesarrolladorABorrar: number = 0;
  desarrolladorBorradoVisible: boolean | null = null;
  borrarDesarrolladorPorId(id: number): void {
    const desarrollador = this.funcionesService.devuelveDesarrolladorPorId(id);
    if (desarrollador) {
      for (let a = 0; a < this.listaDesarrolladores.length; a++) {
        if (this.listaDesarrolladores[a].id == id) {
          //Eliminamos el elemento de la posición a:
          this.listaDesarrolladores.splice(a, 1);
          this.desarrolladorBorradoVisible = true;
          break;
        }
      }
      for (let videojuego of this.listaVideojuegos) {
        const deboponerloonofunciona = id;
        if (videojuego.desarrollador && videojuego.desarrollador.id == deboponerloonofunciona) {
          console.log(videojuego.desarrollador.id);
          // Si el videojuego hace referencia al desarrollador eliminado, establecer desarrollador como undefined
          videojuego.desarrollador = undefined;
        }
      }
    }
    else {
      this.desarrolladorBorradoVisible = false;
    }
  }

  /*---------------------------Plataformas-------------------------------------------*/
  InputTextEditorialABorrar: number = 0;
  plataformaBorradaVisible: boolean | null = null;
  borrarPlataformaPorId(id: number): void {
    const plataforma = this.funcionesService.devuelvePlataformaPorId(id);
    if (plataforma) {
      for (let a = 0; a < this.listaPlataformas.length; a++) {
        if (this.listaDesarrolladores[a].id == id) {
          //Eliminamos el elemento de la posición a:
          this.listaPlataformas.splice(a, 1);
          this.plataformaBorradaVisible = true;
          break;
        }
      }
      for (let videojuego of this.listaVideojuegos) {
        const deboponerloonofunciona = id;
        if (videojuego.plataforma && videojuego.plataforma.id == deboponerloonofunciona) {
          console.log(videojuego.plataforma.id);
          videojuego.plataforma = undefined;
        }
      }
    }
    else {
      this.plataformaBorradaVisible = false;
    }
  }

  /*----------------------------------------Videojuegos----------------------------------------*/
  InputTextNovelaABorrar: number = 0;
  videojuegoBorradoVisible: boolean | null = null;
  borrarVideojuegoPorId(id: number): void {
    const videojuego = this.funcionesService.devuelveVideojuegoPorId(id);
    if (videojuego) {
      for (let a = 0; a < this.listaVideojuegos.length; a++) {
        if (this.listaVideojuegos[a].id == id) {
          //Eliminamos el elemento de la posición a:
          this.listaVideojuegos.splice(a, 1);
          this.videojuegoBorradoVisible = true;
          break;
        }
      }
    }
    else {
      this.videojuegoBorradoVisible = false;
    }
  }

    /*--------------------------------------Stocks sin undefined--------------------------*/
    tablaStocksSinUndefinedVisible: boolean = false;
    mostrarTablaStocksSinUndefined() {
      this.tablaStocksSinUndefinedVisible = !this.tablaStocksSinUndefinedVisible;
    }
    
 
    inputNumberPuntuacion : number[]= new Array<number>(this.listaStocksSinUndefined.length).fill(5);
    buttonPuntuacionDesabilitado: boolean[] = [];
    actualizarPuntuacionMedia(stockSinUndefined :StockSinUndefined, numero: number, i: number) {
      stockSinUndefined.sumaPuntuaciones += numero;
      stockSinUndefined.nPuntuaciones += 1;
      stockSinUndefined.puntuacionMedia=stockSinUndefined.sumaPuntuaciones/stockSinUndefined.nPuntuaciones;
      this.buttonPuntuacionDesabilitado[i] = true;
    }

}


