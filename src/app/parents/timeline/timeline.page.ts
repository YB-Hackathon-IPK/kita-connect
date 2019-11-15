import { Component } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { GroupedTimeline } from '../models/grouped-timeline.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-timeline-tab',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage {
  public loaded = false;
  public timeline$: Observable<GroupedTimeline>;

  constructor(private timelineService: TimelineService) {
    this.timeline$ = this.timelineService.fetchTimeline()
        .pipe(finalize(() => this.loaded = true));
  }
}
