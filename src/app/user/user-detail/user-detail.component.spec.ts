import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let activatedRouteStub: Partial<ActivatedRoute>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent],
      providers: [{provide: ActivatedRoute, useValue: activatedRouteStub}, {provide: Firestore, useValue: {}}, {provide: UserService, useValue: {}}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
