import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDashboard } from './demo-dashboard';

describe('DemoDashboard', () => {
  let component: DemoDashboard;
  let fixture: ComponentFixture<DemoDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
