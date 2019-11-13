import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/core/models';
import { SongsService } from '../songs.service';
import { MessageService } from 'src/app/shared/message/message.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-songs',
  templateUrl: './register-songs.component.html',
  styleUrls: ['./register-songs.component.css']
})
export class RegisterSongsComponent implements OnInit {

  private song = new Song();
  private isEdit: boolean;
  private pageTitle: string;

  constructor(private songsService: SongsService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private title: Title,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.title.setTitle("Músicas");
    this.pageTitle = "Cadastrar Música";

    const identifierSong = this.route.snapshot.params['identifier'];
    
    if(identifierSong) {
      this.findSong(identifierSong);
    }
  }

  private findSong(identifierSong: number) {
    this.songsService.findByIdentifier(identifierSong)
        .then(returnedSong => {
          this.song = returnedSong;
          this.isEdit = true;
          this.pageTitle = "Edição de Música: "+ returnedSong.name;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  save() {
    if(this.isEdit) {
      this.updateSong();
    } else {
      this.registerSong();
    }
  }
  private registerSong() {
    this.songsService.register(this.song)
      .subscribe(() => {
        this.messageService.mensagemSucesso('Música cadastrada com sucesso!');
        this.redirectListSongs();
      }, (response) => this.errorHandler.handle(response));
  }

  private updateSong() {
    this.songsService.update(this.song)
      .then(() => {
        this.messageService.mensagemSucesso('Música atualizada com sucesso!');
        this.redirectListSongs();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private redirectListSongs() {
    this.router.navigate(['musicas']);
  }

}
