import { ResolveFn } from '@angular/router'

export const resourceResolver: ResolveFn<boolean> = (route, state) => {
  return true
}
