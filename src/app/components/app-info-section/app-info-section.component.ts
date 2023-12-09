import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-info-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-info-section.component.html',
  styleUrl: './app-info-section.component.css'
})
export class AppInfoSectionComponent {
  @Input() title:string = '';
  @Input() description: string = '';
}
