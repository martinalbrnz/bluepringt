import { TestBed } from '@angular/core/testing'

import { AppModule } from 'src/app/app.module'
import { ConfigService } from './config.service'

describe('ConfigService', () => {
  let service: ConfigService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    service = TestBed.inject(ConfigService)
  })

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
  })
})
