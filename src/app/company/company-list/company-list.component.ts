import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  // companies: Company[];
  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();
      // .subscribe(
      //   next => this.companies = next,
      //   error => console.log('ERROR', error),
      //   () => console.log('Complete')
      //   );

  }

}
