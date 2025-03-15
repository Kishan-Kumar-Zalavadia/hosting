import { Component } from '@angular/core';
import { PEOPLE } from '../../_DATA/people-data';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  people = PEOPLE;
  constructor() {
    this.people.sort((a, b) => a.id - b.id);
  }
}
