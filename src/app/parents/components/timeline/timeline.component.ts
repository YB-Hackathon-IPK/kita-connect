import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GroupedTimeline } from '../../models/grouped-timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  @Input() timeline: GroupedTimeline;

  get timelineKeys(): Array<string> {
    return Object.keys(this.timeline);
  }
}
