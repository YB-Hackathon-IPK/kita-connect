import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GroupedTimeline } from '../models/grouped-timeline.model';
import { HttpClient } from '@angular/common/http';
import { TimelineEntry } from '../models/timeline-entry.model';

@Injectable()
export class TimelineService {
  private readonly millisecondsInADay = 86_400_000;

  constructor(private httpClient: HttpClient) {
  }

  public fetchTimeline(filter: (entry: TimelineEntry) => boolean = () => true): Observable<GroupedTimeline> {
    return this.httpClient.get<{ data: Timeline }>(
        'https://ybhack-ipk-fn.azurewebsites.net/api/timeline?child=Adrienne+Ponce')
        .pipe(
            map(data => data.data),
            map(entries => this.groupAndSortByDay(entries, filter)),
            catchError(() => of([]))
        );
  }

  public updateFavorite(data: { id: string, favorite: boolean }): Observable<any> {
    return this.httpClient.post('', data);
  }

  private groupAndSortByDay(entries: Timeline, filter: (entry: TimelineEntry) => boolean): GroupedTimeline {
    entries.sort((a, b) => b.timestamp - a.timestamp);

    let currentDayTimestamp = this.getStartOfDay(entries[0].timestamp);
    return entries
        .filter(filter)
        .reduce((accumulator, current) => {
      currentDayTimestamp = this.getStartOfDay(current.timestamp);

      if (accumulator[currentDayTimestamp]) {
        accumulator[currentDayTimestamp].push(current);
      } else {
        accumulator[currentDayTimestamp] = [current];
      }
      return accumulator;
    }, {});
  }

  private getStartOfDay(timestamp: number) {
    return Math.trunc(timestamp / this.millisecondsInADay) * this.millisecondsInADay;
  }
}
