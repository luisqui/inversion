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
registerLocaleData(localeEs, 'Es');


@NgModule({
  declarations: [HeaderComponent, SaldoComponent, BalanceComponent,MetasComponent, CardComponent],
  imports: [
    CommonModule,
    IonicModule
  ], 
  exports: [HeaderComponent, SaldoComponent, BalanceComponent, MetasComponent]
})
export class ComponentsModule { }
