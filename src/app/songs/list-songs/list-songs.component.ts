import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/core/models';
import { MessageService } from 'src/app/shared/message/message.service';
import { ConfirmationModalService } from 'src/app/shared/confirmation-modal/confirmation-modal.service';
import { Title } from '@angular/platform-browser';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent implements OnInit {

  private songs: Array<Song>;
  private pageTitle: string;

  constructor(private songsService: SongsService,
              private messageService: MessageService,
              private confirmationModalService: ConfirmationModalService,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Músicas');
    this.pageTitle = "Lista de Músicas";
    
    // this.listar();
  }

  private listar() {
    this.songsService.listSongs().subscribe(response => this.songs = response);
  }

  private openConfirmationModal(song: Song) {
    let objetoCustomizado = this.retornarPropriedadesCustomizadas(song);
      this.confirmationModalService.confirmar('Confirmação de exclusão', 'Você realmente deseja excluir esta espécie?', objetoCustomizado)
        .then((confirmado) => {
          this.songsService.delete(song.identifier)
            .then((response) => {
              this.songs = response;
              this.messageService.mensagemSucesso('Espécie deletada com sucesso!');
            });
        })
        .catch(() => 
          console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  private retornarPropriedadesCustomizadas(song: Song) {
    let objetoCustomizado = {
      "Código": song.identifier,
      "Nome": song.name,
      "Descrição": song.description
    }
    return objetoCustomizado;
  }

}
