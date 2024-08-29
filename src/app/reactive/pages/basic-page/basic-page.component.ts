import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const producto = {
  name: 'PlayStation 7',
  price: 78790,
  inStorage: 3,
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  // public myFormm: FormGroup = new FormGroup( {
    //   name : new FormGroup('', [] ), para el valor inicial y los validadores
    //   price: new FormGroup(0),
    //   inStorage: new FormGroup(0),
    // })

    constructor( private fb: FormBuilder ){}

    public myForm: FormGroup = this.fb.group({
      name:      ["", [Validators.required, Validators.minLength(3)]], //valor inicial y los validadores entre parentecis
      price:     [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    })

  ngOnInit(): void {
    // this.myForm.reset(producto)
  }

  isNotValid(field: string):boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldErrors(field: string):string | null {
    if(!this.myForm.controls[field]) return null

    let errors = this.myForm.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'

        case 'minlength':
          return `se requiere un minimo de ${errors['minlength'].requiredLength}`
      }
    }
    return null
  }


  onSave():void {
    if(this.myForm.invalid) {
      return
    }
    console.log(this.myForm.value);
    // this.myForm.reset({price: 13})
  }

}
