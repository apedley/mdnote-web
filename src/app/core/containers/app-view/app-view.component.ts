import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromRoot from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-view',
  template: `
      <router-outlet></router-outlet>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppViewComponent {
  constructor() {

  }
}
