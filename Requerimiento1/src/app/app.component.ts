import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desarrollo_WE_Cliente_AE-3';
  parametroRecibido: string = '';
  recibirParametro(parametro: string) {
    this.parametroRecibido = parametro;
  }
}