import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private productservice: ProductService,
    private router: Router,
    private activatedroute: ActivatedRoute,private toastr:ToasterService) { }
  
  
    product: any = []
    id: any
    form!:FormGroup
  
    deleteData() {
      this.activatedroute.params.subscribe((param) => {
        this.id = param["id"]
        this.productservice.deleteProduct(this.id).subscribe(() => {
          console.log("Product delete Successfully!!!!");
        })
      })
    }
    ngOnInit(): void {
      this.deleteData();
    }
}
