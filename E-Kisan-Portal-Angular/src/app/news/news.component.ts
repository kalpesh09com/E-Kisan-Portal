import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  term:any;

  data:any;

  topheadingdispaly : any = [];

  ngOnInit(): void {

    this.productservice.news().subscribe((res)=>{

      this.data = res;
  
      console.log(this.data)
  
        this.topheadingdispaly = this.data.articles;

      })
  }

}
