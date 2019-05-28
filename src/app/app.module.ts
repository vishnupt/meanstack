import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';

import { BusinessService } from './business.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { MyMaterialModule } from  './material.module';
import { RatingComponent } from './rating/rating.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FileSelectDirective, FileUploader, FileDropDirective} from "ng2-file-upload";
import {CustomMaterialModule} from "./rating/material.module";
import {MatSelectModule, MatOptionModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
// import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    RatingComponent,
    FileSelectDirective,
    // FileUploader,
    FileDropDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    CustomMaterialModule,
    RouterModule.forRoot([
      {path: '', component: RatingComponent}
    ]),
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ BusinessService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
