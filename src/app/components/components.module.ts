import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SaldoComponent } from './saldo/saldo.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
import { BalanceComponent } from './balance/balance.component';
import { MetasComponent } from './metas/metas.component';
import { CardComponent } from './metas/card/card.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BlogComponent } from './blog/blog.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideoComponent } from './noticias/video/video.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NgApexchartsModule } from 'ng-apexcharts';
registerLocaleData(localeEs, 'Es');


@NgModule({
  declarations: [
    HeaderComponent,
    SaldoComponent, 
    BalanceComponent,
    MetasComponent, 
    CardComponent, 
    BlogComponent, 
    NoticiasComponent, 
    VideoComponent, 
    PortafolioComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      units:"%",
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ], 
  exports: [HeaderComponent, SaldoComponent, BalanceComponent, MetasComponent, BlogComponent, NoticiasComponent,PortafolioComponent]
})
export class ComponentsModule { }
