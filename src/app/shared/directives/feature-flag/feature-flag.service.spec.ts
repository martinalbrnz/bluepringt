import { TestBed } from '@angular/core/testing'
import { FeatureFlagService } from './feature-flag.service'

describe('FeatureFlagService', () => {
  let service: FeatureFlagService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FeatureFlagService)
    service.setFeatureFlags({
      header: true,
      footer: false
    })
  })

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
  })

  it('true flag should get true value', () => {
    expect(service.getFeatureFlagValue('header'))
      .toBeTrue()
  })

  it('changed to false should get false', () => {
    service.setFeatureFlags({ header: false })
    expect(service.getFeatureFlagValue('header'))
      .toBeFalse()
  })

  it('false flag should get false value', () => {
    expect(service.getFeatureFlagValue('footer'))
      .toBeFalse()
  })

  it('changed to true should get true', () => {
    service.setFeatureFlags({ footer: true })
    expect(service.getFeatureFlagValue('footer'))
      .toBeTrue()
  })

  it('undefined flag should get false', () => {
    expect(service.getFeatureFlagValue('nonexistant'))
      .toBeFalsy()
  })
})
