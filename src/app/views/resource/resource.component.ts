import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ListContainerComponent } from 'src/app/shared/list-container/list-container.component'

@Component({
  selector: 'bp-resource',
  standalone: true,
  imports: [
    CommonModule,
    ListContainerComponent,
  ],
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export default class ResourceComponent {

}
