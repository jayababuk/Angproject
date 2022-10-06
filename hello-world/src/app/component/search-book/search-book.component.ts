import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  book = {
    catagory:"",
    author:"",
    price:0
  }

  sarchBook(){
    const observable = this.bookService.searchBook(this.book);
    observable.subscribe(response=>{
      console.log(response);
    },
    error=>{
      console.error("Something is wrong please ");
    }
    )
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
