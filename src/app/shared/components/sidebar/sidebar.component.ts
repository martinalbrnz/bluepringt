import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { SidebarItem } from '@models/sidebarItems.interface'
import { navRoutesMock } from './mock/sidebar-mock'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component'

@Component({
  selector: 'bp-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarItemComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarItems: SidebarItem[] = navRoutesMock
  @Input() alignment: 'start' | 'between' | 'end' = 'start'
}
