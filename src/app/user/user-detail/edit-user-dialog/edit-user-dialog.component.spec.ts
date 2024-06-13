import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDialogComponent } from './edit-user-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { UserService } from '../../../services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditUserDialogComponent', () => {
  let component: EditUserDialogComponent;
  let fixture: ComponentFixture<EditUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserDialogComponent, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: UserService, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
