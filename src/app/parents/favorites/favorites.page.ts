import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupedTimeline } from '../models/grouped-timeline.model';
import { TimelineService } from '../services/timeline.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-favorites-tab',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {
  public loaded = false;
  public timeline$: Observable<GroupedTimeline>;

  constructor(private timelineService: TimelineService) {
    this.timeline$ = this.timelineService.fetchTimeline(entry => entry.favorite)
        .pipe(finalize(() => this.loaded = true));
  }

}
