import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  product:any = []

  getProductData(){
    this.productservice.getProductData().subscribe((res)=>{
      this.product=res;
      console.log(this.product);
    })
  }
  
  ngOnInit(): void {
    this.getProductData()
  }
}
