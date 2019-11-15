import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentsPageRoutingModule } from './parents-routing.module';

import { ParentsPage } from './parents.page';
import { TimelineService } from './services/timeline.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParentsPageRoutingModule
  ],
  declarations: [
    ParentsPage
  ],
  providers: [
    TimelineService
  ]
})
export class ParentsModule {
}
