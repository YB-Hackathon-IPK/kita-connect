import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEntryComponent } from './timeline-entry/timeline-entry.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    TimelineComponent,
    TimelineEntryComponent
  ],
  exports: [
    TimelineComponent,
    TimelineEntryComponent
  ]
})
export class ComponentsModule {
}
