import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageAuction } from 'src/app/models/auction/message-auction';

@Injectable({
  providedIn: 'root'
})
export class MessageAuctionService {

  constructor(private http: HttpClient) { }

  option = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handlerError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent) {
      console.log("An error ocurred:", error.error.message)
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    return throwError("Something happened with request")
  }

  getMessageByAuctionId(id: Number): Observable<MessageAuction> {
    return this.http.get<MessageAuction>(`http://localhost:8080/messages-auction/auction/${id}`).pipe(retry(2), catchError(this.handlerError))
  }

  createMessageByAuctionId(request: any): Observable<MessageAuction>{
    return this.http.post<MessageAuction>('http://localhost:8080/messages-auction', request).pipe(catchError(this.handlerError))
  }
}
