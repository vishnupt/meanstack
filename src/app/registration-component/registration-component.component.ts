import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  regForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: UserService) {
    this.createForm();
   }

   createForm(){
    this.regForm = this.fb.group({
      first_name: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    })
   }

  ngOnInit() {
  }

  register(first_name, last_name, email, password, gender, dob){
    this.bs.addUser(first_name, last_name, email, password, gender, dob);
  }

}
