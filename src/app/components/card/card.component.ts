import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardsComponent {

  @Input() gameCover:string = "bt-1.jpg";
  @Input() gameLabel:string = "Exclusive";
  @Input() gameType:string = "Digital PS4"
  @Input() gamePrice:string = "R$ 129,99"

  
}
