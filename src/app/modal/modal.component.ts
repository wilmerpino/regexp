import { Component, EventEmitter, ElementRef, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {
    @Input() id: string;
    @Input() titulo: string;
    active:boolean = false;

    constructor() {

    }

    ngOnInit(): void {
        let modal = this;
        // ensure id attribute exists
        /*if (!this.id) {
            console.error('modal must have an id');
            return;
        }*/

    }

    // remove self from modal service when directive is destroyed
    /*ngOnDestroy(): void {

    }*/

    // open modal
    open(): void {
        this.active = true;
    }

    // close modal
    close(): void {
       this.active = false;
    }
}   