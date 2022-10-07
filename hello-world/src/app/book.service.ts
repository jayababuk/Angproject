import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//3.92.48.122
//const URL = 'http://localhost:8011/api/book/';
const URL = 'http://3.95.162.87:8011/api/book/';

const credential = sessionStorage.getItem("credentials");
const token:any = JSON.parse(credential || '{}')['accessToken'];
@Injectable({
  providedIn: 'root'
})
export class BookService {
  updateBook(book: { bookId: string; title: string; publisher: string; content: string; catagory: string; author: string; price: number; isBlocked: boolean; }) {
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['accessToken'];
    console.log(book);
    const res= this.http.put(URL+'updateBook',book,{
      headers:{
        Authorization: 'Bearer ' + token

      }
    });
    console.log(res);
    return res;
  }
  // updateBook1(book: any) {
  //   const credential = sessionStorage.getItem("credentials");
  //   const token:any = JSON.parse(credential || '{}')['accessToken'];
  //   return this.http.post(URL+'updateBook',book,{
  //     headers:{
  //       Authorization: 'Bearer ' + token

  //     }
  //   });
  // }
  
  searchData$: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([{}]);
  sendData(responses: Object) {
    this.searchData$.next([responses])
  }
  getData(){
    return this.searchData$.asObservable();
  }
  
  checkByPaymentId(user: { email: string; paymentId: string; }) {
    return this.http.get(URL+'readers/'+user.email+'/books/'+user.paymentId,{
      headers:{
        Authorization:'Bearer '+token
      }
    });
  }
  readBook(user: { email: string; bookId: string; }) {
    return this.http.get(URL+'readers/'+user.email+'/books/'+user.bookId,{
      headers:{
        Authorization:'Bearer '+token
      }
    });
  }
  buyBook(user: { username: string; email: string; bookId: string; }) {
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['accessToken'];
    return this.http.post(URL+'buyBooks',user,{
      headers:{
        Authorization: 'Bearer ' + token

      }
    });
  }
  

  allPurchasedBook(email: string) {
    return this.http.get(URL+'allPurchasedBooks/'+email,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    }
 
  searchBook(book: { catagory: string; author: string; price: number; }) {
    
    const credential = sessionStorage.getItem("credentials");
    const token:any = JSON.parse(credential || '{}')['accessToken'];
    return this.http.get(URL+'searchBooks'+'?catagory='+book.catagory+'&author='+book.author+'&price='+book.price,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  saveBook(book: { title: string; publisher: string; content: string; catagory: string; author: string; price: number; active: boolean; isBlocked: boolean;}) {
    const credential = sessionStorage.getItem("credentials");
    const token:any =JSON.parse(credential ||'{}')['accessToken'];
    return this.http.post(URL+'createBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  // saveBook(book: { title: string; }) {
  //   const credential = sessionStorage.getItem("credentials");
  //   const token:any =JSON.parse(credential ||'{}')['accessToken'];
  //   return this.http.post(URL+'createBook', book, {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   })
  // }


//   sendData(data){
//  this.searchData=data;
 
//   }
// getData(){
//   return this.da
// }
  
  

  
  
  

  constructor(private http:HttpClient) { }
}
