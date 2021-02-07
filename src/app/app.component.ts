import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nasa-apod-gallery';

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getRandomParagraph();
  }

}
