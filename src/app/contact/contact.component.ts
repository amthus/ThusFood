import { Component } from '@angular/core';
import { FormuComponent } from '../main/formu/formu.component';
import { DeliceComponent } from '../main/delice/delice.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormuComponent, DeliceComponent, HomeComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
