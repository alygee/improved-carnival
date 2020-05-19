import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import mock from './mock';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  host = 'https://api.stackexchange.com';

  constructor(private http: HttpClient) { }

  search(intitle: string) {
    return mock;

    const url = `${this.host}/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=${intitle}`;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  questions() {
    return mock;

    const url = `${this.host}/2.2/questions?order=desc&sort=activity&site=stackoverflow`;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  tagQuestions(tag: string) {
    const url = `${this.host}/2.2/search?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  userHistory(userId) {
    const url = `${this.host}/2.2/users/${userId}/questions?order=desc&sort=activity&site=stackoverflow`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
