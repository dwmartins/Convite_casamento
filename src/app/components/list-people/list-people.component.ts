import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit{
  qtd_peoples: number = 10;

  notResult: boolean = false;

  ngOnInit(): void {
    AOS.init();
  }
}
