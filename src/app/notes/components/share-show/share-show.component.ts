import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Share } from '../../models/share.model';

@Component({
  selector: 'app-share-show',
  templateUrl: './share-show.component.html',
  styleUrls: ['./share-show.component.scss']
})
export class ShareShowComponent {
  @Input() share: Share;


  constructor() { }
}
