import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { SidebarComponent } from '@components/sidebar/sidebar.component'

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
  ],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export default class ComponentsComponent {

}
