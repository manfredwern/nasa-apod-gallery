import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apod } from '../interfaces/apod.interface';
import { ImageOverlayService } from './image-overlay.service';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.css']
})
export class ImageOverlayComponent implements OnInit, OnDestroy {

  overlaySubscription: Subscription;
  overlay$: Observable<boolean>;
  overlayContent$: Observable<Apod>;

  constructor(private imgOverlayService: ImageOverlayService) { }

  ngOnInit(): void {
    this.overlay$ = this.imgOverlayService.overlayStatus()
    this.overlayContent$ = this.imgOverlayService.overlayContent();


  }

  onCloseOverlay() {
    this.imgOverlayService.overlayClose();
  }

  ngOnDestroy() {
    this.overlaySubscription.unsubscribe();
  }

}
