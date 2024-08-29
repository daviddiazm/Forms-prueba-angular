import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  public newFavorite: FormControl = new FormControl('', [Validators.required])

  // public myForm2: FormGroup = new FormGroup({
  //   name : new FormControl('', [] ),
  //   favoriteGame: new FormArray([])
  // })

  constructor(private fb: FormBuilder) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['lol', Validators.required],
      ['Valorant', Validators.required]
    ])
  })

  get favoriteGames() {
    return this.myForm.controls['favoriteGames'] as FormArray
  }

  isNotValid(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  isNotValidArray(formArray: FormArray, i: number): boolean | null {
    return formArray.controls[i].errors
      && formArray.controls[i].touched
  }

  getFieldErrors(field: string): string | null {
    if (!this.myForm.controls[field]) return null

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


  onDelte(i: number): void {
    if (!this.favoriteGames) return;
    // this.favoriteGames.controls.splice(i,1) cualquiera de los dos sirve
    this.favoriteGames.removeAt(i)
  }

  addFavorite(): void {
    if (this.newFavorite.invalid) return;
    const newGame:string = this.newFavorite.value
    // this.favoriteGames.push( new FormControl(newGame,[Validators.required]) )
    this.favoriteGames.push(this.fb.control(newGame,[Validators.required]))
    this.newFavorite.reset()
  }

  onSumid(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm);
    // console.log('favorite games ',this.favoriteGames.controls[1]);

    // (this.myForm.controls['favoriteGames'] as FormArray).clear()
    // this.myForm.setControl('favoriteGames', new FormArray([]));
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset()
    }



}
