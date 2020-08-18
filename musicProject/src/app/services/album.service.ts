import { ALBUMS } from './../shared/albums';
import { Album } from './../shared/album';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums(): Album[] {
    return ALBUMS;
  }

  getAlbumById(id: string): Album {
    return ALBUMS.filter(album => album.id === id)[0];
  }
}
