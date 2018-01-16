import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h1 mat-dialog-title class="color-title">{{ data.title }} Shared</h1>
  <div mat-dialog-content>
    <div class="share-link">
      Link: <a class="external-link" [href]="data.fullUrl" target="_" tabindex="-1">{{ data.fullUrl }}</a>
    </div>
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button ngxClipboard [cbContent]="data.fullUrl">Copy Link</button>
    <button mat-raised-button [mat-dialog-close]="true">Ok</button>
  </div>
  `,
  styleUrls: ['./dialogs.scss']
})
export class ShareDialogComponent {
  constructor(public dialogRef: MatDialogRef<ShareDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  copyUrl() {
    console.log(this.data.fullUrl);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

