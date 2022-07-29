import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCompanyComponent } from './block-company.component';

describe('BlockCompanyComponent', () => {
  let component: BlockCompanyComponent;
  let fixture: ComponentFixture<BlockCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
