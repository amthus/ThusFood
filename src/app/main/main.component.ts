import { Component } from '@angular/core';
import { BaniereComponent } from './baniere/baniere.component';
import { CategoryComponent } from './category/category.component';
import { SimpleRecipeComponent } from './simple-recipe/simple-recipe.component';
import { ChefComponent } from './chef/chef.component';
import { InstagramComponent } from './instagram/instagram.component';
import { DeliceComponent } from './delice/delice.component';
import { FormuComponent } from './formu/formu.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BaniereComponent, CategoryComponent, SimpleRecipeComponent, ChefComponent, InstagramComponent, DeliceComponent, FormuComponent, HomeComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
