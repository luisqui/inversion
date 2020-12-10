import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss'],
})
export class MetasComponent implements OnInit {
  data = {
    nombre: "Tus metas",
    icon: "mdi-plus-circle-outline"
  }
  constructor() { }

  ngOnInit() {}

}
