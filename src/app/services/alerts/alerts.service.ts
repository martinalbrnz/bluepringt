import { Injectable, signal } from '@angular/core'

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
  #alerts = signal<Alert[]>([])

  addAlert(message: string, type: AlertType, duration: number = defaultDurationInMs) {
    const id = this.#alerts()
      .reduce((prev, curr) => curr.id >= prev ? curr.id + 1 : prev, 1)
    this.#alerts.update(alerts => [...alerts, { type, message, id }])
    setTimeout(() => {
      this.dismiss(id)
    }, duration)
  }

  get alerts() {
    return this.#alerts
  }

  dismiss(id: number) {
    this.#alerts.update(alerts => alerts.filter(alert => alert.id !== id))
  }
}
