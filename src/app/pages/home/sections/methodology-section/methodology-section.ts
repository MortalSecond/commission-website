import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-methodology-section',
  imports: [TranslateModule],
  templateUrl: './methodology-section.html',
  styleUrl: './methodology-section.css',
})
export class MethodologySection {
  // Services
  private readonly translateService = inject(TranslateService);

  readonly angular ={
    green: ['Angular 19 - 20', 'Signals', 'Standalone'],
    yellow: ['AngularJS (legacy)']
  };
  readonly react ={
    green: ['Functional components', 'Hooks'],
    yellow: ['Not my daily driver']
  };
  readonly aspnet ={
    green: ['Web API', 'EF Core', 'JWT / Auth']
  };
  readonly postgre ={
    green: ['Raw SQL', 'MS SQL', 'Microsoft Access'],
    yellow: ['MySQL (legacy)']
  };
  readonly desktopApps ={
    goTo: ['WPF + MVVM', '.NET 9/10', 'C# async/await'],
    legacy: ['WinForms', '.NET Framework 4.x', 'Framework → Core'],
    outOfScope: ['macOS / Linux desktop', 'Electron']
  };
  css ={
    advantages: toSignal<string[]>(this.translateService.stream('home.methods.css.cards.advantages.list')),
    disadvantages: toSignal<string[]>(this.translateService.stream('home.methods.css.cards.disadvantages.list'))
  }
  outOfScope =[
    {
      title: 'home.methods.scope.one.title',
      description: 'home.methods.scope.one.description'
    },
    {
      title: 'home.methods.scope.two.title',
      description: 'home.methods.scope.two.description'
    },
    {
      title: 'home.methods.scope.three.title',
      description: 'home.methods.scope.three.description'
    },
    {
      title: 'home.methods.scope.four.title',
      description: 'home.methods.scope.four.description'
    }
  ]
}
