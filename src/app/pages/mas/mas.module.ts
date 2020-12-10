import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasPage } from './mas.page';

import { MasPageRoutingModule } from './mas-routing.module';

@NgModule({
  declarations: [MasPage],
  imports: [
    IonicModule,
    CommonModule,
    MasPageRoutingModule
  ]
})
export class MasPageModule { }