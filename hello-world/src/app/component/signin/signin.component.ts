import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    "username":"",
     "password":""
  }
  signin(){
    const observable  =  this.userService.signIn(this.user);
    observable.subscribe(
    response=>{
      console.log(response);
      sessionStorage.setItem("credentials",JSON.stringify(response));
      this.router.navigate(['search','createBook']);
      
    },
    error=>{
      console.error("some thing went wrong please try after some time");
    }
    
    )
  }

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

}
