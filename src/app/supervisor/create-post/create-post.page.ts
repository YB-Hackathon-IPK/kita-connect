import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimelineEntryType } from '../../parents/models/timeline-entry-type.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TimelinePostService } from '../services/timeline-post.service';
import { TimelineEntry } from 'src/app/parents/models/timeline-entry.model';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.page.html',
  styleUrls: ['create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  params$ = this.route.paramMap;
  camOptions: CameraOptions;
  text: string;
  imageDataUrl: string;
  sentiment: number = null;
  type: TimelineEntryType;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private camera: Camera,
              private postService: TimelinePostService) {
    this.camOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
  }

  public getFancyTypeName(type: TimelineEntryType) {
    switch (type) {
      case 'image':
        return 'Bild';
      case 'menue':
        return 'Mittagsmenu';
      case 'summary':
        return 'Tagesfazit';
      case 'text':
        return 'Text';
      case 'video':
        return 'Video';
    }
  }

  setSentiment(newSentiment: number) {
    if (newSentiment === this.sentiment) {
      this.sentiment = null;
    } else {
      this.sentiment = newSentiment;
    }
  }

  send() {
    const entry: TimelineEntry = {
      child: 'Adrienne Ponce',
      favorite: false,
      image: this.imageDataUrl,
      sentiment: this.sentiment,
      text: this.text,
      timestamp: new Date().valueOf(),
      type: this.type,
      id: '',
      tags: [],
    };

    this.postService
        .postEntry(entry)
        .subscribe(
            () => this.router.navigate(['../success'], { relativeTo: this.route }),
            () => this.router.navigate(['../../overview'], { relativeTo: this.route })
        );
  }

  ngOnInit(): void {
    this.params$.subscribe(p => {
      this.type = p.get('type') as TimelineEntryType;

      if (p.get('type') === 'camera') {
        if (!this.camera) {
          return;
        }
        this.type = 'image';
        this.camera
            .getPicture(this.camOptions)
            .then(data => 'data:image/jpeg;base64,' + data)
            .then(dataUrl => (this.imageDataUrl = dataUrl));
      }
    });
  }
}
