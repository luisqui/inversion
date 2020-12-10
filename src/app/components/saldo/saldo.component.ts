import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss'],
})
export class SaldoComponent implements OnInit {
  saldo = 1570000;
  constructor() { }

  ngOnInit() {}

}
