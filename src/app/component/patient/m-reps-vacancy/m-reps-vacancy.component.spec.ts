import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRepsVacancyComponent } from './m-reps-vacancy.component';

describe('MRepsVacancyComponent', () => {
  let component: MRepsVacancyComponent;
  let fixture: ComponentFixture<MRepsVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRepsVacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRepsVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
