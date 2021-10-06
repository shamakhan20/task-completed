import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private service: SharedServiceService, private router: Router) { }
   userDetails;
   searchText;
   userId
  ngOnInit() {
    this.getUser()
  }
  getUser(){
    this.service.getUser().subscribe(res =>{
      this.userDetails = res
    })
  }

}
