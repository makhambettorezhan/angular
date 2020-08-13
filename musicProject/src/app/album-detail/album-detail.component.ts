import { Album } from './../shared/album';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  @Input()
  album: Album;

  constructor() { }

  ngOnInit(): void {
  }

  toValidFormat(duration: number): string {
    var minutes = 0;

    while( duration > 60 ) {
      minutes++;
      duration -= 60;
    }
    if(duration < 10) return `(${minutes}:0${duration})`  
    return `(${minutes}:${duration})`;
  }
}
