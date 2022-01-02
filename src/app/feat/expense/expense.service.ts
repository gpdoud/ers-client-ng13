import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInitService } from 'src/app/app-init.service';
import { Expense } from './expense.class';

const headers = new HttpHeaders( {"x-ers-api-key": "XERSAPIKEY"} );

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
baseurl: string = `${this.init.config.baseurl}/api/expenses`;

constructor(
    protected init: AppInitService,
    private http: HttpClient
  ) {
  }

  list(): Observable<Expense[]> {
    return this.http.get(`${this.baseurl}`, { headers: headers }) as Observable<Expense[]>;
  }
  // get(id: number): Observable<Expense> {
  //   return this.http.get(`${this.baseurl}/${id}`, this.headers) as Observable<Expense>;
  // }
  // create(expense: Expense): Observable<Expense> {
  //   return this.http.post(`${this.baseurl}`, expense, this.headers) as Observable<Expense>;
  // }
  // change(expense: Expense): Observable<any> {
  //   return this.http.post(`${this.baseurl}/${expense.id}`, expense, this.headers) as Observable<any>;
  // }
  // remove(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseurl}/${id}`, this.headers) as Observable<any>;
  // }
}
