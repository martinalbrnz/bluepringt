import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StateCleaner } from './state-cleaner.component'

describe('StateComponentComponent', () => {
  let component: StateCleaner
  let fixture: ComponentFixture<StateCleaner>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StateCleaner]
    })
    fixture = TestBed.createComponent(StateCleaner)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component)
      .toBeTruthy()
  })
})
