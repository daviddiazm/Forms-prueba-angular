import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {

  public persona = {
    gender: 'M',
    wantNotification: false
  }

  constructor ( private fb: FormBuilder )  {}

  ngOnInit(): void {
    this.myForm.reset(this.persona)
  }

  public myForm: FormGroup = this.fb.group({
    gender            : ['', [Validators.required]],
    wantNotification  : [true, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]]
  })

  isNotValid (field:string ): Boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError ( field: string ):string | null {
    if( !this.myForm.controls[field].errors ) return null
    let errors = this.myForm.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Se tienen que rellenar todos los campos'
          break;
        default:
          break;
      }
    }
    return null
  }


  onSave(): void {

    if(this.myForm.invalid) {
      console.log('es invalido');
      this.myForm.markAllAsTouched()
      return
    }

    const {termsAndConditions, ...newPerson } = this.myForm.value

    console.log(newPerson);

  }

}
