import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';

// const routes: Routes = [
//   {
//     path: 'auth',
//     children: [
//       {path:'sing-up', component: RegisterPageComponent },
//       {path:'**', redirectTo: 'sing-up' },
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: 'sing-up',
    component: RegisterPageComponent
  },
  {
    path: '**',
    redirectTo: 'sing-up'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
