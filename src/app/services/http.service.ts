import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share, tap } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';
import { Apod } from '../interfaces/apod.interface';
import { ApodService } from './apod.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private apodService: ApodService) { }

  getPhotoOfTheDay() {
    return this.http.get(this.ApiUrl).pipe(share(),tap( (d: Apod) => this.apodService.updateApod(d)));
  }
  
  getPhotoFromDate(date) {
    return this.http.get(this.ApiUrlWithoutDate+date+'&hd=true').pipe(share(),tap( (d: Apod) => this.apodService.updateApod(d)));
  }

  private get ApiUrl() {
    return environment.apodApi.url + environment.apodApi.key + '&date='+this.DateNow+'&hd=true';
  }
  private get ApiUrlWithoutDate() {
    return environment.apodApi.url + environment.apodApi.key + '&date=';
  }

  private get DateNow() {
    const date = new Date().toISOString();
    const dateStr = date.split('T')[0];
    return dateStr;
  }
}
