import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apod } from '../interfaces/apod.interface';

const initialApod: Apod = {
  date: "dummy date",
  explanation: "dummy text",
  media_type: "dummy type",
  service_version: "dummy service",
  title: "dummy title",
  url: "dummy url"
}

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apodData = new BehaviorSubject<Apod>(initialApod);
  private apodOverlayToggle = new Subject<boolean>();

  constructor() { }

  updateApod(data: Apod) {
    this.apodData.next(data);
  } 

  clearApod() {
    this.apodData.next(null);
  }

  setDummyApodDataWithRandomText(text: string) {
    const data: Apod = {
      date: "2020-12-09",
      explanation: text,
      media_type: "image",
      service_version: "v1",
      title: "Hello and welcome to my sample project",
      url: "https://picsum.photos/id/10/1920/1080"
    }
    this.updateApod(data);
  }

  /**
   * Returns an Apod item where it trims the URL to a video id
   * if the media type if video and the url is from youtube
   */
  getApod(): Observable<Apod> {
    return this.apodData.pipe(
    map( (res: Apod) => {
      return {
        ...res,
        url: res.media_type === 'video' && res.url.match(/youtube/) ? res.url.match(/embed\/(\S+)\?.*/)[1] : res.url
      }
    })
    );
  }

  showOverlay() {
    this.apodOverlayToggle.next(true);
  }

  hideOverlay() {
    this.apodOverlayToggle.next(false);
  }

  getApodOverlayStatus() {
    return this.apodOverlayToggle;
  }

}
