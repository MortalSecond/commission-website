import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-section',
  imports: [TranslateModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  // Services
  readonly translateService = inject(TranslateService);

  // Plain Data
  private readonly cardNames = ['one', 'two', 'three', 'four', 'five', 'six'];
  private readonly iconMap: Record<string, string> = {
    one: 'globe',
    two: 'palette',
    three: 'wrench',
    four: 'computer',
    five: 'world',
    six: 'repeat'
  };

  readonly serviceCards = this.cardNames.map((name, index) => ({
    id: index,
    icon: `icons/${this.iconMap[name]}.svg`,
    title: toSignal(this.translateService.stream(`home.services.cards.${name}.title`)),
    content: toSignal(this.translateService.stream(`home.services.cards.${name}.description`)),
    pill: toSignal(this.translateService.stream(`home.services.cards.${name}.pill`)),
    isLocationRelated: name === 'three'
  }));
}
