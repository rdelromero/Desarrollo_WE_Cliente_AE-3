import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent{
  title = 'CabeceraComponent';
  constructor() {}

  /*InputTextTituloStockCarrito: string = '';
  @Output() parametroEnviado = new EventEmitter<string>();

  enviarParametro() {
    this.parametroEnviado.emit(this.InputTextTituloStockCarrito);
  }*/

  ngOnInit(): void {
  }

  @Input() stringInputDefinidoEnComponenteCabecera: string = '';

}