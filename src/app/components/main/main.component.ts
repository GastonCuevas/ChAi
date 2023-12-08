import { Component } from '@angular/core';
import { OverlapComponent } from '../overlap/overlap.component';
import { Overlap2Component } from '../overlap2/overlap2.component';
import {Overlap3Component}from '../overlap3/overlap3.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OverlapComponent,NavBarComponent,Overlap2Component,Overlap3Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
