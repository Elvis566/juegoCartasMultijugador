import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarAmigosPage } from './buscar-amigos.page';

describe('BuscarAmigosPage', () => {
  let component: BuscarAmigosPage;
  let fixture: ComponentFixture<BuscarAmigosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
