import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AlertItemComponent } from './alert-item/alert-item.component'
import { AlertsService } from './alerts.service'

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    AlertItemComponent,
  ],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  constructor(
    private alertsService: AlertsService,
  ) { }

  alerts = this.alertsService.alerts

  dismiss(id: number) {
    this.alertsService.dismiss(id)
  }
}
