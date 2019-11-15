import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TimelineEntry } from '../../models/timeline-entry.model';
import { TimelineService } from '../../services/timeline.service';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineEntryComponent {
  @Input() entry: TimelineEntry;

  constructor(private timelineService: TimelineService){
  }

  public isValidSentiment(): boolean {
    return this.entry.sentiment === 0 || this.entry.sentiment === 1 || this.entry.sentiment === 2;
  }

  public updateFavorite() {
    this.timelineService.updateFavorite({
      id: this.entry.id,
      favorite: !this.entry.favorite
    })
        .subscribe();
  }

  get concatenatedTags(): string {
    return this.entry.tags.reduce((tags, tag) => `${tags} #${tag}`,'')
  }
}
