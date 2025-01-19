import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Alle müssen gleichzeitig mit dem trinken beginnen. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört, und so weiter.' },
    { title: 'Du', description: 'Du entscheidest, wer trinken muss.' },
    { title: 'Ich', description: 'Glückwunsch! Trink einen Shot!' },
    { title: 'Category', description: 'Denk dir eine Kategorie aus (z. B. Farben). Jeder Spieler muss ein Element aus der Kategorie nennen.' },
    { title: 'Bust a jive', description: 'Spieler 1 macht eine Tanzbewegung. Spieler 2 wiederholt die Tanzbewegung und fügt eine weitere hinzu.' },
    { title: 'Chicks', description: 'Alle Frauen trinken.' },
    { title: 'Heaven', description: 'Hände hoch! Der letzte Spieler muss trinken!' },
    { title: 'Mate', description: 'Wähle einen Partner. Dein Partner muss immer trinken, wenn du trinkst, und umgekehrt.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'Alle Männer trinken.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Sag etwas, das du noch nie gemacht hast. Jeder, der es gemacht hat, muss trinken.' },
    { title: 'Rule', description: 'Mach eine Regel. Jeder muss trinken, wenn er die Regel bricht.' },
  ];

  title = '';
  description = '';

  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('current card is:', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}