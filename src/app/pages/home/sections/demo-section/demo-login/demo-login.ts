import { Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-login',
  imports: [TranslateModule],
  templateUrl: './demo-login.html',
  styleUrl: './demo-login.css',
})
export class DemoLogin {
  // Signals
  isClicked = signal(false);
  readonly buttonContent = computed(() => this.isClicked() ? 'home.demos.demos.auth.button-clicked' : 'home.demos.demos.auth.button');

  // UI Methods
  clickDemoButton(){
    this.isClicked.update(current => !current);
  }
}
