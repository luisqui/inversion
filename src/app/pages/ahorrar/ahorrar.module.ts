import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AhorrarPage } from './ahorrar.page';
import { AhorrarPageRoutingModule } from './ahorrar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AhorrarPage }]),
    AhorrarPageRoutingModule,
  ],
  declarations: [AhorrarPage]
})
export class AhorrarPageModule {}
