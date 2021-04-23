import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {


  constructor(private userservice: UserserviceService,
    private router: Router,
    private activatedroute: ActivatedRoute) { }


  user: any = []
  id: any
  form!: FormGroup

  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.userservice.getDataById(this.id).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    })
  }

  ngOnInit(): void {

    this.getData();

    this.form = new FormGroup({
      id: new FormControl(this.id)
    })
  }

}
