import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AuthGuardService } from './auth-guard.service';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NewsComponent } from './news/news.component';
import { OrderbyuserComponent } from './orderbyuser/orderbyuser.component';
import { OrderdashboardComponent } from './orderdashboard/orderdashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { SetPasswordComponent } from './set-password/set-password.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateorderdetailsComponent } from './updateorderdetails/updateorderdetails.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ViewSpecificProductComponent } from './view-specific-product/view-specific-product.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "viewProductById/:id", component: ViewSpecificProductComponent},
  { path: "userdashboard", component: UserDashboardComponent,canActivate:[AuthGuardService]},
  { path: "register", component: UserRegistrationComponent },
  { path: "updateuser/:id", component: UpdateUserComponent,canActivate:[AuthGuardService]},
  { path: "userprofile", component: UserProfileComponent,canActivate:[AuthGuardService]},

  { path: "orderdashboard", component: OrderdashboardComponent,canActivate:[AuthGuardService]},


{ path: "viewuser/:id", component: ViewuserComponent,canActivate:[AuthGuardService]},

  { path: "productdashboard", component: ProductDashboardComponent,canActivate:[AuthGuardService]},
  { path: "productById/:id", component: ProductDetailsComponent,canActivate:[AuthGuardService]},
  { path: "updateProductById/:id", component: UpdateProductComponent },
  { path: "deleteProductById/:id", component: DeleteProductComponent,canActivate:[AuthGuardService]},
  { path: "saveProductDetails", component: ProductRegistrationComponent,canActivate:[AuthGuardService]},

  { path: "updateOrderStatus/:orderId", component: UpdateorderdetailsComponent,canActivate:[AuthGuardService]},

  { path: "getOrderDataByuserId/:orderId", component: OrderbyuserComponent,canActivate:[AuthGuardService]},


  { path: "login", component: LoginComponent },
  { path: "forgotpass", component: SetPasswordComponent},
  { path: "logout", component: LogoutComponent,canActivate:[AuthGuardService]},
  { path: "weather", component: WeatherComponentComponent },
  { path: "aboutus", component: AboutUsComponent},
  { path: "customerservice", component: CustomerserviceComponent},
  { path: "termscondition", component: TermsConditionsComponent},
  { path: "privacypolicy", component: PrivacyPolicyComponent},

   { path: "adminportal", component: AdminPortalComponent,canActivate:[AuthGuardService]},
   { path: "adminprofile", component: AdminprofileComponent,canActivate:[AuthGuardService]},


  { path: "updateMyCart/:id", component: UpdateCartComponent,canActivate:[AuthGuardService]},
  { path: "myCart", component: MyCartComponent,canActivate:[AuthGuardService]},
  { path: "news", component: NewsComponent},
  { path: "purchase/:id", component: PurchaseComponent,canActivate:[AuthGuardService]},
  {path:"**",component:PageNotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
