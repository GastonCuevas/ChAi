import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }
  @Output() showModal = new EventEmitter<void>();

  navigationOptions= [
    { id: '', description: 'Home' },
    { id: 'services', description: 'Our Services' },
    { id: 'about-us', description: 'About Us' },
    { id: 'subscribe-us', description: 'Suscribe Us' }
  ];

  toggleModal() {
    this.showModal.emit();
  }

  createPDF() {
    window.open("./../../../assets/reports/ChaiReport.pdf", '_blank');
  }

  inBusiness() {
    // console.log(this.document.location.href);
    return "http://localhost:4200/business" == this.document.location.href;
  }
}