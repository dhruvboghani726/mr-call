import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydoctorListComponent } from './mydoctor-list.component';

describe('MydoctorListComponent', () => {
  let component: MydoctorListComponent;
  let fixture: ComponentFixture<MydoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydoctorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
