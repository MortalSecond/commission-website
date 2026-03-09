import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoI18n } from './demo-i18n';

describe('DemoI18n', () => {
  let component: DemoI18n;
  let fixture: ComponentFixture<DemoI18n>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoI18n]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoI18n);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
