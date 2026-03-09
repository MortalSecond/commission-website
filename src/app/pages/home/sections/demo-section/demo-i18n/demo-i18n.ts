import { Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-i18n',
  imports: [TranslateModule],
  templateUrl: './demo-i18n.html',
  styleUrl: './demo-i18n.css',
})
export class DemoI18n {
  // Plain Data
  readonly english = {
    title: "Welcome to our store",
    subtitle: "Browse our custom items and commissions",
    button: "Commission now"
  }
  readonly spanish = {
    title: "Bienvenido a nuestra tienda",
    subtitle: "Echa un vistazo a nuestros items y comisiónes",
    button: "Haz un Encargo"
  }

  // Signals
  readonly demoLang = signal<'en'|'es'>('en');

  // Computed Values
  readonly activeContent = computed(() => this.demoLang() === 'es'? this.spanish : this.english)
}
