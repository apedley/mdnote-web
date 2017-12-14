import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  const userData = {
    email: 'test123@test.com',
    password: 'test1234'
  };

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  // let httpMock: HttpTestingController;
  // let authService: AuthService;

  beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ HttpClientTestingModule],
  //     providers: [
  //       AuthService,
  //       { provide: Router, useValue: router}
  //     ]
  //   });

  //   authService = TestBed.get(AuthService);
  //   httpMock = TestBed.get(HttpTestingController);
  // });
  describe('signup', () => {
    // it('should navigate to signin after signing up', (done) => {
    //   authService.signup(userData).subscribe(res => {
    //     expect(res).toEqual('ok');
    //     expect(router.navigate).toHaveBeenCalledWith(['/signin']);
    //     done();
    //   });

    //   const signupRequest = httpMock.expectOne('http://localhost:3030/signup');
    //   signupRequest.flush(userData);
    //   httpMock.verify();
    // });
  });

  describe('signin', () => {

    // it('should redirect to / after successful login', (done) => {
    //   authService.signin(userData).subscribe(res => {
    //     expect(router.navigate).toHaveBeenCalledWith(['/']);
    //     expect(res).toEqual('ok');
    //     done();
    //   });

    //   const signinRequest = httpMock.expectOne('http://localhost:3030/signin');
    //   signinRequest.flush({ token: 'abc', user: userData });
    //   httpMock.verify();
    // });

    // it('should not redirect after encourting an error with login', (done) => {
    //   authService.signin(userData).subscribe(null, err => {
    //     expect(err.message).toEqual('Error processing login');
    //     done();
    //   });
    //   const signinRequest = httpMock.expectOne('http://localhost:3030/signin');
    //   signinRequest.flush({});
    //   httpMock.verify();
    // });

  });

  });
});
