import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  createPDF() {
    window.open("./../../../assets/reports/ChaiReport.pdf", '_blank');
  }
}
