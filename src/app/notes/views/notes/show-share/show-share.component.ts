
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Share } from '../../../models/share.model';
import { NotesService } from 'app/notes/notes.service';


@Component({
  selector: 'app-show-share',
  templateUrl: './show-share.component.html',
  styleUrls: ['./show-share.component.scss']
})
export class ShowShareComponent implements OnInit {
  share: Observable<Share>;
  shareUrl: string;

  constructor(public route: ActivatedRoute, public notes: NotesService, public router: Router) {
    this.shareUrl = this.route.snapshot.paramMap.get('shareId');

    this.notes.getShare(this.shareUrl);

    this.share = this.notes.selectShare();
  }

  ngOnInit() {
  }

}
