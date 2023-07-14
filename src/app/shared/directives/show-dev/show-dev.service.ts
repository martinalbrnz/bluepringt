import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShowDevService {

  #devMode = new BehaviorSubject<boolean>(localStorage.getItem('dev') === 'isDev')

  get devMode(): Observable<boolean> {
    return this.#devMode.asObservable()
  }

  setDevMode() {
    this.#devMode.next(true)
  }

  unsetDevMode() {
    this.#devMode.next(false)
  }
}
