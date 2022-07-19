import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavdialogComponent } from './sidenavdialog.component';

describe('SidenavdialogComponent', () => {
  let component: SidenavdialogComponent;
  let fixture: ComponentFixture<SidenavdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
