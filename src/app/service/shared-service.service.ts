import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  api_url:"https://jsonplaceholder.typicode.com"

  constructor(private _http: HttpClient) { }

  getUser(){
    return this._http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getUserDetails(){
    return this._http.get(`https://jsonplaceholder.typicode.com/posts`)
  }
  
}

