import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-dashboard',
  imports: [TranslateModule],
  templateUrl: './demo-dashboard.html',
  styleUrl: './demo-dashboard.css',
})
export class DemoDashboard {
  // Services
  readonly translateService = inject(TranslateService);

  // Plain Data
  readonly topGrids =[
    {
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.slots-title')),
      content: "1 / 3",
      subtitle: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.slots-subtitle'))
    },
    {
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.month-title')),
      content: "$12,500",
      subtitle: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.month-subtitle'))
    },
    {
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.delivery-title')),
      content: "18 " + toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.delivery-days'))(),
      subtitle: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.grid.delivery-subtitle'))
    }
  ]
  readonly tableRows =[
    {
      id: "GD-047",
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.type-one')),
      client: "Mia Torres",
      statusKey: 'progress',
      status: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.status-progress')),
      progress: "68%",
      bar: 68,
      button: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.progress-button')),
    },
    {
      id: "GD-046",
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.type-two')),
      client: "Carlos Reyes",
      statusKey: 'review',
      status: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.status-review')),
      progress: "100%",
      bar: 100,
      button: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.review-button')),
    },
    {
      id: "GD-045",
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.type-three')),
      client: "Sofía Luna",
      statusKey: 'completed',
      status: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.status-completed')),
      progress: "100%",
      bar: 100,
      button: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.completed-button')),
    },
    {
      id: "GD-048",
      title: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.type-four')),
      client: "Roberto Diaz",
      statusKey: 'pending',
      status: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.status-pending')),
      progress: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.status-awaiting'))(),
      bar: 0,
      button: toSignal<string>(this.translateService.stream('home.demos.demos.dashboard.table.pending-button')),
    }
  ]

  // UI Methods
  getStatusClass(key: string): string {
    const map : Record<string, string> ={
      'progress': 'queue__progress--blue',
      'review': 'queue__progress--yellow',
      'completed': 'queue__progress--green',
      'pending': 'queue__progress--grey'
    };
  return map[key] ?? '';
  }
  
  isProgressBarIsFull(progress: number): boolean{
    return (progress === 100);
  }
}
