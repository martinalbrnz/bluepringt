import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FeatureFlagService } from 'src/app/services/feature-flag/feature-flag.service';
import { FeatureFlagDirective } from './feature-flag.directive';

@Component({
  template: `
  <div featureFlag="feature">
  </div>
  `
})
class TestComponent { }

describe('featureFlagDirective', () => {
  let service: FeatureFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureFlagDirective],
      declarations: [TestComponent],
    })
    service = TestBed.inject(FeatureFlagService);
  })

  it('should render component with true flag', () => {
    service.setFeatureFlags({ feature: true })
    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('div')).toBeTruthy()
  })

  it('should not render component with false flag', () => {
    service.setFeatureFlags({ feature: false })
    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('div')).toBeFalsy()
  })

  it('should not render component with undefined flag', () => {
    const fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('div')).toBeFalsy()
  })
})
