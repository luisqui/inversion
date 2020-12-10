import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilPage } from './perfil.page';
import { PerfilPageRoutingModule } from './perfil-routing.module';

@NgModule({
  declarations: [PerfilPage],
  imports: [
    IonicModule,
    CommonModule,
    PerfilPageRoutingModule
  ]
})
export class PerfilPageModule { }