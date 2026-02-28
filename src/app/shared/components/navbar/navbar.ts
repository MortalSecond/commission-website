import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
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
  private readonly destroyRef = inject(DestroyRef);

  // Signals
  isLangSpanish = signal(this.translateService.getCurrentLang() == "es");
  private scrollY = signal(0);
  isScrolled = computed(() => this.scrollY() > 50);

  constructor() {
    const handleScroll = () => this.scrollY.set(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', handleScroll));
  }

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
