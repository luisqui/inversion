import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {
  data ={
    nombre: "Hola, Camila",
    icon: "mdi-bell-outline"
  }
  constructor() {}

}
