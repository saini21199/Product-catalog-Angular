import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductDefaultComponent } from './edit-product-default.component';

describe('EditProductDefaultComponent', () => {
  let component: EditProductDefaultComponent;
  let fixture: ComponentFixture<EditProductDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
