import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import config from '../../config';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(q: string): Observable<string | { answer: string} | any> {
    const options = q 
    ? { params: new HttpParams({ fromString: `q=${q}` }) }
    : {};
    return this.http.get(`${config.apiBaseUrl}/scraper`, options).pipe(
      retry(3),
      catchError(this.handleError) 
    );
  }

  private handleError(error: any) {
    console.error(error);
    return error;
  }

}
