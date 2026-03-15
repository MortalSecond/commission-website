import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-configurator',
  imports: [TranslateModule, DecimalPipe],
  templateUrl: './demo-configurator.html',
  styleUrl: './demo-configurator.css',
})
export class DemoConfigurator {
  // Services
  private readonly translateService = inject(TranslateService);

  // Plain Data
  readonly typeOptions=[
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.type.options.one')),
      value: 1000
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.type.options.two')),
      value: 7000
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.type.options.three')),
      value: 7000
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.type.options.four')),
      value: 9000
    }
  ]
  readonly featureOptions=[
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.features.options.one')),
      value: 500
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.features.options.two')),
      value: 1000
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.features.options.three')),
      value: 200
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.features.options.four')),
      value: 300
    },
    {
      title: toSignal<string[]>(this.translateService.stream('home.demos.demos.config.options.features.options.five')),
      value: 400
    }
  ]

  // Signals
  readonly selectedType = signal(1000);
  readonly selectedFeatures = signal<number[]>([]);

  // Computed Values
  readonly total = computed(() => this.selectedType() + this.selectedFeatures().reduce((sum, v) => sum + v, 0));

  // UI Methods
  onTypeChange(event: Event){
    const value = Number((event.target as HTMLSelectElement).value);
    this.selectedType.set(value);
  }

  toggleFeature(value: number){
    this.selectedFeatures.update(current => current.includes(value)? current.filter(v => v !== value) : [...current, value]);
  }
}
