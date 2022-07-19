import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinedialogComponent } from './offlinedialog.component';

describe('OfflinedialogComponent', () => {
  let component: OfflinedialogComponent;
  let fixture: ComponentFixture<OfflinedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
