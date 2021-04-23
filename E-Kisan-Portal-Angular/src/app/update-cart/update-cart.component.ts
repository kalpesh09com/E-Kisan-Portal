import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ToasterService } from '../toaster.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {

  product: any;
  id: any;
  data: any;
  form!: FormGroup;
  myCart: any;

  constructor(private userservice: UserserviceService, private activatedrouter: ActivatedRoute, 
    private router: Router, private productService: ProductService,private toastr:ToasterService) { }

  update() {
    console.log(this.form.value)

    console.log(this.id);

    this.userservice.updateMyCartProduct(this.id, this.form.value).subscribe((res) => {
      this.toastr.showSuccess("You have sucessfully updated the product details","Updated")
    //  alert("You have sucessfully updated the product details");
      this.router.navigateByUrl("/myCart");
    })
  }


  ngOnInit(): void {
    this.activatedrouter.params.subscribe((param) => {
      this.id = param["id"]

      this.id = param["id"]

      console.log("update id " + this.id);

      this.userservice.getMyCartDataById(this.id).subscribe((data: any) => {

        this.myCart = data
        console.log(this.myCart);

        this.productService.getProductById(this.myCart.productId).subscribe((data: any) => {
          this.product = data
          console.log(this.product);
        })
        this.form = new FormGroup({
          quantity: new FormControl(this.myCart.quantity),
        })
      })
    })
  }
}
