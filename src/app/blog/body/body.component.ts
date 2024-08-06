import { Component, Input, OnInit } from '@angular/core';
import { BodyItemRecipeComponent } from '../body-item-recipe/body-item-recipe.component';
import { CommonModule } from '@angular/common';
import { BodyItemArticleComponent } from '../body-item-article/body-item-article.component';
import { IBlogArticle } from '../../models/blogArticle.interface';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, BodyItemArticleComponent, BodyItemRecipeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  articles: IBlogArticle[] = [
    {
      id: 1,
      title: 'Projets de crochet pour les amateurs de nouilles',
      description:
        'Découvrez des projets de crochet fascinants pour les amateurs de nouilles. Ces créations ajoutent une touche unique à votre collection de projets.',
      cover:
        'https://images.slurrp.com/prod/recipe_images/transcribe/dinner/Canh-bun.webp?impolicy=slurrp-20210601&width=1200&height=675',
      author: 'Jean Dupont',
    },
    {
      id: 2,
      title: 'Défis de crochet pour les passionnés de nouilles',
      description:
        'Des défis passionnants pour les passionnés de crochet qui aiment les nouilles. Apportez de la créativité à vos projets avec ces idées innovantes.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKClV_6mC-wl4BckgWhnKvKDGUKc0CQWQOttUc9GFGAz_EYx09I2qLiTepXf3Rd8ilR74&usqp=CAU',
      author: 'Claire Moreau',
    },
    {
      id: 3,
      title: 'Inspiration crochet pour les amateurs de nouilles',
      description:
        'Inspirez-vous avec ces projets de crochet spécialement conçus pour les amateurs de nouilles. Chaque projet est une œuvre d’art unique.',
      cover:
        'https://5.imimg.com/data5/SELLER/Default/2024/6/425376684/VP/MB/RQ/148640419/kitchen-staff-services-500x500.jpg',
      author: 'Marc Dubois',
    },
    {
      id: 4,
      title: 'Idées créatives de crochet pour les fans de nouilles',
      description:
        'Explorez des idées créatives de crochet pour les fans de nouilles. Ces projets ajoutent une touche amusante et originale à vos créations.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-glyTTATPcNM4WgVAvL1_-6iBrUJpucGH6ooA7nNTrXPyVYvdHLYemtHpqwouHe3e8-w&usqp=CAU',
      author: 'Sophie Martin',
    },
    {
      id: 5,
      title: 'Créations de crochet inspirées par les nouilles',
      description:
        'Créez des pièces uniques de crochet inspirées par les nouilles. Ces projets sont parfaits pour ajouter une touche personnelle à votre collection.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqyM5QapeQt9e2iTBoU2cUHqsz_e08vTBscTtamIE_L687VyfHsKgLAy_WTGuwzxTNpQ&usqp=CAU',
      author: 'Alice Lefebvre',
    },
    {
      id: 6,
      title: 'Les meilleurs projets de crochet pour les passionnés de nouilles',
      description:
        'Découvrez les meilleurs projets de crochet pour les passionnés de nouilles. Chacun de ces projets est conçu pour ravir et inspirer.',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVO0R5A91fi6if-boD7SGO32-AaGqWLZ20NjGIe1madhVbmgz7txvXM_MwS0bMIn3rMQ&usqp=CAU',
      author: 'Léa Girard',
    },
  ];
}