import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.page.html',
  styleUrls: ['create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  params$ = this.route.paramMap;
  camOptions: CameraOptions;
  imageDataUrl: string;

  constructor(private route: ActivatedRoute, private camera: Camera) {
    this.camOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
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
