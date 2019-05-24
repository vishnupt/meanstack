import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private bs: UserService) {
  }

  ngOnInit() {
  }

  login(email, password){
    this.bs.loginUser(email, password);
  }

}
