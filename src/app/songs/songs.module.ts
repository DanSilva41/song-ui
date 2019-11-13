import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { ListSongsComponent } from './list-songs/list-songs.component';
import { SongsService } from './songs.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterSongsComponent } from './register-songs/register-songs.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SongsRoutingModule
  ],
  declarations: [ ListSongsComponent, RegisterSongsComponent ],
  providers: [ SongsService ]
})
export class SongsModule { }
