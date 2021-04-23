import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {


  user: any = [];
  id: any
  form!: FormGroup

  number: any = sessionStorage.getItem('userId');
  constructor(private userservice: UserserviceService, private router: Router,
    private activatedroute: ActivatedRoute) { }

  getData() {

    this.userservice.getDataById(this.number).subscribe((data: any) => {
      this.user = data
      console.log(this.user)
    })

  }

  ngOnInit(): void {

    this.getData();

  }
}
