import { Component, Input, OnInit } from '@angular/core';
import { IsimpleRecipe } from '../../models/simpleRecipe.interface';

@Component({
  selector: 'app-simple-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './simple-recipe-item.component.html',
  styleUrl: './simple-recipe-item.component.scss',
})
export class SimpleRecipeItemComponent implements OnInit {
  @Input() simplerecipe?: IsimpleRecipe;
  constructor() {}

  isLiked: boolean = false; // Variable pour stocker l'état "aimé" ou non
  ngOnInit(): void {}

  toggleLike() {
    this.isLiked = !this.isLiked;
    const heart = document.getElementById('heart');
    if (heart) {
      heart.classList.toggle('fa-solid fa-heart', this.isLiked);
      if (this.isLiked) {
        heart.style.color = 'red';
      } else {
        heart.style.color = '';
      }
    }
  }
}
