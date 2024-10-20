import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeComponent {
  games = [
    { image: 'astro-bot.jpg', label: 'PS5', edition: 'PREMIUM EDITION', title: 'Astro Bot Digital Deluxe Edition', price: '$69.99' },
    { image: 'gow-rag.jpg', label: 'PS4 | PS5', edition: 'PREMIUM', title: 'God of War Ragnarok', price: '$69.99' },
    { image: 'gt-7.jpg', label: 'PS4 | PS5', edition: 'GAME BUNDLE', title: 'Gran Turismo 7', price: '$69.99' },
    { image: 'last-of-us.jpg', label: 'PS5', edition: 'EXTRA', title: 'The Last of Us Part I', price: '$69.99' },
    { image: 'sonic-gens.jpg', label: 'PS4 | PS5', edition: 'PRE-ORDER', title: 'Sonic X Shadow Generations Digital de Luxe Edition', price: '$59.99' },
    { image: 'street-fighter-5.jpg', label: 'PS4 | PS5', edition: 'GAME BUNDLE', title: 'Street Fighter 6 Ultimate Edition', price: '$104.99' },
    { image: 'nba-2k25.jpg', label: 'PS4 | PS5', edition: 'GAME BUNDLE', title: 'NBA 2K25 Standard Edition', price: '$48.99' },
    { image: 'spider-man-2.jpg', label: 'PS5', edition: 'PREMIUM', title: "Marvel's Spider-Man 2", price: '$69.99' },
    { image: 'ac-2in1.jpg', label: 'PS4 | PS5', edition: 'GAME BUNDLE', title: "Assassin's Creed Mirage & Valhalla", price: '$99.99' },
    { image: 'sil-hill2.jpg', label: 'PS5', edition: 'PREMIUM EDITION', title: 'Silent Hill 2 Deluxe Edition', price: '$79.99' },
    { image: 'gta-v.jpg', label: 'PS5', edition: 'GAME BUNDLE', title: 'Grand Theft Auto V', price: '$19.99' },
    { image: 'call-of-duty-6.jpg', label: 'PS4 | PS5', edition: 'PRE-ORDER', title: 'Call of Duty: Black Ops 6', price: '$69.99' }
  ];

  onMouseEnter(slide: EventTarget | null) {
    const target = slide as HTMLElement; // Asserção de tipo
    if (target) {
      target.classList.add('hover');
    }
  }
  
  onMouseLeave(slide: EventTarget | null) {
    const target = slide as HTMLElement; // Asserção de tipo
    if (target) {
      target.classList.remove('hover');
    }
  }
}