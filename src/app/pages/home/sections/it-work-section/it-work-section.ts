import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-it-work-section',
  imports: [TranslateModule],
  templateUrl: './it-work-section.html',
  styleUrl: './it-work-section.css',
})
export class ItWorkSection {
  // Services
  readonly translateService = inject(TranslateService);

  // Plain Data
  readonly cards =[
    {
      icon: "icons/printer.svg",
      title: toSignal<string>(this.translateService.stream('home.it.printers.title')),
      subtitle: toSignal<string>(this.translateService.stream('home.it.printers.subtitle')),
      bullets: [
        {
          icon: "icons/wrench.svg",
          title: toSignal<string>(this.translateService.stream('home.it.printers.bullets.one.title')),
          content: toSignal<string>(this.translateService.stream('home.it.printers.bullets.one.content'))
        },
        {
          icon: "icons/antenna.svg",
          title: toSignal<string>(this.translateService.stream('home.it.printers.bullets.two.title')),
          content: toSignal<string>(this.translateService.stream('home.it.printers.bullets.two.content'))
        },
        {
          icon: "icons/cd.svg",
          title: toSignal<string>(this.translateService.stream('home.it.printers.bullets.three.title')),
          content: toSignal<string>(this.translateService.stream('home.it.printers.bullets.three.content'))
        }
      ],
    },
    {
      icon: "icons/antenna.svg",
      title: toSignal<string>(this.translateService.stream('home.it.networks.title')),
      subtitle: toSignal<string>(this.translateService.stream('home.it.networks.subtitle')),
      bullets: [
        {
          icon: "icons/lock.svg",
          title: toSignal<string>(this.translateService.stream('home.it.networks.bullets.one.title')),
          content: toSignal<string>(this.translateService.stream('home.it.networks.bullets.one.content'))
        },
        {
          icon: "icons/gear.svg",
          title: toSignal<string>(this.translateService.stream('home.it.networks.bullets.two.title')),
          content: toSignal<string>(this.translateService.stream('home.it.networks.bullets.two.content'))
        },
        {
          icon: "icons/tools.svg",
          title: toSignal<string>(this.translateService.stream('home.it.networks.bullets.three.title')),
          content: toSignal<string>(this.translateService.stream('home.it.networks.bullets.three.content'))
        }
      ],
    },
    {
      icon: "icons/plug.svg",
      title: toSignal<string>(this.translateService.stream('home.it.cabling.title')),
      subtitle: toSignal<string>(this.translateService.stream('home.it.cabling.subtitle')),
      bullets: [
        {
          icon: "icons/cable.svg",
          title: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.one.title')),
          content: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.one.content'))
        },
        {
          icon: "icons/light.svg",
          title: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.two.title')),
          content: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.two.content'))
        },
        {
          icon: "icons/box.svg",
          title: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.three.title')),
          content: toSignal<string>(this.translateService.stream('home.it.cabling.bullets.three.content'))
        }
      ],
    },
    {
      icon: "icons/computer.svg",
      title: toSignal<string>(this.translateService.stream('home.it.computers.title')),
      subtitle: toSignal<string>(this.translateService.stream('home.it.computers.subtitle')),
      bullets: [
        {
          icon: "icons/bolt.svg",
          title: toSignal<string>(this.translateService.stream('home.it.computers.bullets.one.title')),
          content: toSignal<string>(this.translateService.stream('home.it.computers.bullets.one.content'))
        },
        {
          icon: "icons/hammer.svg",
          title: toSignal<string>(this.translateService.stream('home.it.computers.bullets.two.title')),
          content: toSignal<string>(this.translateService.stream('home.it.computers.bullets.two.content'))
        },
        {
          icon: "icons/stethoscope.svg",
          title: toSignal<string>(this.translateService.stream('home.it.computers.bullets.three.title')),
          content: toSignal<string>(this.translateService.stream('home.it.computers.bullets.three.content'))
        }
      ],
    }
  ];
}
