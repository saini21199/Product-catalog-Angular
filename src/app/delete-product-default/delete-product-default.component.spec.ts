import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductDefaultComponent } from './delete-product-default.component';

describe('DeleteProductDefaultComponent', () => {
  let component: DeleteProductDefaultComponent;
  let fixture: ComponentFixture<DeleteProductDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
