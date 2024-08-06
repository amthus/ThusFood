import { Component, Input } from '@angular/core';
import { IInstagram } from '../../models/instagram.interface';

@Component({
  selector: 'app-instagram-item',
  standalone: true,
  imports: [],
  templateUrl: './instagram-item.component.html',
  styleUrl: './instagram-item.component.scss',
})
export class InstagramItemComponent {
  @Input() instagram?: IInstagram;
  constructor() {}
}
