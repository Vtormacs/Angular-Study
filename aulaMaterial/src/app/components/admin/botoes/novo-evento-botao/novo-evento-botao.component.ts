import { Component } from '@angular/core';
import { NovoEventoModalComponent } from '../../modal/novo-evento-modal/novo-evento-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-novo-evento-botao',
  standalone: true,
  imports: [],
  providers: [MdbModalService],
  templateUrl: './novo-evento-botao.component.html',
  styleUrls: ['./novo-evento-botao.component.scss'],
})
export class NovoEventoBotaoComponent {
  modalRef: MdbModalRef<NovoEventoModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(NovoEventoModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
