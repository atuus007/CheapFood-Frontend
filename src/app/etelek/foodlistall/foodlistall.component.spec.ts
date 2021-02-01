import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlistallComponent } from './foodlistall.component';

describe('FoodlistallComponent', () => {
  let component: FoodlistallComponent;
  let fixture: ComponentFixture<FoodlistallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodlistallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodlistallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
