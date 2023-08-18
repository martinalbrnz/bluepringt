import { TestBed } from '@angular/core/testing'
import { ResolveFn } from '@angular/router'

import { resourceResolver } from './resource.resolver'

describe('resourceResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => resourceResolver(...resolverParameters))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(executeResolver)
      .toBeTruthy()
  })
})
