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

  
}
