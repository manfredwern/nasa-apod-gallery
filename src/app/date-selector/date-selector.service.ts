import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DateSelectorService {

  constructor(private http: HttpService) { }

  getPhotoByDate(dateStr: string) {
    return this.http.getPhotoFromDate(dateStr);
  } 

}
