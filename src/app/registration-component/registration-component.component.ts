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
  constructor(private bs: UserService) {
   }

  ngOnInit() {
  }

  register(username, first_name, last_name, email, password, gender, dob){
    this.bs.addUser(username, first_name, last_name, email, password, gender, dob);
  }

}
