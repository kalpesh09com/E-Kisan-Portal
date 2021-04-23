import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-orderdashboard',
  templateUrl: './orderdashboard.component.html',
  styleUrls: ['./orderdashboard.component.css']
})
export class OrderdashboardComponent implements OnInit {

  constructor(private orderservice: OrderdetailsService) { }

  order:any = []

  getOrderData(){
    this.orderservice.getData().subscribe((res)=>{
      this.order=res;
      console.log(this.order);
    })
  }
  ngOnInit(): void {
    this.getOrderData()
  }
}
