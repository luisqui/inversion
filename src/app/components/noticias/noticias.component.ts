import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  data ={
    nombre: "Los P*t@s del ahorro"
  }
  constructor() { }

  ngOnInit() {}

}
