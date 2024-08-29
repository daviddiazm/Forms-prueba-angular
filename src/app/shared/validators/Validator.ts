import { FormControl } from "@angular/forms";

export const cantBeStrider = (control: FormControl) => {
  const value:string = control.value.trim().toString()

  if(value === 'strider') {
    console.log('si entra');

    return { noStride : true }
  }

  return null
}
