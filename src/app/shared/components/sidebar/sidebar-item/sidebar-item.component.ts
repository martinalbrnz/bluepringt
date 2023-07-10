import { CommonModule } from '@angular/common'
import { Component, Input, signal } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarItem } from '@models/sidebarItems.interface'

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() itemData?: SidebarItem

  openChildren = signal(true)

  toggleOpen() {
    this.openChildren.update(show => !show)
  }

  test1() {
    console.log('Test fallido :(')
  }
}
