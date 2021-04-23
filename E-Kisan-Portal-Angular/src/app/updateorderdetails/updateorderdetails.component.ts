import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-updateorderdetails',
  templateUrl: './updateorderdetails.component.html',
  styleUrls: ['./updateorderdetails.component.css']
})
export class UpdateorderdetailsComponent implements OnInit {


  constructor(private orderservice: OrderdetailsService,
    private router: Router,
    private activatedroute: ActivatedRoute,private toaster:ToasterService) { }

  order:any = []
  id: any
  form!: FormGroup
  orderid:any;
  status1:any;

  // getOrderDataByuserId(){
    
  //   this.activatedroute.params.subscribe((param) => {
  //     this.id = param["userId"]
  //     this.orderservice.getDataByUserId(this.id).subscribe((data) => {
  //       this.order = data;

  //       this.orderid = this.order[0].orderId;
  //       this.status1 = this.order[0].status;
  //       //alert(this.status1)
  //     })
  //   })
  // }


  register()
  { //alert(this.orderid+this.form.value);
    this.orderservice.updateOrderDetails(this.orderid,this.form.value).subscribe((res) => {
      this.toaster.showSuccess("You have sucessfully updated the order details","");
      this.router.navigateByUrl("orderdashboard");
    })
 

  }

  ngOnInit(): void {

   // this.getOrderDataByuserId()


    this.activatedroute.params.subscribe((param) => {
      this.id = param["orderId"]
      this.orderservice.getDataByOrderId(this.id).subscribe((data) => {
        this.order = data;

        this.orderid = this.order.orderId;
        this.status1 = this.order.status;
        //alert(this.status1)
  
    this.form = new FormGroup({
      
     status: new FormControl(this.order.status),
    })

  })
})


  }



}
