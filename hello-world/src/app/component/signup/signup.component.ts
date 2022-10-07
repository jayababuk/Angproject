import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles:string=""
  user = {
    username: "",
    password:"",
    email:"",
    role:[""]
  };
  validation(){
    let role1
    if(this.roles=="Author"){
         this.user.role=["ROLE_AUTHOR"]
        alert(role1)
    }else if(this.roles=="Author"){
      this.user.role=["ROLE_READER"]
    }
    return this.user.role;
  }
 
  signup(){
    if(this.user.email && this.user.username && this.user.password && this.user.role){
    if(this.roles=="Author"){
      this.user.role=["ROLE_AUTHOR"]
     //alert(this.roles)
 } 
 if(this.roles=="Reader"){
   this.user.role=["ROLE_READER"]
 }
    alert("Successfully Created Account With User Name:"+this.user.username);
    const observable = this.userService.signUp(this.user);
    observable.subscribe(
      response=>{
         console.log(response);
         this.route.navigate(['/signin']);
         
      },
      error=>{
        console.error("some thing went wrong pelase try again")
      }
      
      
      
    )
    }else{
      alert("Field should not be empty")
    }
    
  }

  constructor(private userService:UserService,private route:Router) { }
  //constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
