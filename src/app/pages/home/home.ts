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
}
