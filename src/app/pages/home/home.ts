import { Component, inject } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [Navbar, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Services
  private readonly translateService = inject(TranslateService);

  // Plain Data
  readonly atelierGeode = {
    pills: ['Angular 19', 'ASP.NET Core', 'PostgreSQL', 'Azure Blob Storage', 'Email MailKit', 'JWT Auth', 'Docker']
  };
  readonly orchestraMC = {
    pills: ['C# WPF', '.NET 9', 'CLI', 'MVVM', 'Async/Await', 'SOAP/XML API', 'Ngrok API', 'Playit.gg']
  };

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
