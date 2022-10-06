import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-all-purchased-book-by-email',
  templateUrl: './all-purchased-book-by-email.component.html',
  styleUrls: ['./all-purchased-book-by-email.component.css']
})
export class AllPurchasedBookByEmailComponent implements OnInit {
email:string="";

getAllPurchasedBook(){
 const observable= this.bookService.allPurchasedBook(this.email);
 observable.subscribe(response=>{
   console.log(response);
 },
 error=>{
   console.error("something went wrong please try after sometime");
 }
 )
}


  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
