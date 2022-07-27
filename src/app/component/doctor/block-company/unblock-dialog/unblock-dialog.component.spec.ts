import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockDialogComponent } from './unblock-dialog.component';

describe('UnblockDialogComponent', () => {
  let component: UnblockDialogComponent;
  let fixture: ComponentFixture<UnblockDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnblockDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
