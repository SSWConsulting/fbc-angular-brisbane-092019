import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  company: Company;
  isNewCompany: boolean;
  companyId: number;
  companyForm: FormGroup;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = !this.companyId;

    this.buildForm();

    if (!this.isNewCompany) {
      this.getCompany();
    }
   }

  getCompany(): void {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => {
        this.companyForm.patchValue(company);
      });
  }


  buildForm(): void {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['xxxx@ssw.com.au', Validators.email],
      phone: '',
    });
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value);
    } else {
      const newCompany = {...this.companyForm.value, id: this.companyId };
      this.companyService.updateCompany(newCompany);
    }
    this.router.navigateByUrl('/company/list');
  }

}
