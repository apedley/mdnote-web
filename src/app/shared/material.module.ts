import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatExpansionModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
