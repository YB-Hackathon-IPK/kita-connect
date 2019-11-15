import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private camera: Camera,
    private postService: TimelinePostService
  ) {
    this.camOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
  }

  setSentiment(newSentiment: number) {
    if (newSentiment === this.sentiment) {
      this.sentiment = null;
    } else {
      this.sentiment = newSentiment;
    }
  }

  send() {
    this.postService.postEntry({
      child: 'Adrienne Ponce',
      favorite: false,
      image: this.imageDataUrl,
      sentiment: this.sentiment,
      text: this.text,
      timestamp: new Date().valueOf(),
    } as TimelineEntry);
  }

  ngOnInit(): void {
    if (!this.camera) {
      return;
    }

    this.params$.subscribe(p => {
      if (p.get('type') === 'camera') {
        this.camera
          .getPicture(this.camOptions)
          .then(data => 'data:image/jpeg;base64,' + data)
          .then(dataUrl => (this.imageDataUrl = dataUrl));
      }
    });
  }
}
