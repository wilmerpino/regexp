import { Component, OnInit, AnimationTransitionEvent  } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
    private _opened: boolean = true;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = true;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  constructor() { }

  ngOnInit() {
  }

    private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
