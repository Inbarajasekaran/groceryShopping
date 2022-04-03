import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellDirectlyProductsComponent } from './sell-directly-products.component';

describe('SellDirectlyProductsComponent', () => {
  let component: SellDirectlyProductsComponent;
  let fixture: ComponentFixture<SellDirectlyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellDirectlyProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDirectlyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
