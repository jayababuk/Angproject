import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  signIn(user: { username: string; password: string; }) {
    return this.http.post(this.BASE_URL+'signin',user);
  }

  BASE_URL="http://3.95.162.87:8011/api/auth/";
  signUp(user: { username: string; password: string; email: string; }) {  
    return this.http.post(this.BASE_URL+"signup",user);
  }
 

  crateUser(user : {name: String,age: number}){
    return this.http.post(this.BASE_URL,user);

  }

  constructor(private http:HttpClient) { }
}
