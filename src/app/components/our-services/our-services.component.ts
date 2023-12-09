import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppInfoSectionComponent } from '../app-info-section/app-info-section.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, AppInfoSectionComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})

export class OurServicesComponent {

  cards = [
    { title: 'General Analysis', description: `Unlock the power of our advanced AI tech, meticulously analyzing your products and services to unveil
    untapped potential for enhancements.`},
    { title: 'Easily Attainable Data', description: `Introducing clear and accessible outcomes through reports that spotlight quality enhancements, ensuring
    instant comprehension.`},
    { title: 'Execution', description: `We will guide you through a personalized process tailored to your industry and goals, equipping you with
    essential tools to implement meaningful enhancements`},
    { title: 'Ongoing Monitoring', description: `Improvement never rests. Our platform provides continuous monitoring to assess the impact of implemented
    enhancements`}
  ]
}
