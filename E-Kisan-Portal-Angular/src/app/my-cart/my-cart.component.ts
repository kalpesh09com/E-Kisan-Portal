import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  userId: any = sessionStorage.getItem('userid');
  mycartdata: any;
  //productData!:any[];
  form!: FormGroup;

  productData: any;

  product: any;
  i: any;
  k: any;
  totalprice: any;
  price: any;
  mycart: any;
  quantity: any
  prodDataArray!: any[];
  msg: any;
  length: any;

  deleteid:any;

  element: any;

  constructor(private dataservice: UserserviceService, private productservice: ProductService, private mycartservice: UserserviceService,
    private router: Router, private toastr: ToasterService) { }

  grtOrderdata() {
    this.dataservice.getMyCartDataByUserId(this.userId).subscribe((data) => {
      this.mycartdata = data
      console.log("length" + this.mycartdata.length);
      console.log(this.mycartdata);

      if (this.mycartdata.length == 0) {
        this.msg = "You have not added any product into the cart "
      }
      this.length = this.mycartdata.length;

      sessionStorage.setItem('badge', this.mycartdata.length);

    })
  }

  delete(id: any) {
    console.log("delete id" + id);
    this.mycartservice.deleteMyCartProduct(id).subscribe((res) => {

    })


    location.reload();
    this.toastr.showInfo("product removed from the cart", "");
    // alert("product removed from the cart");

  }

  getId(deleteId:any,qnt:any)
  { 
   // alert(deleteId);
     sessionStorage.setItem("deleteId",deleteId);
     sessionStorage.setItem('quantity',qnt);
     
  }

  ngOnInit(): void {
    this.grtOrderdata();
  }

}
