import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorderdetailsComponent } from './updateorderdetails.component';

describe('UpdateorderdetailsComponent', () => {
  let component: UpdateorderdetailsComponent;
  let fixture: ComponentFixture<UpdateorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateorderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
