// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { AuthComponent } from './auth.component';
// import { DebugElement } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppMaterialModule } from '../../../core/app-material.module';
// import { RouterModule } from '@angular/router';
// import { CoreModule } from '../../../core/core.module';
// import { AuthService } from '../../auth.service';
// import { Observable } from 'rxjs/Observable';
// import { Router, ActivatedRoute } from '@angular/router';

// import { of } from 'rxjs/observable/of';
// import { LayoutComponent } from '../../../core/containers/layout/layout.component';
// import { SidebarContainerComponent } from '../../../core/containers/sidebar/sidebar-container.component';
// import { LayoutService } from '../../../core/layout.service';

// class LayoutStub {
//   getSidebarOpen() {
//     return of(true);
//   }
// }
// class RouterStub {
//   navigateByUrl(url: string) { return url; }
// }

// class ActivatedRouteStub {
//   snapshot = {
//     data: {
//       authFunction: 'Sign In'
//     }
//   };
// }
// class AuthServiceStub {
//   signup() {

//   }
//   signin() {

//   }
//   getError() {
//     return 'An error';
//   }
//   getFormLoading() {
//     return of(false);
//   }
//   getAuthenticated() { return true; }
// }

// xdescribe('Component: AuthComponent', () => {
//   let fixture: ComponentFixture<AuthComponent>;
//   let authComponent: AuthComponent;
//   let element: any;
//   let debugElement: DebugElement;
//   let store;


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         AppMaterialModule,
//         RouterModule
//       ],
//       declarations: [
//         AuthComponent,
//         LayoutComponent,
//         SidebarContainerComponent
//       ],
//       providers: [
//         {provide: AuthService, useClass: AuthServiceStub },
//         {provide: LayoutService, useClass: LayoutStub },
//         { provide: Router,      useClass: RouterStub },
//         // { provide: ActivatedRoute,      useValue: {snapshot: { data: { authFunction: 'authing' } } } }
//         { provide: ActivatedRoute,      useClass: ActivatedRouteStub }
//       ]

//     });

//     fixture = TestBed.createComponent(AuthComponent);
//     // store = fixture.debugElement.injector.get(Store);
//     authComponent = fixture.componentInstance;
//     element = fixture.nativeElement;
//     debugElement = fixture.debugElement;
//   });

//   afterEach(() => {
//     if (fixture) {
//       fixture.destroy();
//     }
//   });

//   it('should render `Sign In`', async(() => {
//     authComponent.authFunction = 'Sign In';

//     fixture.detectChanges();

//     fixture.whenStable().then(() => {
//       expect(element.querySelector('div[class=page-title]').value).toBe('Sign In');
//     });
//   }));
// });
