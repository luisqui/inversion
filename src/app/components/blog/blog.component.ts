import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  data = [
    {
      titulo: "10 gastos que debes evitar",
      descripcion: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
      img: "blog1"
    },
    {
      titulo: "10 gastos que debes evitar",
      descripcion: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
      img: "blog2"
    }, 
    {
      titulo: "10 gastos que debes evitar",
      descripcion: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
      img: "blog3"
    },
  ]
  constructor() { }

  ngOnInit() {}

}
