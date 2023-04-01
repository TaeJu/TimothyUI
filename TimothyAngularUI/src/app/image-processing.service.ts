import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './_model/file-handle.model';
import { Rider } from './_model/rider.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(rider: Rider) {
    const riderImage: any = rider.imageModel;

    if (riderImage != null) {
      const imageBlob = this.dataURItoBlob(riderImage.picByte, riderImage.type);

      const imageFile = new File([imageBlob], riderImage.name, { type: riderImage.type });
  
      const riderImageToFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
  
      rider.imageModel = riderImageToFileHandle;
    }

    return rider;
  }

  public dataURItoBlob(picBytes, imageType) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Aray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Aray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Aray], { type: imageType});
    return blob;
  }
}
