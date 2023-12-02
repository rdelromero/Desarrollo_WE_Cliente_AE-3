import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDatosBusquedasComponent } from './base-de-datos-busquedas.component';

describe('BaseDeDatosBusquedasComponent', () => {
  let component: BaseDeDatosBusquedasComponent;
  let fixture: ComponentFixture<BaseDeDatosBusquedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDeDatosBusquedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeDatosBusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
