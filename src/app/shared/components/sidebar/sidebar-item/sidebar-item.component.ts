import { transition, trigger, useAnimation } from '@angular/animations'
import { CommonModule } from '@angular/common'
import { Component, Input, signal } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarItem } from '@models/sidebarItems.interface'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { featherChevronRight } from '@ng-icons/feather-icons'
import { growDown, shrinkUp } from 'src/app/animations/slide'

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
  ],
  viewProviders: [
    provideIcons({ featherChevronRight })
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  animations: [
    trigger('grow', [
      transition(':enter', [
        useAnimation(growDown, {
          params: {
            time: '300ms'
          }
        }),
      ]),
      transition(':leave', [
        useAnimation(shrinkUp, {
          params: {
            time: '300ms'
          }
        }),
      ]),
    ])
  ]
})
export class SidebarItemComponent {
  @Input() itemData?: SidebarItem

  openChildren = signal(false)

  toggleOpen() {
    this.openChildren.update(show => !show)
  }
}
