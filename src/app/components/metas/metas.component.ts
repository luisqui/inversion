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

  dataCard = [ {
    img: "isla",
    nombre: "Viaje a islas canarias",
    objetivo: 8000000,
    progreso: 1630000
    }, {
    img: "mac",
    nombre: "Macbook Pro",
    objetivo: 7000000,
    progreso: 0
  }]

  slidesOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    preloadImages: true,
    updateOnImagesReady: true,
    freeMode: true,
    spaceBetween: 0,
    loop: true,
    //autoplay: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    centeredSlides: true,
    // lazy: true,
    //speed: 300,
    // dynamicBullets: true,
  };
  constructor() { }

  ngOnInit() {
    
  }

}
