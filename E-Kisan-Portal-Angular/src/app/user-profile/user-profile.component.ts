import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { OrderdetailsService } from '../orderdetails.service';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  constructor(private productservice: ProductService, private userservice: UserserviceService, private orderservice: OrderdetailsService, public loginservice: AuthenticationService, private router: Router, private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');

  user: any = [];
  orderDetails: any = [];
  product: any = [];

  msg!: string;
  length: any;

  getUserData() {
    if (this.userid != null) {
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    }
  }

  getOrerDatayUserId() {
    if (this.userid != null) {
      this.orderservice.getDataByUserId(this.userid).subscribe((data) => {
        this.orderDetails = data;

        if (this.orderDetails.length == 0) {


          console.log("length" + this.orderDetails.length)
          this.msg = "You have not ordered any Product yet"
          this.length = this.orderDetails.length;
        } else {
          console.log("length" + this.orderDetails.length)
        }
        console.log(this.orderDetails)
      }, (err: HttpErrorResponse) => {
        //alert(err.error.message)
        //alert("Please Enter Valid Credentials")
        this.msg = "You have not ordered any product yet"
      })


    }

  }


  getProductData() {
    if (this.userid != null) {
      this.productservice.getProductData().subscribe((data) => {
        this.product = data;
        console.log(this.product)
      })
    }
  }

  ngOnInit(): void {
    this.getOrerDatayUserId();
    this.getUserData();
    this.getProductData()
  }
}
