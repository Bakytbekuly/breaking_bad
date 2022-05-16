import { Component, OnInit } from '@angular/core';
import { Character } from '../../types'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
  div {
    border: 1px solid green;
  }
`]
})
export class CardComponent implements OnInit {

  characters: Character[] = []


  ngOnInit() {
    fetch(`https://www.breakingbadapi.com/api/characters`).then(res => res.json()).then((data) => this.characters = data)
  }

}


