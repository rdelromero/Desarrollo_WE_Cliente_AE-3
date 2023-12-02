import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDatosVideojuegoComponent } from './pagina-datos-videojuego.component';

describe('PaginaDatosVideojuegoComponent', () => {
  let component: PaginaDatosVideojuegoComponent;
  let fixture: ComponentFixture<PaginaDatosVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDatosVideojuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDatosVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
