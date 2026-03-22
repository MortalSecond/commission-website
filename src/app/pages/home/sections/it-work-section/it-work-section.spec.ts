import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItWorkSection } from './it-work-section';

describe('ItWorkSection', () => {
  let component: ItWorkSection;
  let fixture: ComponentFixture<ItWorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItWorkSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItWorkSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
