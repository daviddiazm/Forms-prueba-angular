import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/Validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './registerPage.component.html',
})
export class RegisterPageComponent {

  constructor ( private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    name:      ['', [Validators.required]],
    email:     ['', [Validators.required]],
    userName:  ['', [Validators.required, cantBeStrider], []],
    password:  ['', [Validators.required, Validators.minLength(3)]],
    password2: ['', [Validators.required]],
  })


  onSave() {
    this.myForm.markAllAsTouched()
  }

}
