import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Desarrollo_WE_Cliente_AE-3';

  nombreUsuario = '';
  contrasena = '';
  acceso : boolean | null = null;

  constructor(private autenticacionService: AutenticacionService, private router: Router) {}
    ngOnInit(): void {
    }

    @Output() eventEmitterOutputDefinidoEnComponent = new EventEmitter<string>();

    onSubmit(): void {
      this.acceso = this.autenticacionService.login(this.nombreUsuario, this.contrasena);
      this.eventEmitterOutputDefinidoEnComponent.emit(this.nombreUsuario);
      if (this.acceso == true) {
        this.router.navigate(['/portada']);
      } else {
        this.acceso = false;
      }
    }


    /*Si el parámetro se envíase desde un component que no fuese app.component habría que haber puesto
    stringDefinidoEnComponent : string = '';
    setStringDefinidoEnComponent(cadena: string) {
      this.stringDefinidoEnComponent = cadena;
    }*/
  }





  /*parametroRecibido: string = '';
  recibirParametro(parametro: string) {
    this.parametroRecibido = parametro;
  }*/
