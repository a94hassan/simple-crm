import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogComponent } from './add-user-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AddUserDialogComponent', () => {
  let component: AddUserDialogComponent;
  let fixture: ComponentFixture<AddUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserDialogComponent, BrowserAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: Firestore, useValue: {} }, {provide: UserService, useValue: {}}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
