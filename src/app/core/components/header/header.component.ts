import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarEnabled = true;
  @Input() pageTitle = '';
  @Input() authenticated = false;

  @Output() menuClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {

  }

  onMenuClick() {
    this.menuClicked.emit();
  }


}
