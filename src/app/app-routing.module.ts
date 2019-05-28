import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: GstGetComponent
  },
  {
    path: 'hotel/create',
    component: GstAddComponent
  },
  {
    path: 'hotel/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'register',
    component: RegistrationComponentComponent
  },
  {
    path: 'hotel/rate',
    component: RatingComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
