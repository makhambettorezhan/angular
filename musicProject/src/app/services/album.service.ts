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
}
