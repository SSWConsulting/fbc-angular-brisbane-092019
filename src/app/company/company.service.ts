import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deleteCompany(company: Company) {
    console.log('Deleting Company');
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`);
  }

  errorHandler(error: Error): Observable<Company[]> {
    console.error('Error caught');
    return new Observable();
  }
}
