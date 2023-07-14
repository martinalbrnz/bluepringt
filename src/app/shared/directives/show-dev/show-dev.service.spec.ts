import { TestBed } from '@angular/core/testing'

import { ShowDevService } from './show-dev.service'

describe('ShowDevService', () => {
  let service: ShowDevService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ShowDevService)
  })

  it('should be created', () => {
    expect(service)
      .toBeTruthy()
  })
})
