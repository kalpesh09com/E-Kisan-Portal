import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {


  constructor(private productservice: ProductService,private toaster:ToasterService, private router: Router, private httpClient: HttpClient) { }

  form!: FormGroup;

  product: any;

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  image: any;
  data: any;


    //Gets called when the user selects an image
    public onFileChanged(event: any) {
      //Select File
      this.selectedFile = event.target.files[0];
      console.log("bro here " + this.selectedFile.name);
      this.form.value.image = this.selectedFile.name;
    }

    
    // changeField()
    // {
    //    var document 
    //     if(this.form.value.categoryId == "2")
    //     {
    //        document.getElementById("prodName").style.visibility="hidden";
    //     }
      
    // }

    onSubmit() {
      
      this.productservice.saveProductDetail(this.form.value).subscribe((res) => {
        this.product = res;
        if (this.product != null) {
          this.toaster.showSuccess("Product registred sucessfully","")
          this.router.navigateByUrl("adminportal");
        }
      })
    }
    
  ngOnInit(): void {
    this.form = new FormGroup({
      categoryId:new FormControl("",Validators.required),
      prodName:new FormControl("",Validators.required),
      prodBrand:new FormControl("",Validators.required),
      prodDescription:new FormControl("",Validators.required),
      price:new FormControl("",Validators.required),
      offerPrice:new FormControl("",Validators.required),
      prodForm:new FormControl("",Validators.required),
      quantity:new FormControl("",Validators.required),
      expDate:new FormControl("",Validators.required),
      image:new FormControl("",Validators.required),
      sizePack:new FormControl("",Validators.required),
      organic:new FormControl("",Validators.required),
      color:new FormControl("",Validators.required),
      stateOrigin:new FormControl("",Validators.required),
      modelNo:new FormControl("",Validators.required),
      powerSource:new FormControl("",Validators.required)


    
    })
  }
}
