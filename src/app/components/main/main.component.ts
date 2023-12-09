import { Component } from '@angular/core';
import { OverlapComponent } from '../overlap/overlap.component';
import { Overlap3Component }from '../overlap3/overlap3.component';
import { Overlap4Component }from '../overlap4/overlap4.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from '../our-services/our-services.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OverlapComponent,NavBarComponent,OurServicesComponent,Overlap3Component,Overlap4Component,NavBarComponent,CommonModule, RouterOutlet, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  host: {ngSkipHydration: 'true'},
})
export class MainComponent {
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
