import { Component } from '@angular/core';
import { FormuComponent } from '../main/formu/formu.component';
import { DeliceComponent } from '../main/delice/delice.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormuComponent, DeliceComponent, HomeComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  currentDate: Date;
  formattedDate: string;

  constructor() {
    this.currentDate = new Date();
    this.formattedDate = this.formatDate(this.currentDate);
  }

  ngOnInit(): void {}

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('fr-FR', options);
  }
}
