import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('finish', { static: true }) finish!: ElementRef;
  
  people_name: string= '';
  qtd_people: number = 0;
  
  showSection1 = true;
  showSection2 = false;
  showSection3 = false;
  
  activeSection = 1;

  constructor(private modal: NgbModal) {}
  
  ngOnInit(): void {
    AOS.init();
  }

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

  // openVerticallyCentered(content) {
	// 	this.modalService.open(content, { centered: true });
	// }
}
