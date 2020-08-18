import { ContactComponent } from './../contact/contact.component';
import { AlbumComponent } from './../album/album.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: AlbumComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]