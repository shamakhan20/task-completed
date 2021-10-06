import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedServiceService } from '../service/shared-service.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private service: SharedServiceService, private _Activatedroute:ActivatedRoute) { 
   
   
  }

 userId
  userDetails
  postDetails
 id
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.userId = params.get('id'); 
  });
    this.service.getUserDetails().subscribe(res => {
      this.userDetails = res
      console.log(this.userId)
      this.postDetails = this.userDetails.filter(x => {
        if (x.userId === parseInt(this.userId)) {
          return [x.title, x.body]
        }
      })
      console.log(this.postDetails)
    })

  }

}
