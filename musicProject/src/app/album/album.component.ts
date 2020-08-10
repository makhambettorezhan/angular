import { AlbumService } from './../services/album.service';
import { Album } from './../shared/album';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: Album[];

  selectedAlbum: Album;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album; 
  }
}
