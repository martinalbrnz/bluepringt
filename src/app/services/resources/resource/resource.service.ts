import { Injectable, signal } from '@angular/core'
import { Resource } from '@models/resources.model'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  initialValues: Resource[] = [
    { id: 1, label: 'Resource #1', description: 'Descripción genérica', },
    { id: 2, label: 'Resource #1', description: 'Descripción genérica', },
    { id: 3, label: 'Resource #1', description: 'Descripción genérica', },
    { id: 4, label: 'Resource #1', description: 'Descripción genérica', },
    { id: 5, label: 'Resource #1', description: 'Descripción genérica', },
    { id: 6, label: 'Resource #1', description: 'Descripción genérica', },
  ]

  #resources = signal<Resource[]>(this.initialValues)

  get resources() {
    return this.#resources
  }

  setResources(resources: Resource[]) {
    this.#resources.set(resources)
  }
}
