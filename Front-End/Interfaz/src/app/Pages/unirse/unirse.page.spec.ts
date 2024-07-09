import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnirsePage } from './unirse.page';

describe('UnirsePage', () => {
  let component: UnirsePage;
  let fixture: ComponentFixture<UnirsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
