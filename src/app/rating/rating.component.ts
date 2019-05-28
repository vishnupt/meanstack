import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { BusinessService } from '../business.service';
import Business from '../Business';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  businesses: Business[];
  uploadForm: FormGroup;
  current_rating;
  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  files;
  title: string = 'Angular File Upload';
  business: any = {};

  constructor(private fb: FormBuilder, private http: HttpClient, private bs: BusinessService, 
    private route: ActivatedRoute,
    private router: Router,) { }
  

  uploadSubmit(){
        for (let i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (let j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append( 'dataType', this.uploadForm.controls.type.value);
          // this.uploadFile(data).subscribe(data => alert(data.message));
        }
        this.uploader.clearQueue();
  }

  currentRating(value){
    for(let i=0;i<this.businesses.length; i++){
      if(value==this.businesses[i].name){
        console.log(this.businesses[i]._id);
        this.current_rating = this.businesses[i].rating;
      }
    }    
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
    this.route.params.subscribe(params => {
      this.bs.getBusinesses().subscribe((data: Business[]) => {
        this.businesses = data;
    });
    });
  }

  updateBusiness(name, place, rating, id) {
    for(let i=0;i<this.businesses.length; i++){
      if(name==this.businesses[i].name){
        id = this.businesses[i]._id;
        place = this.businesses[i].place;
      }
    } 
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(name, place, rating, id);
       // this.router.navigate(['business']);
       location.reload()
    });
  }
}