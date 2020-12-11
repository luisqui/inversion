import { Component, Input, OnInit } from '@angular/core';
import { MetasData } from '../../../models/core.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()data:MetasData;
  porcentaje = 0;
  constructor() { }

  ngOnInit() {
    this.porcentaje = Math.floor((this.data.progreso * 100)/this.data.objetivo)
  }

}
