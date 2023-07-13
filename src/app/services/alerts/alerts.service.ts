import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export interface Alert {
  id: number
  type: AlertType
  message: string
  duration?: number
}

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info'
}
const defaultDurationInMs = 5000

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  #alerts = new BehaviorSubject<Alert[]>([
    { id: 1, message: 'AAAAAAAAAAA', type: AlertType.Danger },
    { id: 2, message: 'AAAAAAAAAAA', type: AlertType.Info },
    { id: 3, message: 'AAAAAAAAAAA', type: AlertType.Warning },
    { id: 4, message: 'AAAAAAAAAAA', type: AlertType.Success },
  ])

  addAlert(message: string, type: AlertType, duration: number = defaultDurationInMs) {
    const alerts: Alert[] = this.#alerts.getValue()
    const id = alerts.reduce((prev, curr) => {
      return curr.id >= prev ? curr.id + 1 : prev
    }, 1)
    this.#alerts.next([...alerts, { type, message, id }])
    setTimeout(() => {
      this.dismiss(id)
    }, duration)
  }

  get alerts() {
    return this.#alerts.asObservable()
  }

  dismiss(id: number) {
    const filteredAlerts: Alert[] = this.#alerts
      .getValue()
      .filter(alert => alert.id !== id)
    this.#alerts.next(filteredAlerts)
  }
}
