import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userservice:UserserviceService, public loginservice :AuthenticationService) { }
  user:any =[];
  userid = sessionStorage.getItem('userid');

  badge:any = sessionStorage.getItem('badge'); 
  getUserData(){
    console.log(this.userid)
    if(this.userid!=null){
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    }
 }

 ngOnInit(): void {
   if(this.userid!=null){
     this.getUserData()
   }
 }
}
