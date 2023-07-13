import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  #isDark = signal(true)

  constructor() {
    this.#isDark.set(
      window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

  get isDark() {
    return this.#isDark
  }

  toggleIsDark() {
    this.#isDark.update(itIs => !itIs)
  }
}
