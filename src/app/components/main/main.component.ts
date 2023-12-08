import { Component } from '@angular/core';
import { OverlapComponent } from '../overlap/overlap.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OverlapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
