import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private toaster:ToasterService) { }


  authenticate(data:any){
    if(data!=null){
      sessionStorage.setItem('userid' , data.id)
      return true;
    }else{
      return false;
    }
  }

  isUserLogin(){
      let user = sessionStorage.getItem('userid');
      console.log(!(user===null))
      return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('userid');

    this.toaster.showInfo("You have Logged out Successfully","Thank you visit again");
   //alert("Logout Successfull")
  }
  
}
