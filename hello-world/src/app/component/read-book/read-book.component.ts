import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {
  user = {
    email:"",
    bookId:""
  }
  readBook(){
    //alert("this user bookId::"+this.user.bookId+"BookId::::  "+this.user.email);
    const observable= this.bookService.readBook(this.user);
    observable.subscribe(response=>{
      console.log(response);
    },
    error=>{
      console.error("something went wrong plase try after some time");
    }
    )
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
