import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';
import { People } from 'src/app/models/People';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit{
  qtd_peoples: number = 0;
  list_peoples: People[] = [];

  notResult: boolean = false;
  loadList: boolean = false;

  constructor(private peopleService: PeopleService, private modal: NgbModal) {}

  ngOnInit(): void {
    AOS.init();
    this.getListPeople()
  }

  getListPeople() {
    this.loadList = true;
    this.peopleService.getPeoples().subscribe((response) => {
      this.list_peoples = response;
      this.loadList = false;

      for(const item of this.list_peoples) {
        if (item.pe_qtd_convidados && !isNaN(item.pe_qtd_convidados)) {
          this.qtd_peoples += Number(item.pe_qtd_convidados);
        }
      }

      if(!this.list_peoples.length) {
        this.notResult = true;
      }
    }, (error) => {
      this.loadList = false;
      this.notResult = true;
      alert('Erro ao buscar os convidados')
      console.log(`ERRO: ${error}`);
    })
  }
}
