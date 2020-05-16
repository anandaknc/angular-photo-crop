import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-mfs-photo-upload',
  templateUrl: './mfs-photo-upload.component.html',
  styleUrls: ['./mfs-photo-upload.component.css']
})
export class MfsPhotoUploadComponent implements OnInit {

   imageChangedEvent: any = '';
    croppedImage: any = '';
    
  constructor() { }

  ngOnInit() {
  }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

}