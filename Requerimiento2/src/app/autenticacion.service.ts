import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/claseUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  listaUsuarios: Usuario[] = [
    new Usuario('RdelRomero', 'contrasena0'),
    new Usuario('ksio7', 'contrasena1'),
    new Usuario('enriqueVz', 'contrasena2'),
    new Usuario('fdepablo', 'contrasena3'),
  ]

  paginaVisible : boolean = false;
  login(username: string, password: string): boolean {
    for (let usuario of this.listaUsuarios) {
      if (usuario.nombreUsuario === username && usuario.contrasena === password) {
        this.paginaVisible=true;
        return true;
      }
    }
    return false;
  }
}
  
