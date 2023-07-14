import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment, featureFlags } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  async loadConfig() {
    this.http.get('feature-flags.json')
      .toPromise()
      .then(data => {
        if (data) {
          Object.entries(data)
            .forEach(([key, value]) => {
              featureFlags[key] = value
            })
        }
      })
      .catch(e => console.log(e))
    return this.http.get('config.json')
      .toPromise()
      .then(data => {
        if (data) {
          Object.entries(data)
            .forEach(([key, value]) => {
              environment[key] = value
            })
        }
      })
      .catch(e => console.log(e))

  }
}
