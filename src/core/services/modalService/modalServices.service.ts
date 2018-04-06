import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  private modalToOpen;
  constructor() { }
  add(modal: any) {
    this.modalToOpen = modal;
    // add modal to array of active modals
    // this.modals.push(modal);
}
  open(target, el) {
    this.modalToOpen.open(target);
    this.modalToOpen.el.nativeElement.getElementsByTagName('h2')[0].innerHTML = el[0].name;
    this.modalToOpen.el.nativeElement.getElementsByTagName('p')[0].innerHTML = el[0].description;
  }
  close() {
    this.modalToOpen.close();
  }
}
