import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  async loadConfig() {
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

/* Add to app.module.ts
  * Between Importas and module (or a separate file)
  const appInitializerFn = (config: ConfigService) => {
    return () => {
      return config.loadConfig()
    }
  }

  * On Module providers
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFn,
    multi: true,
    deps: [ConfigService]
  }
*/
