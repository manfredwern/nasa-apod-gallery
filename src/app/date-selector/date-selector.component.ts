import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';

// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { DateSelectorService } from './date-selector.service';
import { first } from 'rxjs/operators';
import { noop } from 'rxjs';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DateSelectorComponent implements OnInit {

  @ViewChild('picker', {static: true}) datePicked: ElementRef;

  date = moment();
  events: string[] = [];

  myfilter = (d: Date | null): boolean => {
    const now = moment();
    const day = moment(d);
    return now > day;
    
  }
  

  constructor(private dsService: DateSelectorService) { }

  ngOnInit(): void {
    console.log(this.date.format('YYYY[-]MM[-]DD'));
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(`${type}: ${event.value}`);
    const d = this.convertDateString(event.value)
    console.log('moment: ', d);

    this.dsService.getPhotoByDate(d).pipe(first()).subscribe(noop);

  }

  private convertDateString(date) {
    return moment(date).format('YYYY[-]MM[-]DD');
  }

}
