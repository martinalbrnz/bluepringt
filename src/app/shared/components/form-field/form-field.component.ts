import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'bp-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterViewInit {
  @ViewChild('input') comp!: HTMLInputElement

  ngOnInit(): void {
    console.log(this.comp)
  }

  ngAfterViewInit(): void {

    console.log(this.comp)
  }
}
