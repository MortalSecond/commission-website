import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageSection } from './coverage-section';

describe('CoverageSection', () => {
  let component: CoverageSection;
  let fixture: ComponentFixture<CoverageSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverageSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
