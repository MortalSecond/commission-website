import { Component, inject } from '@angular/core';
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

  // Functional Methods
  switchLang(){
    if(this.translateService.getCurrentLang() == "es")
      this.translateService.use('en');
    else
      this.translateService.use('es');
  }
}
