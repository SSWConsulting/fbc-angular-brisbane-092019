import { Component } from '@angular/core';


@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebootcamp-crm: Brisbane';
  myDate = new Date();
  // titleChanged(e) {
  //   this.title = e.target.value;
  // }

}
