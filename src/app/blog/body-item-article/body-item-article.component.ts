import {Input, Component } from '@angular/core';
import { IBlogArticle } from '../../models/blogArticle.interface';

@Component({
  selector: 'app-body-item-article',
  standalone: true,
  imports: [],
  templateUrl: './body-item-article.component.html',
  styleUrl: './body-item-article.component.scss'
})
export class BodyItemArticleComponent {
  @Input() article?: IBlogArticle;

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
