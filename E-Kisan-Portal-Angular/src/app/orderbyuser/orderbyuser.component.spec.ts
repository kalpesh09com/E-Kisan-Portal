import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbyuserComponent } from './orderbyuser.component';

describe('OrderbyuserComponent', () => {
  let component: OrderbyuserComponent;
  let fixture: ComponentFixture<OrderbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
