import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaEsperaPage } from './sala-espera.page';

describe('SalaEsperaPage', () => {
  let component: SalaEsperaPage;
  let fixture: ComponentFixture<SalaEsperaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
