import { TimelineEntryType } from './timeline-entry-type.model';

export interface TimelineEntry {
  id: string;
  child: string;
  type: TimelineEntryType;
  favorite: boolean;
  timestamp: number;
  text?: string;
  image?: string;
  video?: string;
  tags?: Array<string>;
  sentiment?: number;
}
