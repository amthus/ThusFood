import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baniere',
  standalone: true,
  imports: [],
  templateUrl: './baniere.component.html',
  styleUrl: './baniere.component.scss',
})
export class BaniereComponent {
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
