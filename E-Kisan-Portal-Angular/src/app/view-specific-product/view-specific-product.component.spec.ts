import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificProductComponent } from './view-specific-product.component';

describe('ViewSpecificProductComponent', () => {
  let component: ViewSpecificProductComponent;
  let fixture: ComponentFixture<ViewSpecificProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
