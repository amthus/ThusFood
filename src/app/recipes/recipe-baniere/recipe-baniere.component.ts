import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-baniere',
  standalone: true,
  imports: [],
  templateUrl: './recipe-baniere.component.html',
  styleUrl: './recipe-baniere.component.scss',
})
export class RecipeBaniereComponent {
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
