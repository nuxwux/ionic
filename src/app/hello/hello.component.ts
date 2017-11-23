import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  people: PEOPLE;

  constructor() {

   }

  ngOnInit() {
  }

}
