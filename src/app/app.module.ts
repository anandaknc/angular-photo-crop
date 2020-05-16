import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MfsPhotoUploadComponent } from '../mfs-photo-upload/mfs-photo-upload.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ImageCropperModule],
  declarations: [ AppComponent, HelloComponent ,MfsPhotoUploadComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
