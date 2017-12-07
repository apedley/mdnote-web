import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  imports: [MatButtonModule, MatSidenavModule, LayoutModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule],
  exports: [MatButtonModule, MatSidenavModule, LayoutModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule]
})
export class AppMaterialModule { }
