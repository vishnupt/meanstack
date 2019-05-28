import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  public file: any;
  public base64image: any;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router) {
    this.file; 
    this.createForm();
    this.base64image;
    
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      place: ['', Validators.required ],
      rating: ['', Validators.required ]
    });
  }


  onFileChanged(event: any) {
    this.file = event.target.files;
  }

  addBusiness(name, place, rating) {
     let me = this;
     let imagefile = this.file[0]
     let reader = new FileReader();
     reader.readAsDataURL(imagefile);
     reader.onload = function () {
        me.base64image = reader.result;
        me.bs.addBusiness(name, place, rating, me.base64image);
     };
    reader.onerror = function (error) {
     console.log('Error: ', error);
    };
    location.reload()    
  }

  ngOnInit() {
  }

}
