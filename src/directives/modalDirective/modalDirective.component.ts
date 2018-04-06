import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { ModalService } from '../../core/services/modalService/modalServices.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>'
})

export class ModalDirectiveComponent implements OnInit {
    @Input() id: string;
    private ele: any;
    private target: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
      this.ele = el.nativeElement;
    }

    ngOnInit(): void {
        const modal = this;

        // // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // // move ele to bottom of page (just before </body>) so it can be displayed above everything else
        document.getElementsByTagName('body')[0].appendChild(this.ele);

        // // close modal on background click
        this.ele.addEventListener('click', function (e: any) {
            const target = e.target;
            if (!target.closest('.modal-body')) {
                modal.close();
            }
        });
        this.modalService.add(this);

    }
    // open modal
    open(target): void {
      this.target = target;
      this.ele.setAttribute('style', 'display: block;');
      document.getElementsByTagName('body')[0].classList.add('modal-open');
    }

    // close modal
    close(): void {
      this.ele.removeAttribute('style');
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
      this.target.classList.remove('l-display-none');
    }
}
