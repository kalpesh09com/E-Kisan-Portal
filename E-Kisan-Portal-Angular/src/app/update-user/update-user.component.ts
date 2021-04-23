import { Component, NgModule,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})


export class UpdateUserComponent implements OnInit {

  constructor(private userservice: UserserviceService,private toater:ToasterService, private router: Router, private httpClient: HttpClient, private activatedrouter: ActivatedRoute) { }

  form!: FormGroup;
  user: any;
  uid: any;
  selectedFile!: File;
  message: any;
  image: any;

  length:any; 
  
  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("bro here " + this.selectedFile.name);
    this.form.value.image = this.selectedFile.name;

  }

  //Gets called when the user clicks on submit to upload the image
  update() {

    console.log(this.form.value)

    this.userservice.updateUserData(this.uid, this.form.value).subscribe((res) => {
     // alert("You have sucessfully updated");
     this.toater.showSuccess("User sucessfully updated","");
      if(sessionStorage.getItem("userId")=="2")
      {
        this.router.navigateByUrl("userdashboard");
      }
      else
      {
      this.router.navigateByUrl("");
      }
    })
  }

  ngOnInit(): void {

   

    
    this.activatedrouter.params.subscribe((param) => {
      this.uid = param["id"]
      this.userservice.getDataById(this.uid).subscribe((data) => {
        
        this.user = data

        this.length= parseInt(sessionStorage.getItem("userId"))
      
        this.form = new FormGroup({

          name: new FormControl(this.user.name),
          emailId: new FormControl(this.user.emailId),
          phoneNumber: new FormControl(this.user.phoneNumber),
          address: new FormControl(this.user.address),
          pincode: new FormControl(this.user.pincode),
          state: new FormControl(this.user.state),
          city: new FormControl(this.user.city),
          adharNumber: new FormControl(this.user.adharNumber),
          dob: new FormControl(this.user.dob),
          password: new FormControl(this.user.password),
          country: new FormControl(this.user.country),
          roleId: new FormControl(1),
          status: new FormControl("Active"),
          image: new FormControl(this.user.image)
        })
      })
    })
  }
}
