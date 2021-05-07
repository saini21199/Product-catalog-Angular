import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductwithmattableComponent } from './listproductwithmattable.component';

describe('ListproductwithmattableComponent', () => {
  let component: ListproductwithmattableComponent;
  let fixture: ComponentFixture<ListproductwithmattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductwithmattableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductwithmattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
