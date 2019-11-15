import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentsPageRoutingModule } from './parents-routing.module';

import { ParentsPage } from './parents.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParentsPageRoutingModule
  ],
  declarations: [ParentsPage]
})
export class ParentsModule {
}
