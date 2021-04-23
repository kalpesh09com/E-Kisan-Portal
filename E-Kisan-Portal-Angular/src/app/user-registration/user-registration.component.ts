import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router,
     private httpClient: HttpClient,private toastr:ToasterService) { }

  form!: FormGroup;

  user: any;

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  image: any;

  data: any;

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("bro here " + this.selectedFile.name);
    this.form.value.image = this.selectedFile.name;

  }

  //Gets called when the user clicks on submit to upload the image
  onSubmit() {


   
      if (this.form.value.password != this.form.value.confirmpassword) {
        this.toastr.showError("passwords are not matching","")
     //   alert("passwords are not matching")
     //   this.router.navigateByUrl('/forgot')
      }
      else
      {

    this.userservice.saveUserData(this.form.value).subscribe((res) => {
      this.user = res;
      console.log(this.user);
      console.log(this.user.Images);

      if (this.user != null) {

        this.toastr.showSuccess("You have sucessfully registred","Registration");
       // alert("You have sucessfully registred")
        this.router.navigateByUrl("login");
      }
      else {

        this.toastr.showError("this number is already register","Phone Number : "+this.form.value.phoneNumber );
       // alert(this.form.value.phoneNumber + " number already register");
      }
    })
  }
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      emailId: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      pincode: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      adharNumber: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      roleId: new FormControl(1),
      status: new FormControl("isActive"),
      image: new FormControl('',Validators.required)
    })
  }
}
