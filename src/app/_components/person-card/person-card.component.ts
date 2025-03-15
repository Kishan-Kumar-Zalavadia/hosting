import { Component, Input } from '@angular/core';
import { People } from '../../_model/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() person!: People;

  constructor(private router: Router) {}

  //* ------------------------------------------------------------------------------------------------
  //* redirect to person's website
  redirectToPersonDetails(){
    console.log(this.person.url);
    if (this.person.url) {
      window.open(this.person.url, '_blank');
    }
  }
}
