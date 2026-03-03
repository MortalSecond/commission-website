import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [Navbar, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
}
