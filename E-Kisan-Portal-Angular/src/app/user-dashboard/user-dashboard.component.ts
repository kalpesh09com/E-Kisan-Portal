import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { ToasterService } from '../toaster.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: any = [];

  constructor(private router:Router,private userervice: UserserviceService,private toaster:ToasterService) { }

  getUserData() {
    this.userervice.getData().subscribe((res) => {
      this.user = res
      console.log(this.user);
    })
  }

  delete(id: any) {
    this.userervice.deleteData(id).subscribe((res) => {
    
      this.getUserData()
    })
    this.toaster.showSuccess("Data deleted Successfully","");
    this.router.navigateByUrl("adminportal");
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
