import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paneles',
  templateUrl: './paneles.component.html',
  styleUrls: ['./paneles.component.css']
})

export class PanelesComponent {
  @Input() message:string;
  @Input() title: string;
  @Input() active:boolean;

  constructor() { }

  show () {
    this.active = true;
  }

  hide () {
    this.active = false;
  }

}
