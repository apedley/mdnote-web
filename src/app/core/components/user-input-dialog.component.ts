import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user-input-dialog',
  template: `
  <h1 mat-dialog-title>{{ data.title }}</h1>
  <div mat-dialog-content>
    <p>{{ data.content }}</p>
    <mat-form-field>
      <input matInput tabindex="1" [(ngModel)]="data.response" (keydown.enter)="enterPressed($event)">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()" tabindex="-1">Cancel</button>
    <button mat-button [mat-dialog-close]="data.response" tabindex="2">Ok</button>
  </div>
  `,
})
export class UserInputDialogComponent {
  constructor(public dialogRef: MatDialogRef<UserInputDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  enterPressed(event) {
    this.dialogRef.close(this.data.response);
  }
}
