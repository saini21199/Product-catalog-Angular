import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachitemComponent } from './eachitem.component';

describe('EachitemComponent', () => {
  let component: EachitemComponent;
  let fixture: ComponentFixture<EachitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
