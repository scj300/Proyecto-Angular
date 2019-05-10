
import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';
// import 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  name = '';
  people: { Id: number; Name: string; Mail: string; Password: string; Token: string}[] = [];
  selectedPerson = null;

  constructor(private personsService: PersonsService, public router: Router) {}

  ngOnInit(): void {
      /*
    this.personsService.getAllPersons()
      .subscribe(
        (users: {Id: number; Name: string; Mail: string; Password: string; Token: string}[]) => {
          this.people = users;
        },
        (error) => {},
        () => {}
      );
  }

  onPersonSelected(person: {id: number; name: string; age: number; country: string}) {
    this.selectedPerson = person;

       */
  }



}
