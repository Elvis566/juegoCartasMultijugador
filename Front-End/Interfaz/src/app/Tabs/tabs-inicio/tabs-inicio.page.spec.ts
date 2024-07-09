import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsInicioPage } from './tabs-inicio.page';

describe('TabsInicioPage', () => {
  let component: TabsInicioPage;
  let fixture: ComponentFixture<TabsInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
