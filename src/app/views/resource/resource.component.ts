import { CommonModule } from '@angular/common'
import { Component, WritableSignal, inject } from '@angular/core'
import { Resource } from '@models/resources.model'
import { ResourceService } from '@services/resources/resource/resource.service'
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
  resourcesService = inject(ResourceService)

  resources: WritableSignal<Resource[]> = this.resourcesService.resources
}
