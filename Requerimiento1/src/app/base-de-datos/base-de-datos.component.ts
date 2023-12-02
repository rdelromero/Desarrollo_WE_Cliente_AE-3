import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit {

  constructor(private funcionesService: FuncionesService, private router: Router) {}

  ngOnInit(): void {
  }
  
  title = 'Base de datos';
  listaDesarrolladores = this.funcionesService.listaDesarrolladores;
  listaPlataformas = this.funcionesService.listaPlataformas;
  listaVideojuegos = this.funcionesService.listaVideojuegos;
  listaStocks = this.funcionesService.listaStocks;
  listaStocksSinUndefined = this.funcionesService.listaStocksSinUndefined;

  /*---------------------------Desarrolladores-------------------------------------------*/

  tablaDesarrolladoresVisible: boolean | null = null;
  //Función en click
  mostrarTablaDesarrolladores() {
    this.tablaDesarrolladoresVisible = !this.tablaDesarrolladoresVisible;
  }
  indiceSeleccionado1: number | null = null;
  mostrarDesarrolladorPorNombre(index: number): void {
  // Cambia el índice seleccionado solo si es diferente al actual
  this.indiceSeleccionado1 = this.indiceSeleccionado1 === index ? null : index;
  }

  /*---------------------------Plataformas-------------------------------------------*/
  tablaPlataformasVisible: boolean = false;
  mostrarTablaPlataformas() {
    this.tablaPlataformasVisible = !this.tablaPlataformasVisible;
  }

  indiceSeleccionado2: number | null = null;
  mostrarPlataformaPorNombre(index: number): void {
    // Cambia el índice seleccionado solo si es diferente al actual
    this.indiceSeleccionado2 = this.indiceSeleccionado2 === index ? null : index;
  }

  /*----------------------------------------Videojuegos----------------------------------------*/
  tablaVideojuegosVisible: boolean = false;
  mostrarTablaVideojuegos() {
    this.tablaVideojuegosVisible = !this.tablaVideojuegosVisible;
  }

  /*--------------------------------------Stocks------------------------------------------*/
  tablaStocksVisible: boolean = false;
  mostrarTablaStocks() {
    this.tablaStocksVisible = !this.tablaStocksVisible;
  }

  /*--------------------------------------Stocks sin undefined--------------------------*/
  tablaStocksSinUndefinedVisible: boolean = false;
  mostrarTablaStocksSinUndefined() {
    this.tablaStocksSinUndefinedVisible = !this.tablaStocksSinUndefinedVisible;
  }

  tablaStocksSinUndefinedVisible2: boolean = false;
  mostrarTablaStocksSinUndefined2() {
    this.tablaStocksSinUndefinedVisible2 = !this.tablaStocksSinUndefinedVisible2;
  }

    /*abrirNuevaVentana(url: string, cadena: string): void {
      const urlConParametros = url + '?paramsDato=' + encodeURIComponent(cadena);
      window.open(urlConParametros, '_blank', 'width=400px, height=500px');
    }*/
   
    siguientePagina(url: string, cadena: string, cadena2: string): void {
      this.router.navigate([url], { queryParams: { paramsDato2: cadena, paramsDato3: cadena2 } });
    }
  }

