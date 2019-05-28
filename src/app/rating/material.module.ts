import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatIconModule,MatButtonModule, 
    MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule, 
    MatInputModule,MatRadioModule,MatListModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
 
exports: [MatNativeDateModule,FormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ] 
})
 
export  class  CustomMaterialModule { }