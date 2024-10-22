import { Component } from '@angular/core';
import { CardsComponent } from "../../components/card/card.component";
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dataFake = dataFake;

}
