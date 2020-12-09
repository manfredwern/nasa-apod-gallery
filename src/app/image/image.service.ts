import { Injectable } from '@angular/core';
import { noop } from 'rxjs';
import { first } from 'rxjs/operators';
import { ApodService } from '../services/apod.service';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpService, private apodService: ApodService) { }

  requestPhoto() {
    this.http.getPhotoOfTheDay().pipe(first()).subscribe(noop);
  } 

  dayPhoto() {
    return this.apodService.getApod();
  }

}
