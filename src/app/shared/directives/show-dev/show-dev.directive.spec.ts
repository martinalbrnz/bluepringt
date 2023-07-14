import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { ShowDevDirective } from './show-dev.directive'
import { ShowDevService } from './show-dev.service'

@Component({
	template: `
  <div *showDev>
  </div>
  `
})
class TestComponent { }

describe('ShowDevDirective', () => {
	let service: ShowDevService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ShowDevDirective],
			declarations: [TestComponent],
		})
		service = TestBed.inject(ShowDevService)
	})

	it('should render component with devMode enabled', () => {
		service.setDevMode()
		const fixture = TestBed.createComponent(TestComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('div'))
			.toBeTruthy()
	})

	it('should not render component with devMode disabled', () => {
		service.unsetDevMode()
		const fixture = TestBed.createComponent(TestComponent)
		fixture.detectChanges()
		const compiled = fixture.nativeElement as HTMLElement
		expect(compiled.querySelector('div'))
			.toBeFalsy()
	})
})
