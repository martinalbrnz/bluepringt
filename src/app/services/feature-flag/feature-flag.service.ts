import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

export interface FeatureFlags {
  [key: string]: boolean
}

/**
 * Should get the feature flags from the server or some other place
 * defaultFeatureFlags are only for testing purposes
 */
@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  #featureFlags = new BehaviorSubject<FeatureFlags>({})

  getFeatureFlagValue(flagName: string) {
    return this.#featureFlags.getValue()[flagName]
  }

  setFeatureFlags(featureFlags: FeatureFlags): void {
    this.#featureFlags.next(featureFlags)
  }
}
