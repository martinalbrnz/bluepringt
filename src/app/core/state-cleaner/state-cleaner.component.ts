import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: ''
})
export class StateCleaner implements OnDestroy {
  subscriptions = new Subscription()
  palabra = 'mono'
  no_entiendo = 'No entiendo nada...'

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
