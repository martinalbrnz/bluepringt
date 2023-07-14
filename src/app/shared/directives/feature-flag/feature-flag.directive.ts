import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core'
import { FeatureFlagService } from './feature-flag.service'

@Directive({
  selector: '[featureFlag]',
  standalone: true
})
export class FeatureFlagDirective implements OnInit {
  @Input('featureFlag') flagName!: string

  elementRef = inject(ElementRef)
  featureFlagService = inject(FeatureFlagService)

  ngOnInit(): void {
    if (!this.featureFlagService.getFeatureFlagValue(this.flagName)) {
      const element = this.elementRef.nativeElement
      element.parentNode.removeChild(element)
    }
  }
}
