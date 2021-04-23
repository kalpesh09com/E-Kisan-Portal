import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ToasterService } from '../toaster.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup

  phoneNumber:null;
  password:null;

  data: any = [];
  invalidLogin = false;

  

  constructor(private loginservice: AuthenticationService, private userService: UserserviceService, private router: Router,private toastr:ToasterService) { }

  register() {

  
  
    this.userService.login(this.userForm.value).subscribe((res) => {
      this.data = res;
      if (this.loginservice.authenticate(res)) {
       this.toastr.showSuccess("Login Successfull","Welcome "+this.data.name);
       if(this.data.phoneNumber == 8390494995 && this.data.password =="Tonde")
       {
        sessionStorage.setItem('userId',this.data.id);
        sessionStorage.setItem('RoleId',this.data.roleId);
        this.router.navigateByUrl("adminportal");
       }
       else
       {
        this.router.navigate(['']);
       // this.invalidLogin = false
       }
       // this.router.navigate(['']);
        this.invalidLogin = false
      } else {
        this.invalidLogin = true;
      }
    }, (err: HttpErrorResponse) => {
      //alert(err.error.message)
      this.toastr.showError("Please Enter Valid Credentials","");
     // alert("Please Enter Valid Credentials")
    })
    
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      phoneNumber: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
}