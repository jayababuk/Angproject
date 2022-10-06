import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-check-book-by-payment-id',
  templateUrl: './check-book-by-payment-id.component.html',
  styleUrls: ['./check-book-by-payment-id.component.css']
})
export class CheckBookByPaymentIdComponent implements OnInit {
 user= {
   email:"",
   paymentId:""
 }

 checkByPaymentId(){
   this.bookService.checkByPaymentId(this.user);

   
 }
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
