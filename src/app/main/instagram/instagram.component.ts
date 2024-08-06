import { Component } from '@angular/core';
import { IInstagram } from '../../models/instagram.interface';
import { CommonModule } from '@angular/common';
import { InstagramItemComponent } from '../instagram-item/instagram-item.component';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule, InstagramItemComponent],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss'
})
export class InstagramComponent {
   posts: IInstagram[] = [
    {
      id: 1,
      cover:
        'https://journalmetro.com/wp-content/uploads/2022/10/Sans-titre-16.png?resize=1051%2C591',
    },
    {
      id: 2,
      cover:
        'https://s3-media0.fl.yelpcdn.com/bphoto/wYQi7ilHqqE7rQELoTprtA/348s.jpg',
    },
    {
      id: 3,
      cover:
        'https://cdn.shopify.com/s/files/1/1569/1929/files/One_Hungry_Asian_Curry_Goat_Noodles_Tropical_Sun_Curry_Goat_Seasoning_LQ.jpg?v=1625659118',
    },
    {
      id: 4,
      cover:
        'https://www.lalibre.be/resizer/v2/XU5FICYVXJGGLAOKIB727WT7XI.jpg?auth=a988816da800c6f1befd55ac129dd77f939bcd18669efe6de1c44a5da8b8cb4a&width=1200&height=800&quality=85&focal=1875%2C1302',
    }
  ];
}
