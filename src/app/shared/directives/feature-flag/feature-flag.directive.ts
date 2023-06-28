import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FeatureFlagService } from 'src/app/services/feature-flag/feature-flag.service';

@Directive({
  selector: '[featureFlag]',
  standalone: true
})
export class FeatureFlagDirective implements OnInit {
  @Input('featureFlag') flagName!: string

  constructor(
    private elementRef: ElementRef,
    private featureFlagService: FeatureFlagService,
  ) { }

  ngOnInit(): void {
    if (!this.featureFlagService.getFeatureFlagValue(this.flagName)) {
      const element = this.elementRef.nativeElement;
      element.parentNode.removeChild(element);
    }
  }
}
