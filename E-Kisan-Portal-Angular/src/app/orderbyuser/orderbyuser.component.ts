import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-orderbyuser',
  templateUrl: './orderbyuser.component.html',
  styleUrls: ['./orderbyuser.component.css']
})
export class OrderbyuserComponent implements OnInit {


  constructor(private orderservice: OrderdetailsService,
    private router: Router,
    private activatedroute: ActivatedRoute
) { }

order:any = []
id: any
form!: FormGroup

getOrderDataByuserId(){
  this.activatedroute.params.subscribe((param) => {
    this.id = param["orderId"]
   // alert(this.id);
    this.orderservice.getDataByOrderId(this.id).subscribe((data) => {
      this.order = data;
      console.log(this.order)
    })
  })
}


  ngOnInit(): void {

    this.getOrderDataByuserId()
  }

}
