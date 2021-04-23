import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productservice: ProductService,
    private router: Router,
    private activatedroute: ActivatedRoute) { }


  product: any = []
  id: any
  form!: FormGroup

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

    this.form = new FormGroup({
      id: new FormControl(this.id)
    })
  }
}
