import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../interfaces/apod.interface';

const initialApod: Apod = {
  date: "2020-12-09",
  explanation: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  media_type: "video",
  service_version: "v1",
  title: "Lorem ipsum dolor sit amet",
  url: "https://picsum.photos/200/300"
}

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private apod = new BehaviorSubject<Apod>(initialApod);

  constructor() { }

  updateApod(data: Apod) {
    this.apod.next(data);
  } 

  clearApof() {
    this.apod.next(null);
  }

  getApod() {
    return this.apod;
  }

}
