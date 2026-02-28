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

}
