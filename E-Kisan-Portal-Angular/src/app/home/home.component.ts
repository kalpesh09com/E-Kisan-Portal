import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  product:any=[]

  constructor(private productService:ProductService) { }

  
  // // on component load 
  ngOnInit(): void {
    this.productService.getProductData().subscribe(res=>{
      console.log("product received");
      this.product=res;
      console.log(this.product);
      })

      window.scrollTo(0,0);
  }

}
