import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
 
  
  book = {
    "title":"",
    publisher:"",
    content:"",
    catagory:"",
    author:"",
    price:0,
    active:true,
    isBlocked:false    
  }

  
  saveBook(){
    
    const observable= this.bookService.saveBook(this.book);
    observable.subscribe(response=>{
      console.log(response);
    },
    error=>{
      console.error("something went wrong please check it");
    })
  }

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
