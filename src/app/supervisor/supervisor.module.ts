import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupervisorPageRoutingModule } from './supervisor-routing.module';

import { SupervisorPage } from './supervisor.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SupervisorPageRoutingModule
  ],
  declarations: [SupervisorPage]
})
export class SupervisorModule {
}
