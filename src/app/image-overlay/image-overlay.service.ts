import { Injectable } from '@angular/core';
import { ApodService } from '../services/apod.service';

@Injectable({
  providedIn: 'root'
})
export class ImageOverlayService {

  constructor(private apodService: ApodService) { }


  overlayStatus() {
    return this.apodService.getApodOverlayStatus();
  }

  overlayContent() {
    return this.apodService.getApod();
  }

  overlayClose() {
    this.apodService.hideOverlay();
  }

}
