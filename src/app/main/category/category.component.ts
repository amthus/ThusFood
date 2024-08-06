import { Component } from '@angular/core';
import { ICategory } from '../../models/category.interface';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from '../category-item/category-item.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categories: ICategory[] = [
    {
      id: 1,
      title: 'Petit-déjeuner',
      cover:
        'https://pbs.twimg.com/profile_images/1755627417140682752/lnQNYS9Y_400x400.jpg',
    },
    {
      id: 2,
      title: 'Végétalien',
      cover:
        'https://img.freepik.com/premium-photo/fresh-lettuce-isolated-white-background_93435-404.jpg?w=740',
    },
    {
      id: 3,
      title: 'Viandes',
      cover:
        'https://fwtx.com/downloads/41341/download/AS-Steak-HT-red.jpg?cb=c70beb47428e8354f00a62584c3a52bc&w=1000&h=',
    },
    {
      id: 4,
      title: 'Dessert',
      cover:
        'https://us.123rf.com/450wm/lukpedclub/lukpedclub2003/lukpedclub200300217/142697161-illustration-vectorielle-de-confiture-de-fraises-ic%C3%B4ne-du-design-plat.jpg?ver=6',
    },
    {
      id: 5,
      title: 'Déjeuner',
      cover:
        'https://media.istockphoto.com/id/157431311/photo/turkey-sandwich.jpg?s=612x612&w=0&k=20&c=uB6byErFAnWxFkkAqMiGNRJGE8r3nqsSDdqrfBE8HOA=',
    },
    {
      id: 6,
      title: 'Chocolat',
      cover:
        'https://img.freepik.com/premium-vector/simple-milk-chocolate-bar-large-size-emoji-food_599062-6930.jpg?w=740',
    }
  ];
}
