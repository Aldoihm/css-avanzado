import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  ocultar:boolean = false;

  cambiarEstilo(){
    this.ocultar = !this.ocultar;
  }

}
