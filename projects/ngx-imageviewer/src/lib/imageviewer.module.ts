import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './imageviewer.component';
import { IMAGEVIEWER_CONFIG, IMAGEVIEWER_CONFIG_DEFAULT } from './imageviewer.config';

@NgModule({
  imports: [ImageViewerComponent],
  exports: [ImageViewerComponent],
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: IMAGEVIEWER_CONFIG_DEFAULT
    }
  ]
})
export class ImageViewerModule { }
