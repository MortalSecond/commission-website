import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoConfigurator } from './demo-configurator';

describe('DemoConfigurator', () => {
  let component: DemoConfigurator;
  let fixture: ComponentFixture<DemoConfigurator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoConfigurator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoConfigurator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
