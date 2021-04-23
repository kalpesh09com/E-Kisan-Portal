import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {


  constructor(private productservice: ProductService,
    private oderservice: OrderdetailsService,
    private router: Router,private mycartservice:UserserviceService,
    private activatedroute: ActivatedRoute,private toaster:ToasterService) { }

  orderd: any;
  purchaseForm: any;
  orderdetails: any;
  userid: any = sessionStorage.getItem('userid');;

  quantity:any = sessionStorage.getItem('quantity');

  deleteId :any = sessionStorage.getItem('deleteId');
  
  total!: number
  product: any = []
  order: any = []
  id: any
  form!: FormGroup
  qnt:any;


  onSubmit() {
    if(this.userid != null )
    {

      if(this.purchaseForm.value.userName != "" && this.purchaseForm.value.country != "")
      {
    this.oderservice.saveData(this.purchaseForm.value).subscribe((res) => {
      this.order = res;
      if (this.order != null) {

        this.toaster.showInfo("Order Placed sucessfully","")


        if(this.deleteId != "0")
        {

         // alert(this.deleteId);

          sessionStorage.setItem('deleteId',"0");

         // alert("hi"+sessionStorage.getItem('deleteId'))

        this.mycartservice.deleteMyCartProduct(this.deleteId).subscribe((res) => {
       

        
          this.toaster.showInfo("product removed from the cart", "");
         
        })
    
    
       // location.reload();
   

      }

       // alert("Order Place sucessfully ")
        this.router.navigateByUrl("userprofile");
      }
    })
  }
  else{
    this.toaster.showInfo("Fill the required fields","")
  }

  }
  else
  {
    this.toaster.showInfo("Please login first to place order","Login")
    this.router.navigateByUrl("login");
  }

  }



  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
     
      this.productservice.getProductById(this.id).subscribe((data) => {
        this.product = data;
        console.log(this.product)

      })
    })
  }


  ngOnInit(): void {
    this.getData();
    this.purchaseForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      phoneno: new FormControl('',Validators.required),
      address: new FormControl(""),
      quantity: new FormControl(this.quantity),
      orderDate: new FormControl(""),
      country: new FormControl(""),
      state: new FormControl(""),
      city: new FormControl(""),
      zip: new FormControl(""),
      status:new FormControl("order Placed"),
      productId : new FormControl(this.id),
      userId : new FormControl(this.userid)
    })
  }

}
