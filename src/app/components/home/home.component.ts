import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('finish', { static: true }) finish!: ElementRef;
  @ViewChild('error', { static: true }) error!: ElementRef;
  
  people_name: string= '';
  qtd_people: number = 1;
  
  showSection1 = true;
  showSection2 = false;
  showSection3 = false;
  showSection4 = false;
  
  activeSection = 1;

  spinner: boolean = false;

  constructor(private peopleService: PeopleService, private modal: NgbModal) {}
  
  ngOnInit(): void {
    AOS.init();
  }

  showSection(sectionNumber: number) {
    this.activeSection = sectionNumber;
    this.showSection1 = sectionNumber === 1;
    this.showSection2 = sectionNumber === 2;
    this.showSection3 = sectionNumber === 3;
    this.showSection4 = sectionNumber === 4;
  }

  morePeople() {
    this.qtd_people += 1;
  }

  lessPeople() {
    this.qtd_people -= 1;

    if(this.qtd_people <= 1) {
      this.qtd_people = 1
    }
  }

  insertPeople() {
    this.spinner = true;
    this.peopleService.addPeople(this.people_name, this.qtd_people).subscribe((response) => {
      this.spinner = false;
      this.modal.open(this.finish, { centered: true });
    }, (error) => {
      this.modal.open(this.error, { centered: true });
      console.log(`ERRO: ${error}`);
      this.spinner = false;
    })
  }
}
