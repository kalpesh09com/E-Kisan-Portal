import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  constructor(private productservice:ProductService ,private toaster:ToasterService, private router: Router, private httpClient: HttpClient, private activatedrouter: ActivatedRoute) { }

  form!: FormGroup;
  product: any;
  pid: any;
  selectedFile!: File;
  message: any;
  image: any;
  
  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("bro here " + this.selectedFile.name);
    this.form.value.image = this.selectedFile.name;

  }

  //Gets called when the user clicks on submit to upload the image
  update() {
    console.log(this.form.value)

    this.productservice.updateProduct(this.pid, this.form.value).subscribe((res) => {
     this.toaster.showSuccess("You have sucessfully updated the product details","Updated");
      this.router.navigateByUrl("adminportal");
    })
  }

  ngOnInit(): void {

    this.activatedrouter.params.subscribe((param) => {
      this.pid = param["id"]
      this.productservice. getProductById(this.pid).subscribe((data) => {
        this.product = data
        this.form = new FormGroup({
          categoryId:new FormControl(this.product.categoryId),
          prodName:new FormControl(this.product.prodName),
          prodBrand:new FormControl(this.product.prodBrand),
          prodDescription:new FormControl(this.product.prodDescription),
          price:new FormControl(this.product.price),
          offerPrice:new FormControl(this.product.offerPrice),
          prodForm:new FormControl(this.product.prodForm),
          quantity:new FormControl(this.product.quantity),
          expDate:new FormControl(this.product.expDate),
          image:new FormControl(this.product.image),
          sizePack:new FormControl(this.product.sizePack),
          organic:new FormControl(this.product.organic),
          color:new FormControl(this.product.color),
          stateOrigin:new FormControl(this.product.stateOrigin),
          modelNo:new FormControl(this.product.modelNo),
          powerSource:new FormControl(this.product.powerSource)
        })
      })
    })
  }
}
