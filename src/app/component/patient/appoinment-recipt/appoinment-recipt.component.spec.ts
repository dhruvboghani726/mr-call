import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentReciptComponent } from './appoinment-recipt.component';

describe('AppoinmentReciptComponent', () => {
  let component: AppoinmentReciptComponent;
  let fixture: ComponentFixture<AppoinmentReciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentReciptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentReciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
