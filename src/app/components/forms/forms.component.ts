import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
user = {
  name: "",
  age: 0
}
  save(){
    //console.log(this.name);
   // console.log(this.age)
   const observable = this.userService.createuser(this.user);
   observable.subscribe(
     (response:any) =>{
       console.log(response);
     },
     function (error) {
       alert("something went wrong please try again")
     }
   )
      }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
