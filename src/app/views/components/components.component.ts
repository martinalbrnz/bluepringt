import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export default class ComponentsComponent { }
