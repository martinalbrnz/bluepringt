import { animate, style, transition, trigger } from "@angular/animations"

export const vanish = trigger('vanish', [
	transition(':leave', [
		style({ opacity: 1 }),
		animate('800ms', style({ opacity: 0 }))
	])
])
