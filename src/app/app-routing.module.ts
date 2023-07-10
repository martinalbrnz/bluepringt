import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{
  path: 'components',
  loadComponent: () => import('@views/components/components.component')
    .then(m => m.ComponentsComponent)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
