import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveModule } from '../reactive/reactive.module';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
