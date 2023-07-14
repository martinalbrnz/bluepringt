import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { featureFlags } from 'src/environments/environment'

export interface FeatureFlags {
  [key: string]: boolean
}

/**
 * Get flags on init depending on a server file
 */
@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  #featureFlags = new BehaviorSubject<FeatureFlags>(featureFlags)

  getFeatureFlagValue(flagName: string) {
    return this.#featureFlags.getValue()[flagName]
  }

  setFeatureFlags(featureFlags: FeatureFlags): void {
    this.#featureFlags.next(featureFlags)
  }
}
