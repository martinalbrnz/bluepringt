import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _http = inject(HttpClient)

  get<T>(endpoint: string): Observable<T> {
    return this._http.get<T>(`${environment.API_URL}/${endpoint}`)
      .pipe()
  }
}
