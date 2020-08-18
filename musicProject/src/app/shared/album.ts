import { Track } from './track';

export class Album {
    id: string;
    title: string;
    cover: string;
    artist: string;
    tracks: Track[];
}