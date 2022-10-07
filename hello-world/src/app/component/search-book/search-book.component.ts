import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  url:string='/booklist'
  book = {
    catagory:"",
    author:"",
    price:0
  }
  responses:Object={}

  sarchBook(){
    const observable = this.bookService.searchBook(this.book);
    observable.subscribe(response=>{
      //console.log(response);
      this.responses=response;
      //console.log(this.responses);
      this.bookService.sendData(response);
      this.router.navigate(['/booklist'])
      this.bookService.sendData(this.responses);
    },
    error=>{
      console.error("Something is wrong please ");
    }
    )

    // this.router.navigate(['/booklist'], {
    //   state:{data:this.responses}
      
    // });
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
