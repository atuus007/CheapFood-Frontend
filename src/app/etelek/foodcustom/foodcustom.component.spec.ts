import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcustomComponent } from './foodcustom.component';

describe('FoodcustomComponent', () => {
  let component: FoodcustomComponent;
  let fixture: ComponentFixture<FoodcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
