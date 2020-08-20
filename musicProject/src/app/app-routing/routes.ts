import { AboutComponent } from './../about/about.component';
import { AlbumDetailComponent } from './../album-detail/album-detail.component';
import { ContactComponent } from './../contact/contact.component';
import { AlbumComponent } from './../album/album.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: AlbumComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'albumdetail/:id', component: AlbumDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]