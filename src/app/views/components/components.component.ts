import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormFieldComponent } from '@components/form-field/form-field.component'

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    FormFieldComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export default class ComponentsComponent {
  fb = inject(FormBuilder)

  form = this.fb.group({
    normal: ['normal', [Validators.required]],
    errors: ['', [Validators.required, Validators.minLength(10)]],
    number: [23, []],
    date: [Date.now(), []],
    time: [Date.now(), []],
    selecte_one: [null, [Validators.required]],
    select_multiple: [[], [Validators.required]],

  })
}
