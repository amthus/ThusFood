import { Component } from '@angular/core';
import { RecipeBaniereComponent } from './recipe-baniere/recipe-baniere.component';
import { FormuComponent } from '../main/formu/formu.component';
import { DeliceComponent } from '../main/delice/delice.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeBaniereComponent, FormuComponent, DeliceComponent, HomeComponent, FooterComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class recipesComponent {

}
