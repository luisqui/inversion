import { Component, Input, OnInit } from '@angular/core';
import { HeaderData } from '../../models/core.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()data:HeaderData = {
    nombre:"Camila",
    icon:"mdi-bell-outline",
    badge:null
  };
  constructor() { }

  ngOnInit() {}

}
