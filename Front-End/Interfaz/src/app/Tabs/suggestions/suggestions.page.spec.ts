import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionsPage } from './suggestions.page';

describe('SuggestionsPage', () => {
  let component: SuggestionsPage;
  let fixture: ComponentFixture<SuggestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
