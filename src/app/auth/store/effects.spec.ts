// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';

// import { Actions } from '@ngrx/effects';

// import { hot, cold } from 'jasmine-marbles';
// import { Observable } from 'rxjs/Observable';
// import { empty } from 'rxjs/observable/empty';
// import { of } from 'rxjs/observable/of';

// import * as fromEffects from './effects';
// import * as fromActions from './actions';
// import { AuthService } from '../auth.service';


// export class TestActions extends Actions {
//   constructor() {
//     super(empty());
//   }

//   set stream(source: Observable<any>) {
//     this.source = source;
//   }
// }

// export function getActions() {
//   return new TestActions();
// }

// describe('AuthEffects', () => {
//   let actions$: TestActions;
//   let service: AuthService;
//   let effects: fromEffects.AuthEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         AuthService,
//         fromEffects.AuthEffects,
//         { provide: Actions, useFactory: getActions },
//       ],
//     });

//     actions$ = TestBed.get(Actions);
//     service = TestBed.get(AuthService);
//     effects = TestBed.get(fromEffects.AuthEffects);

//     spyOn(service, '').and.returnValue(of(toppings));
//   });
// });
// https://github.com/UltimateAngular/ngrx-store-effects-app/blob/27-testing-effects/src/products/store/effects/pizzas.effect.spec.ts
