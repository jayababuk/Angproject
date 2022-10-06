import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-froms',
  templateUrl: './froms.component.html',
  styleUrls: ['./froms.component.css']
})
export class FromsComponent implements OnInit {
  // name:string ="";
  // age:string ="";
  
  user = {
    name: "",
    age:0
  };
 


  save(){
  //  alert(this.name);
  //  alert(this.age);
  const observable =this.userService.crateUser(this.user);
  observable.subscribe(
    (response:any) => {
      alert(response)
    },
    function(error){
      alert("something went wrong please try again")
    }
    )
    
  
 }

    // constructor(){}
   constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
