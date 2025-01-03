import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { RolesComponent } from './roles/roles.component';
import { FormrolComponent } from './roles/formrol.component';

import { UsersComponent } from './users/users.component';
import { FormusuarioComponent } from './users/formusuario.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,

    children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rol', component: RolesComponent },
      { path: 'rol/form', component: FormrolComponent },
      { path: 'rol/form/:idRol', component: FormrolComponent },
      { path: 'user', component: UsersComponent },
      { path: 'user/form', component: FormusuarioComponent },
      { path: 'user/form/:idUser', component: FormusuarioComponent },
      


      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  { path: ' **', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RolesComponent,
    FormrolComponent,
    UsersComponent,
    FormusuarioComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, FormsModule
  ],
  //exports: [RouterModule],
})
export class AdminModule { }