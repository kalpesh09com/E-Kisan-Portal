import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdashboardComponent } from './orderdashboard.component';

describe('OrderdashboardComponent', () => {
  let component: OrderdashboardComponent;
  let fixture: ComponentFixture<OrderdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
