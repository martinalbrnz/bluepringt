import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  async loadConfig() {
    this.http
      .get('config.json')
      .pipe(
        map(data => {
          if (data) {
            Object.entries(data)
              .forEach(([key, value]) => {
                environment[key] = value
              })
          }
        }))
  }
}
