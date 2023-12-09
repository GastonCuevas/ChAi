import { Component } from '@angular/core';
import { OverlapComponent } from '../overlap/overlap.component';
import { Overlap3Component }from '../overlap3/overlap3.component';
import { Overlap4Component }from '../overlap4/overlap4.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { OurServicesComponent } from '../our-services/our-services.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OverlapComponent,NavBarComponent,Overlap3Component,Overlap4Component, OurServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  host: {ngSkipHydration: 'true'},
})
export class MainComponent {

}
