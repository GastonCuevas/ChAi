import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
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
}