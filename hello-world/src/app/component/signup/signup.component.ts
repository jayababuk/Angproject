import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    username: "",
    password:"",
    email:""
  };
 
  signup(){
    const observable = this.userService.signUp(this.user);
    observable.subscribe(
      response=>{
         console.log(response);
         
      },
      error=>{
        console.error("some thing went wrong pelase try a")
      }
      
      
    )
  }

  constructor(private userService:UserService) { }
  //constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
