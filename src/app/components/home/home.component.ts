import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    AOS.init();
  }
  people_name: string= '';
  qtd_people: number = 0;

  showSection1 = true;
  showSection2 = false;
  showSection3 = false;

  activeSection = 1;

  showSection(sectionNumber: number) {
    this.activeSection = sectionNumber;
    this.showSection1 = sectionNumber === 1;
    this.showSection2 = sectionNumber === 2;
    this.showSection3 = sectionNumber === 3;
  }

  morePeople() {
    this.qtd_people += 1;
  }

  lessPeople() {
    this.qtd_people -= 1;
  }
}
