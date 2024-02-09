import { Subscription } from "rxjs"

export function Unsubscribe(
	target: any,
	methodName: string,
	description: PropertyDescriptor
) {
	const prototype = target.constructor.prototype
	let subscription: Subscription
	const method = description.value
	description.value = function (...args: unknown[]) {
		subscription = method.apply(this, args)
	}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	const onDestroy = prototype.ngOnDestroy ?? (() => { })
	prototype.ngOnDestroy = function () {
		onDestroy.call(this)
		subscription?.unsubscribe?.()
	}
}
