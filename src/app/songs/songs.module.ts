import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { ListSongsComponent } from './list-songs/list-songs.component';

@NgModule({
  imports: [
    CommonModule,
    SongsRoutingModule
  ],
  declarations: [ListSongsComponent]
})
export class SongsModule { }
