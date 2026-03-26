import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { TranslateModule } from '@ngx-translate/core';
import { ServicesSection } from "./sections/services-section/services-section";
import { PortfolioSection } from "./sections/portfolio-section/portfolio-section";
import { MethodologySection } from "./sections/methodology-section/methodology-section";
import { DemoSection } from "./sections/demo-section/demo-section";
import { ItWorkSection } from "./sections/it-work-section/it-work-section";
import { CoverageSection } from "./sections/coverage-section/coverage-section";

@Component({
  selector: 'app-home',
  imports: [Navbar, TranslateModule, ServicesSection, PortfolioSection, MethodologySection, DemoSection, ItWorkSection, CoverageSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
