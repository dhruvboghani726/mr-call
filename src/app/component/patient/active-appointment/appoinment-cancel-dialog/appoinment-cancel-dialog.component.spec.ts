import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentCancelDialogComponent } from './appoinment-cancel-dialog.component';

describe('AppoinmentCancelDialogComponent', () => {
  let component: AppoinmentCancelDialogComponent;
  let fixture: ComponentFixture<AppoinmentCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentCancelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
