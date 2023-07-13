import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { akarCircleAlert, akarCircleCheck, akarCircleX, akarCross } from '@ng-icons/akar-icons'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { fadeInOut } from 'src/app/animations/fade-in-out'
import { Alert, AlertType } from '../alerts.service'

@Component({
  selector: 'app-alert-item',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
  ],
  animations: [fadeInOut],
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
  viewProviders: [provideIcons({ akarCircleCheck, akarCircleAlert, akarCircleX, akarCross })]
})
export class AlertItemComponent {
  @Input() alert!: Alert
  @Output() dismiss: EventEmitter<number> = new EventEmitter<number>()

  AlertType = AlertType

  dismissItem(id: number) {
    this.dismiss.emit(id)
  }
}
