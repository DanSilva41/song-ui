import { ListSongsComponent } from './list-songs/list-songs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSongsComponent } from './register-songs/register-songs.component';

const routes: Routes = [
  { path: '', component: ListSongsComponent },
  { path: ':identifier', component: RegisterSongsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
