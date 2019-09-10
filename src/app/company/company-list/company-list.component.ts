import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor() { }

  ngOnInit() {
    this.companies = [
      {name: 'Company A', email: 'CompanyA@ssw.com.au', phone: 12345},
      {name: 'Company B', email: 'CompanyB@ssw.com.au', phone: 12345},
      {name: 'Company C', email: 'CompanyC@ssw.com.au', phone: 12345},
    ];
  }

}
