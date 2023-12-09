import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OverlapComponent } from '../overlap/overlap.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { Overlap3Component } from '../overlap3/overlap3.component';
import { Overlap4Component } from '../overlap4/overlap4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OverlapComponent, OurServicesComponent, Overlap3Component, Overlap4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
