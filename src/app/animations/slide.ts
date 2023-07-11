import { animate, animation, state, style, transition, trigger } from "@angular/animations"

export const growDown = animation([
	style({
		height: '0px'
	}),
	animate(
		'{{ time }} ease-out',
		style({
			height: '*'
		})
	)
])

export const shrinkUp = animation([
	style({
		height: '*'
	}),
	animate(
		'{{ time }} cubic-bezier(1,.03,.61,.85)',
		style({
			height: '1px'
		})
	)
])

export const slideRTL = trigger('slide-rtl', [
	state('in', style({ transform: 'translateX(0)' })),
	transition('void => *', [
		style({ transform: 'translateX(-100%)' }),
		animate(100)
	]),
	transition('* => void', [
		animate(100, style({ transform: 'translateX(100%)' }))
	])
])
