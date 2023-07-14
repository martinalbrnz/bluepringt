import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core'
import { Subscription } from 'rxjs'
import { ShowDevService } from './show-dev.service'

@Directive({
  selector: '[showDev]',
  standalone: true
})
export class ShowDevDirective implements OnInit, OnDestroy {
  templateRef = inject(TemplateRef<unknown>)
  viewContainer = inject(ViewContainerRef)
  showDevService = inject(ShowDevService)

  sub$ = new Subscription()

  ngOnInit(): void {
    this.sub$.add(
      this.showDevService.devMode.subscribe((isDev: boolean) => {
        if (isDev) this.viewContainer.createEmbeddedView(this.templateRef)
        else this.viewContainer.clear()
      })
    )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
}
