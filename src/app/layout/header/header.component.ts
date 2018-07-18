import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input() isCollapsed: boolean;
  @Output() onToogleCollapsed = new EventEmitter<boolean>();

  toogleCollapsed() {
    this.onToogleCollapsed.emit(!this.isCollapsed);
  }
}
