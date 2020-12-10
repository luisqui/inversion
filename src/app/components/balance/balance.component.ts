import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  data = [
    {
      nombre: "Inversión",
      valor: 1600000
    },{
      nombre: "Rendimiento",
      valor: -30000
    }
  ]
  constructor() { }

  ngOnInit() {}

}
