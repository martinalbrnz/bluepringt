import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bluepringt'

  dark = signal(false)

  toggleDark() {
    this.dark.update(mode => !mode)
  }
}
