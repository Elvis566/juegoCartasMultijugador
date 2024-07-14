import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAPage } from './select-a.page';

describe('SelectAPage', () => {
  let component: SelectAPage;
  let fixture: ComponentFixture<SelectAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
