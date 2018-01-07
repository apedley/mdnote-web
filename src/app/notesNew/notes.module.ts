import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoryListViewComponent } from './containers/category-list-view/category-list-view.component';
import { SidebarLayoutComponent } from '../core/containers/sidebar-layout/sidebar-layout.component';
import { reducers } from './store/reducers';
import { CoreModule } from '../core/core.module';
import { CategoriesEffects } from './store/effects/categories';
import { NotesService } from 'app/notes/notes.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule.forChild([
      { path: '', component: SidebarLayoutComponent, children: [
        { path: '', pathMatch: 'full', component: CategoryListViewComponent },
      ]}
    ]),

    StoreModule.forFeature('notes', reducers),

    EffectsModule.forFeature([CategoriesEffects]),
  ],
  declarations: [
    CategoryListViewComponent
  ],
  exports: [],
  providers: [NotesService]
})
export class NotesModule { }
