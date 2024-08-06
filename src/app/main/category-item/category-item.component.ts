import { Component, Input } from '@angular/core';
import { ICategory } from '../../models/category.interface';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
  @Input() category?: ICategory;
  constructor() {}
}
