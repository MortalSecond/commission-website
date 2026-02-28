import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Services
  private readonly translateService = inject(TranslateService);

  // Signals
  isLangSpanish = signal(this.translateService.getCurrentLang() == "es");

  // Functional Methods
  switchLang(){
    if(this.isLangSpanish()){
      this.translateService.use('en');
      this.isLangSpanish.set(false);
    }
    else{
      this.translateService.use('es');
      this.isLangSpanish.set(true);
    }
  }
}
