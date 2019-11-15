import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimelineEntry } from 'src/app/parents/models/timeline-entry.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable()
export class TimelinePostService {
  constructor(private httpClient: HttpClient) {}

  public postEntry(entry: TimelineEntry): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(
      'https://ybhack-ipk-fn.azurewebsites.net/api/timelineEntry',
      entry
    );
  }
}
