import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DemoEmail } from "./demo-email/demo-email";
import { DemoI18n } from './demo-i18n/demo-i18n';
import { DemoLogin } from './demo-login/demo-login';

type DemoKey = 'dashboard' | 'pricing' | 'gallery' | 'auth' | 'i18n' | 'email';
interface DemoOption{
  key: DemoKey;
  label: string;
}

@Component({
  selector: 'app-demo-section',
  imports: [TranslateModule, DemoEmail, DemoI18n, DemoLogin],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
})

export class DemoSection {
  // Services
  private readonly translateService = inject(TranslateService);

  // Plain Data
  demos = toSignal<DemoOption[]>(this.translateService.stream('home.demos.options'));

  // Signals
  currentDemo = signal<DemoKey | null>(null);
  select(key: DemoKey){
    this.currentDemo.set(key);
  }
}
