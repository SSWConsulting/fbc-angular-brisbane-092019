import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      {name: 'Company A', email: 'CompanyA@ssw.com.au', phone: 12345},
      {name: 'Company B', email: 'CompanyB@ssw.com.au', phone: 12345},
      {name: 'Company C', email: 'CompanyC@ssw.com.au', phone: 12345},
    ];
  }

}
