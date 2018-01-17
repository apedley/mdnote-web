import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h1 mat-dialog-title>{{ data.title }}</h1>
  <div mat-dialog-content>
    <p>{{ data.content }}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()" tabindex="-1" *ngIf="data.cancelButton">Cancel</button>
    <button mat-button [mat-dialog-close]="true" tabindex="2">Ok</button>
  </div>
  `,
  styleUrls: ['./dialogs.scss']
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

