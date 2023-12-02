import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/funciones.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagina-datos-videojuego',
  templateUrl: './pagina-datos-videojuego.component.html',
  styleUrls: ['./pagina-datos-videojuego.component.css']
})

export class PaginaDatosVideojuegoComponent implements OnInit {

  datoRecibido: string ='';
  datoRecibido2: string ='';
  constructor(private funcionesService: FuncionesService, private route: ActivatedRoute, private location: Location) { }

  listaStocksSinUndefined = this.funcionesService.listaStocksSinUndefined;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datoRecibido = params['paramsDato2'];
      this.datoRecibido2 = params['paramsDato3'];
      // Puedes hacer algo con el dato recibido, como mostrarlo en la pantalla
      console.log(this.datoRecibido);
    });
  }

  volverPaginaAnterior(): void {
    this.location.back();
  }
}


