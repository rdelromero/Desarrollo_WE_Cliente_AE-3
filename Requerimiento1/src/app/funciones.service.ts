import { Injectable } from '@angular/core';
import { Desarrollador } from 'src/app/claseDesarrollador';
import { Plataforma } from 'src/app/clasePlataforma';
import { Videojuego } from 'src/app/claseVideojuego';
import { Stock } from 'src/app/claseStock';
import { StockSinUndefined } from 'src/app/claseStockSinUndefined';
import { DatosService } from 'src/app/datos.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  constructor(private datosService: DatosService) {
    this.listaVideojuegos = this.devuelveListaVideojuegos();
    this.listaStocks = this.devuelveListaStocks();
    this.listaStocksSinUndefined = this.devuelveListaStocksSinUndefined();
    //console.log(this.listaStocks);
    //console.log(this.listaStocksSinUndefined);
  }
  
  listaDesarrolladores = this.datosService.listaDesarrolladores;
  listaPlataformas = this.datosService.listaPlataformas;
  listaVideojuegos: Videojuego[] = [];
  listaStocks: Stock[] = [];
  listaStocksSinUndefined: StockSinUndefined[] = [];

  devuelveListaVideojuegos() : Videojuego[]{
    while (this.listaVideojuegos.length < this.datosService.listaVideojuegosSinDependencia.length) {
      for (const videojuegoSinDependencia of this.datosService.listaVideojuegosSinDependencia) {
          if (videojuegoSinDependencia.nombrePlataforma) {
            const videojuego = new Videojuego(this.devuelveDesarrolladorPorNombre(videojuegoSinDependencia.nombreDesarrollador), videojuegoSinDependencia.titulo,  videojuegoSinDependencia.fechaLanzamiento, this.devuelvePlataformaPorNombre(videojuegoSinDependencia.nombrePlataforma), videojuegoSinDependencia.genero, videojuegoSinDependencia.portada);
            this.listaVideojuegos.push(videojuego);
          }
          else {
            const videojuego = new Videojuego(this.devuelveDesarrolladorPorNombre(videojuegoSinDependencia.nombreDesarrollador), videojuegoSinDependencia.titulo, videojuegoSinDependencia.fechaLanzamiento, undefined, videojuegoSinDependencia.genero, videojuegoSinDependencia.portada);
            this.listaVideojuegos.push(videojuego);
          }
        }
      }
      return this.listaVideojuegos;
    }


  devuelveListaStocks() : Stock [] {
    while (this.listaStocks.length < this.datosService.listaStocksSinDependencia.length) {
      for (const stockSinDependencia of this.datosService.listaStocksSinDependencia) {
        const stock = new Stock(this.devuelveVideojuegoPorTituloYPlataforma(stockSinDependencia.tituloVideojuego, stockSinDependencia.plataformaVideojuego), stockSinDependencia.sumaPuntuaciones, stockSinDependencia.nPuntuaciones);
        this.listaStocks.push(stock);
      }
    }
  return this.listaStocks;
  }
  
  arrayTitulitos : string [] = []
  devuelveListaStocksSinUndefined(): StockSinUndefined[] {

      for (let stock of this.listaStocks) {
        if (stock.videojuego) {
          // Suponiendo que hay una función que convierte StockConUndefined a StockSinUndefined
          this.listaStocksSinUndefined.push(new StockSinUndefined(stock.videojuego, stock.sumaPuntuaciones, stock.nPuntuaciones));
        }
      }
    return this.listaStocksSinUndefined;
  }

  devuelveDesarrolladorPorNombre(nombre: string): Desarrollador | undefined {
    //Quita mayúsculas y tildes del nombre introducido 
    const nombreNormalizado = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    for (let a = 0; a < this.datosService.listaDesarrolladores.length; a++) {
      // Normalizar el nombre del autor en la lista
      const nombreDesarrolladorNormalizado = this.datosService.listaDesarrolladores[a].nombreDesarrollador.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      // Comparar los nombres normalizados
      if (nombreDesarrolladorNormalizado === nombreNormalizado) {
        return this.datosService.listaDesarrolladores[a];
      }
    }
    return undefined;
  }

  devuelveDesarrolladorPorId(id: number): Desarrollador | undefined{
    for (let a = 0; a < this.datosService.listaDesarrolladores.length; a++) {
      if (this.datosService.listaDesarrolladores[a].id == id) {
        return this.datosService.listaDesarrolladores[a];
      }
    }
    return undefined;
  }

  devuelvePlataformaPorNombre(nombre: string): Plataforma | undefined {
    //Quita mayúsculas y tildes del nombre introducido 
    const nombreNormalizado = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    for (let a = 0; a < this.datosService.listaPlataformas.length; a++) {
      // Normalizar el nombre del autor en la lista
      const nombrePlataformaNormalizado = this.datosService.listaPlataformas[a].nombrePlataforma.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      // Comparar los nombres normalizados
      if (nombrePlataformaNormalizado === nombreNormalizado) {
        return this.datosService.listaPlataformas[a];
      }
    }
    return undefined;
  }

  devuelvePlataformaPorId(id: number): Plataforma | undefined{
    for (let a = 0; a < this.datosService.listaPlataformas.length; a++) {
      if (this.datosService.listaPlataformas[a].id == id) {
        return this.datosService.listaPlataformas[a];
      }
    }
    return undefined;
  }

  devuelveVideojuegoPorTituloYPlataforma(titulo: string, plataforma: string): Videojuego | undefined {
    //Quita mayúsculas y tildes del nombre introducido 
    const nombreNormalizado = titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nombreNormalizado2 = plataforma.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let a = 0; a < this.listaVideojuegos.length; a++) {
      // Normalizar el nombre del autor en la lista
      const nombreVideojuegoNormalizado = this.listaVideojuegos[a].titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const nombrePlataformaNormalizado = this.listaVideojuegos[a].plataforma?.nombrePlataforma.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      // Comparar los nombres normalizados
      if (nombreVideojuegoNormalizado === nombreNormalizado && nombrePlataformaNormalizado === nombreNormalizado2) {
        return this.listaVideojuegos[a];
      }
    }
    return undefined;
  }

  devuelveVideojuegoPorId(id: number): Videojuego | undefined{
    for (let a = 0; a < this.listaVideojuegos.length; a++) {
      if (this.listaVideojuegos[a].id == id) {
        //Eliminamos el elemento de la posición a:
        return this.listaVideojuegos[a];
      }
    }
    return undefined;
  }

  devuelveStockPorTitulo(titulo: string): StockSinUndefined | undefined {
    //Quita mayúsculas y tildes del nombre introducido 
    const nombreNormalizado = titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    for (let a = 0; a < this.listaVideojuegos.length; a++) {
      // Normalizar el nombre del autor en la lista
      const videojuegoBase = this.listaStocksSinUndefined[a].videojuego;
      if (videojuegoBase) {
        const nombrevideojuegoNormalizado = videojuegoBase.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (nombrevideojuegoNormalizado === nombreNormalizado) {
          return this.listaStocksSinUndefined[a];
        }
      };
    }
    return undefined;
  }

}