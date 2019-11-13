import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Especie, Song } from '../core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private URL;

  constructor(private http: HttpClient) {
    this.URL = `${environment.apiHost}/api/especies`;
  }

  listSongs() {
    return this.http.get<any>(this.URL);
  }

  findByIdentifier(identifierSong: number): Promise<Song>{
    return this.http.get<any>(`${this.URL}/${identifierSong}`)
      .toPromise()
      .then(response => response as Song);
  }

  register(song): Observable<any> {
    return this.http.post<any>(this.URL, song);
  }

  update(song): Promise<Song> {
    return this.http.put<any>(this.URL, song)
      .toPromise()
      .then(response => response as Song );;
  }

  delete(identifierSong: number): Promise<Array<Song>> {
    return this.http.delete<any>(`${this.URL}/${identifierSong}`)
      .toPromise()
      .then(response => response as Array<Song>);
  }
}
