import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  img$: Observable<any>;

  constructor(private imgService: ImageService)  { }

  ngOnInit(): void {
    this.imgService.requestPhoto();
    
    this.img$ = this.imgService.dayPhoto().pipe(
      tap(
        c => console.log(c)
      )
    );
  }

}
