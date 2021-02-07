import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apod } from '../interfaces/apod.interface';
import { ImageService } from './image.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  img$: Observable<any>;
  private apiLoaded = false;

  constructor(private imgService: ImageService)  { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.img$ = this.imgService.dayPhoto();
  }

  onReadMore() {
    this.imgService.activateOverlay();
  }

}
