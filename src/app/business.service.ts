import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'https://hotel-rating-angular.herokuapp.com/business';
  versionuri = 'https://hotel-rating-angular.herokuapp.com/getversion';

  constructor(private http: HttpClient) { }

  addBusiness(name, place, rating, image) {
    const obj = {
      name: name,
      place: place,
      rating: rating,
      image: image
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

  updateBusiness(name, place, rating, id, total_ratings) {
    const obj = {
        name: name,
        place: place,
        rating: rating,
        total_ratings: total_ratings
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
