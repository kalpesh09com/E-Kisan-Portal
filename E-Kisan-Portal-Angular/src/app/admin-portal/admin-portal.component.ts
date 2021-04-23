import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  user: any = [];

  constructor(private userervice: UserserviceService) { }

  getUserData() {
    this.userervice.getData().subscribe((res) => {
      this.user = res
      console.log(this.user);
    })
  }

  ngOnInit(): void {
  }

}
