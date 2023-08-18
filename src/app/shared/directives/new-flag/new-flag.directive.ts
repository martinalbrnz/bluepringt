import { Directive, ElementRef, Renderer2, inject } from '@angular/core'

@Directive({
  selector: '[bpNew]',
  standalone: true
})
export class NewFlagDirective {
  el = inject(ElementRef)
  renderer = inject(Renderer2)

  ngOnInit(): void {
    const badgeElement = document.createElement('div')
    const badgeText = document.createElement('span')
    badgeElement.classList.add('animate-beat', 'new-badge')
    badgeText.innerHTML = 'Nuevo'
    badgeElement.appendChild(badgeText)
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative')
    this.el.nativeElement.appendChild(badgeElement)
  }

}
