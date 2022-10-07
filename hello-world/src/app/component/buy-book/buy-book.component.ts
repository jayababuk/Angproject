import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {
  user={
    username:"",
    email:"",
    bookId:""
  }

  buyBook(){
    const observable= this.bookService.buyBook(this.user);
    observable.subscribe(response=>{
      alert("Successfully Purchased book :");
      console.log(response);
    },
    error=>{
      console.error("Some thing went wrong please try after some time");
    }
    )
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
