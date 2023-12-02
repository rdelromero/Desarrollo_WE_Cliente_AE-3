import { Injectable } from '@angular/core';
import { Desarrollador } from 'src/app/claseDesarrollador';
import { Plataforma } from 'src/app/clasePlataforma';
import { VideojuegoSinDependencia } from 'src/app/claseVideojuegoSinDependencia';
import { StockSinDependencia } from 'src/app/claseStockSinDependencia';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
    
    listaDesarrolladores: Desarrollador[] = [
    new Desarrollador('Capcom', new Date('1979-09-30'), 'Japón'),
    new Desarrollador('HAL Laboratory', new Date('1980-02-21'), 'Japón'),
    new Desarrollador('Nintendo EAD', new Date('1983-09-30'), 'Japón'),
    new Desarrollador('Studio Liverpool', new Date('1984-01-01'), 'Reino Unido de GB e IN'),
    new Desarrollador('Rareware', new Date('1985-01-01'), 'Reino Unido de GB e IN'),
    new Desarrollador('Square', new Date('1986-01-01'), 'Japón'),
    new Desarrollador('Rockstar North', new Date('1988-01-01'), 'Reino Unido de GB e IN'),
    new Desarrollador('EA Canada', new Date('1991-01-01'), 'Canadá'),
    new Desarrollador('Sega AM2', new Date('1991-01-01'), 'Japón'),
    new Desarrollador('Bungie', new Date('1991-05-01'), 'Estados Unidos'),
    new Desarrollador('Polys Entertainment', new Date('1994-01-01'), 'Japón'),
    new Desarrollador('Konami CE Japan', new Date('1994-01-01'), 'Japón'),
    new Desarrollador('Ubisoft Montreal', new Date('1997-04-01'), 'Canadá'),
  ];

  listaPlataformas: Plataforma[] = [
    new Plataforma("Play Station", "Sony Electronics", new Date("1994-12-03")),
    new Plataforma("Nintendo 64", "Nintendo", new Date("1996-03-23")),
    new Plataforma("Dreamcast", "Nintendo", new Date("1998-11-27")),
    new Plataforma("Play Station 2", "Sony Electronics", new Date("2000-03-04")),
    new Plataforma('Game Cube', 'Nintendo', new Date('2001-09-14')),
    new Plataforma("Xbox", "Flextronics", new Date("2001-11-15")),
    new Plataforma("Xbox 360", "Flextronics", new Date("2005-11-22")),
  ];

    // Creating a new instance of Autor outside of listaAutores
    desarrollador1: Desarrollador = new Desarrollador('Turn 10', new Date('2001-01-01'), 'Estados Unidos');
    plataforma1: Plataforma = new Plataforma("Play Station 3", "Flextronics", new Date("2006-11-11"));

    constructor() {
      // Adding nuevoAutor to listaAutores
      this.listaDesarrolladores.push(this.desarrollador1);
      this.listaPlataformas.push(this.plataforma1);
    }

    listaVideojuegosSinDependencia: VideojuegoSinDependencia[] = [
      new VideojuegoSinDependencia("Nintendo EAD", "Super Mario 64", new Date('1996-06-23'), 'Nintendo 64', 'Plataformas', './assets/imagenes/super-mario-64.jpg'),
      new VideojuegoSinDependencia("Square", "Final Fantasy VII", new Date('1997-01-31'), 'Play Station', 'RPG', './assets/imagenes/final-fantasy-vii.jpg'),
      new VideojuegoSinDependencia("Rareware", "Goldeneye 007", new Date('1997-08-23'), 'Nintendo 64', 'FPS', './assets/imagenes/goldeneye-007.png'),
      new VideojuegoSinDependencia("Polys Entertainment", "Gran Turismo", new Date('1997-12-23'), 'Play Station', 'Simulador de carreras', './assets/imagenes/gran-turismo.png'),
      new VideojuegoSinDependencia("EA Canada", "FIFA: Road to World Cup 98", new Date('1997-11-07'), 'Play Station', 'Deportes', './assets/imagenes/fifa-road-to-world-cup-98-ps.jpg'),
      new VideojuegoSinDependencia("EA Canada", "FIFA: Road to World Cup 98", new Date('1997-12-20'), 'Nintendo 64', 'Deportes', './assets/imagenes/fifa-road-to-world-cup-98-n64.jpg'),
      new VideojuegoSinDependencia("Rareware", "Banjo Kazooie", new Date('1998-06-20'), 'Nintendo 64', 'Plataformas', './assets/imagenes/banjo-kazooie.jpg'),
      new VideojuegoSinDependencia("Konami CE Japan", "Metal Gear Solid", new Date('1998-09-03'), 'Play Station', 'Acción-aventura', './assets/imagenes/metal-gear-solid.jpg'),
      new VideojuegoSinDependencia("HAL Laboratory", "Super Smash Bros.", new Date('1999-01-21'), 'Nintendo 64', 'Lucha', './assets/imagenes/super-smash-bros.jpg'),
      new VideojuegoSinDependencia("Sega AM2", "Shenmue", new Date('1999-12-29'), 'Dreamcast', 'Acción-aventura', './assets/imagenes/shenmue.jpg'),
      new VideojuegoSinDependencia("Bungie", "Halo: Combat Evolved", new Date('2001-11-15'), 'Xbox', 'FPS', './assets/imagenes/halo-combat-evolved.jpg'),
      new VideojuegoSinDependencia("Studio Liverpool", "Formula One 04", new Date('2004-07-30'), 'Play Station 2', 'Carreras', './assets/imagenes/f1-04.jpg'),
      new VideojuegoSinDependencia("Rockstar North", "GTA San Andreas", new Date('2004-10-26'), 'Play Station 2', 'Acción-aventura', './assets/imagenes/gta-san-andreas.jpg'),
      new VideojuegoSinDependencia("Turn 10", "Forza Motorsport", new Date('2005-05-03'), 'Xbox', 'Simulador de carreras', './assets/imagenes/forza-motorsport.jpg'),
      new VideojuegoSinDependencia("Turn 10", "Forza Motorsport 2", new Date('2007-05-24'), 'Xbox 360', 'Simulador de carreras', './assets/imagenes/forza-motorsport-2.jpg'),
      new VideojuegoSinDependencia("Ubisoft Montreal", "Assassin's Creed", new Date('2007-11-13'), 'Xbox 360', 'Acción-aventura', './assets/imagenes/assassins-creed-xbox360.jpg'), 
      new VideojuegoSinDependencia("Ubisoft Montreal", "Assassin's Creed", new Date('2007-11-13'), 'Play Station 3', 'Acción-aventura', './assets/imagenes/assassins-creed-ps3.jpg'), 
    ];

    listaStocksSinDependencia: StockSinDependencia[] = [
      new StockSinDependencia("Super Mario 64", 'Nintendo 64', 8248, 871),
      new StockSinDependencia("Final Fantasy VII", 'Play Station', 11647, 1266),
      new StockSinDependencia("Goldeneye 007", 'Nintendo 64', 3799, 417),
      new StockSinDependencia("Gran Turismo", 'Play Station', 1973, 230),
      new StockSinDependencia("FIFA: Road to World Cup 98", 'Play Station', 346, 47),
      new StockSinDependencia("FIFA: Road to World Cup 98", 'Nintendo 64', 218, 32),
      new StockSinDependencia("Banjo Kazooie", 'Nintendo 64', 2494, 284),
      new StockSinDependencia("Metal Gear Solid", 'Play Station', 10896, 1153),
      new StockSinDependencia("Super Smash Bros.", 'Nintendo 64', 2417, 286),
      new StockSinDependencia("Shenmue", 'Dreamcast', 5172, 564),
      new StockSinDependencia("Halo: Combat Evolved", 'Xbox', 5432, 618),
      new StockSinDependencia("Formula One 04", 'Play Station 2', 283, 43),
      new StockSinDependencia("GTA San Andreas", 'Play Station 2', 7069, 782),
      new StockSinDependencia("Forza Motorsport", 'Xbox', 837, 95),
      new StockSinDependencia("Forza Motorsport 2", 'Xbox 360', 996, 119),
      new StockSinDependencia("Assassin's Creed", 'Xbox 360', 2972, 386),
      new StockSinDependencia("Assassin's Creed", 'Play Station 3', 4214, 556),
      new StockSinDependencia("Las aventuras de Félix", 'Edix', 30, 3),
    ]
}
