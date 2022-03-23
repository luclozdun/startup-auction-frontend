import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Auction } from 'src/app/models/auction/Auction';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  option = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent) {
      console.log("An error ocurred:", error.error.message)
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    return throwError("Something happened with request")
  }

  getListAuction(): Observable<Auction>{
    return this.http.get<Auction>("http://localhost:8080/auctions").pipe(retry(2), catchError(this.handleError));
  }


}
