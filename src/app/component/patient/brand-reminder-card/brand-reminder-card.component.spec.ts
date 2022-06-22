import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandReminderCardComponent } from './brand-reminder-card.component';

describe('BrandReminderCardComponent', () => {
  let component: BrandReminderCardComponent;
  let fixture: ComponentFixture<BrandReminderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandReminderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandReminderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
