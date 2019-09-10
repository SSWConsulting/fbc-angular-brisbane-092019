import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadCompanies();
  }

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  loadCompanies() {
    this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    ).subscribe(c => this.companies$.next(c));
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  deleteCompany(company: Company) {
    console.log('Deleting Company');
    this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`)
    .subscribe(c => this.loadCompanies());
  }

  errorHandler(error: Error): Observable<Company[]> {
    console.error('Error caught');
    return new Observable();
  }
}
