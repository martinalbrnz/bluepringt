import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlertItemComponent } from './alert-item.component'

describe('AlertItemComponent', () => {
  let component: AlertItemComponent
  let fixture: ComponentFixture<AlertItemComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlertItemComponent]
    })
    fixture = TestBed.createComponent(AlertItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component)
      .toBeTruthy()
  })
})
