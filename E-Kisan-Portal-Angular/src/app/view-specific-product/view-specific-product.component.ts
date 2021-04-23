import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { ToasterService } from '../toaster.service';


@Component({
  selector: 'app-view-specific-product',
  templateUrl: './view-specific-product.component.html',
  styleUrls: ['./view-specific-product.component.css']
})
export class ViewSpecificProductComponent implements OnInit {

  constructor(private productservice: ProductService,
    private router: Router, private toastr: ToasterService,
    private activatedroute: ActivatedRoute, private userservice: UserserviceService) { }

  product: any = []
  id: any
  form!: FormGroup
  mycart: any;
  data: any = [];
  productId: any;
  prodName: any;
  price: any;
  qnt: any;
  i: any;
  val: any;

  userId: any = sessionStorage.getItem('userid');


  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]

      this.val = this.id;

      this.productservice.getProductById(this.id).subscribe((data) => {
        this.product = data;
        this.product.quantity = this.qnt;
        console.log(this.product)

      })
    })
  }

  saveInMyCart(productId: any, prodName: any, price: any, image: any) {


    if (this.userId > 0) {

      this.userservice.getMyCartDataByUserId(this.userId).subscribe((data) => {
        this.product = data;
        console.log(this.product)

        for (this.i = 0; this.i < this.product.length; this.i++) {
          if (this.product[this.i].productId == this.val) {

            this.qnt = 1;

            console.log("qntityyyyy" + this.qnt)

          }
        }

        if (this.qnt == 1) {
          this.toastr.showInfo("this product already in the cart", "")
          //alert("this product already in the cart");
          this.router.navigateByUrl("myCart");
        }
        else {

          if (this.form.value.quantity > 0) {
            var data1 = {
              productId: productId,
              prodName: prodName,
              price: price,
              userId: this.userId,
              quantity: this.form.value.quantity,
              image: image,
            };

            console.log("prodId" + productId + " name" + prodName + " Price" + price + " Quantity" + this.form.value.quantity + " image" + image);

            this.userservice.saveMyCartProductDetail(data1).subscribe((res) => {
              this.mycart = res;
              console.log(this.mycart);
            })

            this.toastr.showSuccess("product added to the cart successfully", "")
            // alert("product added to the cart successfully");
            this.router.navigateByUrl("myCart");
          }
          else {
          
              setTimeout(function () {
                
                location.reload(true);
              }, 1000);
          
            this.toastr.showInfo("please enter the quantity", "")
            //alert("please enter the quantity");

          }

        }
      })

    }
    else {
      this.toastr.showInfo("Please login", "")
      // alert("please login");
    }
  }

  getQnt() {

    this.qnt = this.form.value.quantity;
    sessionStorage.setItem('quantity', this.qnt)
    console.log(this.qnt);


  }

  ngOnInit(): void {
    this.getData();
    this.form = new FormGroup({
      id: new FormControl(this.id),
      quantity: new FormControl(""),

    })
    window.scrollTo(0, 0);
  }
}


