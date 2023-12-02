import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDatosModificacionComponent } from './base-de-datos-modificacion.component';

describe('BaseDeDatosModificacionComponent', () => {
  let component: BaseDeDatosModificacionComponent;
  let fixture: ComponentFixture<BaseDeDatosModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDeDatosModificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeDatosModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
