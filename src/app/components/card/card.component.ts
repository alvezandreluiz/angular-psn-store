import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardDetailsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
}
