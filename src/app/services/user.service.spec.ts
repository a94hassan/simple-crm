import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Firestore } from '@angular/fire/firestore';


describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Firestore, useValue: {}},
        { provide: UserService, useValue: {}}
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
