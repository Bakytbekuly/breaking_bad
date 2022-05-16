import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../types'
@Component({
  selector: 'app-charascter',
  templateUrl: './charascter.component.html',
  styleUrls: ['./charascter.component.css']
})
export class CharascterComponent implements OnInit {

  @Input() character: Character | null = null

  ngOnInit(): void {
  }

}
