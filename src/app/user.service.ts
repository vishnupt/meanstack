import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'https://hotel-rating-angular.herokuapp.com/user';
  versionuri = 'https://hotel-rating-angular.herokuapp.com/getversion';

  constructor(private http: HttpClient) { }

  addUser(username, first_name, last_name, email, password, gender, dob) {
    const obj = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      gender: gender,
      dob: dob
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  loginUser(email, password) {
    const obj = { 
      email: email,
      password: password,
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this.http.get(`${this.uri}`);
  }

  getVersion() {
    return this.http.get(`${this.versionuri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(person_name, business_name, business_gst_number, id) {

    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_gst_number: business_gst_number
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
