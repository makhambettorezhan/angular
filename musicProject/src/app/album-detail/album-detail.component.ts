import { AlbumService } from './../services/album.service';
import { Album } from './../shared/album';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;

  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.album = this.albumService.getAlbumById(id);
  }

  goBack(): void {
    this.location.back();
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
